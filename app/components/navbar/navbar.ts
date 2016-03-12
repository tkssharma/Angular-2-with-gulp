import {Component} from 'angular2/core';
import {Auth} from '../../services/auth/auth';
import {LinkActiveDirective} from '../../directives/link-active/link-active';
let template = require('./navbar.html');

@Component({
  selector: 'navbar',
  template,
  directives: [LinkActiveDirective]
})
export class NavBar {
  constructor(public auth: Auth) {

  }
}
