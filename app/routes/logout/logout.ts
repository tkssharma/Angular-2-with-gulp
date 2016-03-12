import {Component} from 'angular2/core';
import {Router, ComponentInstruction} from 'angular2/router';
import {ResolvedInstruction} from 'angular2/src/router/instruction';
import {Auth} from '../../services/auth/auth';

@Component({
  selector: 'logout',
  template: ''
})
export class Logout {
  constructor(public auth: Auth, public router: Router) {}

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    if (window.confirm('Are you sure you want to logout?')) {
      this.auth.logout();
    }

    if (prev) {
      let previous = new ResolvedInstruction(prev, null, {});
      this.router.navigateByInstruction(previous);
    } else {
      this.router.navigate(['/Home']);
    }


    return false;
  }
}
