import {Injectable} from 'angular2/core';
import {UserService} from '../../services/users/users';

@Injectable()
export class Auth {
	user: any = false;
	isAdmin: boolean = false;
	constructor(public userService: UserService) {}

	getUsers() {
		return this.userService.getUsers();
	}

	check() {
		return new Promise((resolve) => {
			if (this.user) {
				resolve(this.user);
			} else {
				resolve(false);
			}
		});
	}

	logout() {
		this.user = false;
		this.isAdmin = false;
	}
}
