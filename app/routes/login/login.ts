import {Component, Injector} from 'angular2/core';
import {Auth} from '../../services/auth/auth';
import {Router, RouteParams, CanActivate} from 'angular2/router';
import {LoginForm} from '../../components/login-form/login-form';
import {appInjector} from '../../helpers/app-injector';
let template = require('./login.html');

@Component({
  selector: 'login',
  template,
  directives: [LoginForm]
})
@CanActivate(() => {
  let injector: Injector = appInjector();
  let auth: Auth = injector.get(Auth);
  let router: Router = injector.get(Router);

  // If the user is already authenticated, redirect them back home
  return auth.check().then((authenticated) => {
    if (authenticated) {
      router.navigate(['/Home']);
      return false;
    }

    return true;
  });
})
export class Login {
  constructor(public Auth: Auth, public params: RouteParams, public router: Router) {}

  onSubmit({success}) {
    if (success) {
      let target: any = this.params.get('target');
      
      if (target) {
        this.router.navigate(target);
      } else {
        this.router.navigate(['/Profile', {id: this.Auth.user.username}]);
      }
    }
  }
}
