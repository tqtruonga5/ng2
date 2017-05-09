import { Injectable } from '@angular/core';
import { User } from "app/models/user";

@Injectable()
export class UserService {
  currentUser: User;
  constructor() {
    this.currentUser.age = 20;
    this.currentUser.name = 'Author';
  }
}
