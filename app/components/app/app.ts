import {Component, View} from 'angular2/core';
import {
  RouteConfig,
  Router,
  Route,
  Redirect,
  AsyncRoute,
  AuxRoute
} from 'angular2/router';
import {Home} from '../../routes/home/home';
import {Login} from '../../routes/login/login';
//import {Modal} from '../../routes/modal/modal'; // Auxiliary routes are broken
import {Logout} from '../../routes/logout/logout';
import {Admin} from '../../routes/admin/admin';
import {UserProfile} from '../../routes/user-profile/user-profile';
import {NotFound} from '../../routes/notfound/notfound';
import {Restricted} from '../../routes/restricted/restricted';
import {Loading} from '../../components/loading/loading';
import {NavBar} from '../../components/navbar/navbar';

let template = require('./app.html');

@Component({
  selector: 'app',
  template,
  directives: [Loading, NavBar]
})
@RouteConfig([
  new Route({ path: '/', component: Home, name: 'Home'}),
  new AsyncRoute({path: '/about', loader: () => {
    return new Promise((resolve) => {
      let {About} = require('../../routes/about/about');
      resolve(About);
    });
  }, name: 'About'}),
  new Route({path: '/login', component: Login, name: 'Login'}),
  new Route({path: '/logout', component: Logout, name: 'Logout'}),
  new Route({path: '/admin/...', component: Admin, name: 'Admin'}),
  new Route({path: '/users/:id/profile', component: UserProfile, name: 'Profile'}),
  //new AuxRoute({path: '/modal', component: Modal, name: 'Modal'}),
  new Route({path: '/restricted', component: Restricted, name: 'Restricted'}),
  new Route({path: '/**', component: NotFound})
])
export class App {
  constructor(public router: Router) {
  }
}
