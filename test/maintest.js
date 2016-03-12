
import {Component, View} from 'angular2/core';
import {
  RouteConfig,
  Router,
  Route,
  Redirect,
  AsyncRoute,
  AuxRoute
} from 'angular2/router';
import {Home} from '../app/routes/home/home';
import {Login} from '../app/routes/login/login';
//import {Modal} from '../../routes/modal/modal'; // Auxiliary routes are broken
import {Logout} from '../app/routes/logout/logout';
import {Admin} from '../app/routes/admin/admin';
import {UserProfile} from '../app/routes/user-profile/user-profile';
import {NotFound} from '../app/routes/notfound/notfound';
import {Restricted} from '../app/routes/restricted/restricted';
import {Loading} from '../app/components/loading/loading';
import {NavBar} from '../app/components/navbar/navbar';

import 'reflect-metadata';
import 'angular2/angular2';

import { expect } from 'chai';
import { assert } from 'chai';


describe('Article model Unit Tests:', () => {

    describe('default value', () => {
        it('should create a new article component', (done) => {
            var profile = new UserProfile();
            expect(profile.name).to.be.equals("hello");
            done();
        });
    });

    describe('check logout', () => {
        it('should logout when logout clicked..', (done) => {
            var Logout = new Logout();
            expect(auth.isAdmin).to.be.equals(true);
            done();
        });
    });
    
      describe('check user data on mailbox click ', () => {
        it('should logout when logout clicked..', (done) => {
            expect(auth.users).to.be.equals(3);
            done();
        });
    });
    
  