///<reference path="../manual_typings/custom.d.ts"/>
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import 'babelify/polyfill';
window['jQuery'] = window['$'] = require('jquery');
import 'rxjs';
import 'bootstrap';
import {bootstrap} from 'angular2/platform/browser';
import {ComponentRef, PLATFORM_DIRECTIVES, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {App} from './components/app/app';
import {appInjector} from './helpers/app-injector';

import {Auth} from './services/auth/auth';
import {UserService} from './services/users/users';

bootstrap(App, [
	// Angular Providers
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,

	// Global services
	Auth,
	UserService,

	// Use Hashed URLs instead of HTML5 URLs
	provide(LocationStrategy, {useClass: HashLocationStrategy}),

	// Make router components and directives available to all components
	provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi:true})
]).then((appRef: ComponentRef) => {
	// Store a reference to the injector
  // Workaround for using Dependency Injection
  // in Router CanActivate lifecycle hook
	appInjector(appRef.injector);
});
