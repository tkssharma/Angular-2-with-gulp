import {Component} from 'angular2/core';
import {UserList} from '../../components/user-list/user-list';
import {UserService} from '../../services/users/users';
import {Auth} from '../../services/auth/auth';
import {LinkActiveDirective} from '../../directives/link-active/link-active';
let template = require('./users.html');

@Component({
  selector: 'users',
  directives: [UserList, LinkActiveDirective],
  template
})
export class Users {
  users: any;
  constructor(public userService: UserService , public auth: Auth) {
    this.users = this.userService.getUsers();
  }
}
