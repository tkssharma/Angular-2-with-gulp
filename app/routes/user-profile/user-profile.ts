import {Component} from 'angular2/core';
import {RouteParams, Router, ComponentInstruction, CanActivate, OnActivate} from 'angular2/router';
import {ResolvedInstruction} from 'angular2/src/router/instruction';
import {UserService} from '../../services/users/users';
import {isLoggedIn} from '../../helpers/is-logged-in';
let template = require('./user-profile.html');

@Component({
  selector: 'user-profile',
  template
})
@CanActivate((prev: ComponentInstruction, next: ComponentInstruction) => isLoggedIn(prev, next))
export class UserProfile implements OnActivate {
  user: any;
  prev: any;

  constructor(public params: RouteParams, users: UserService, public router: Router) {
    users.getUsers()
      .subscribe((userList) => {
        let user = userList.filter(user => user.username == params.get('id'));
        this.user = user[0];
      });
  }

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    this.prev = prev;
  }

  goBack() {
    this.router.navigateByInstruction(new ResolvedInstruction(this.prev, this.prev.child, {}));
  }
}
