import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList: any = []; //Modelo list
  isFormVisible: boolean;

  @Input() user: User; //Class object   ///1. Declacion
  constructor(private userService: UserService) {
    this.user = new User(); // 2. Assignancion o inicialization
    this.isFormVisible = false;
  }

  addBtnClick() {
    this.isFormVisible = true;
  }


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): any {
    this.userService.getAll().subscribe((data: any) => {
      if (data) {
        this.userList = data;
      }
    });
  }

  add() {
    const data = this.user;
    this.userService.add(data).subscribe((data: any) => {
      if (data.success) {
        this.user = new User(); // Reset to clean
        this.isFormVisible = false; //Oculto el formulario de nuevo
        this.getUsers();
        alert(data.message);
      }else{
        alert(data.error);
      }
    });


}
}
