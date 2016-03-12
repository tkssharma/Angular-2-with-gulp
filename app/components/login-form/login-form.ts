import {Component, Output, EventEmitter} from 'angular2/core';
import {Auth} from '../../services/auth/auth';
import {UserService} from '../../services/users/users';
let template = require('./login-form.html');

@Component({
  selector: 'login-form',
  template
})
export class LoginForm {
  @Output() submitted = new EventEmitter();
  invalid: boolean = false;

  constructor(public Auth: Auth) {}

  login(formModel: any) {
    this.invalid = false;
    this.Auth.getUsers()
      .subscribe((userList: any) => {
        let users = userList.filter(user => {
          return formModel.credentials.username == user.username && formModel.credentials.password == user.password;
        });

        if (users.length === 1) {
          this.Auth.user = users[0];

          // Stub to add an admin flag for this user
          if (this.Auth.user.username == 'redcat594') {
            this.Auth.isAdmin = true;
          }

          this.submitted.next({success: true});
        } else {
          this.submitted.next({success: false});
          this.invalid = true;
        }
      });
  }
}
