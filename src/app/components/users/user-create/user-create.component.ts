import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    username: '',
    password: '',
    type: '2'
  }

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.user.type = Number(this.user.type);
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage("Usuário adicionado!");
      this.router.navigate(['/users']);
    });
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }

}
