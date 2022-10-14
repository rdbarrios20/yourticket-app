import { Component, Input, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchases-services.service';
import { TicketService } from 'src/app/services/ticket-services.service';
import { UserService } from 'src/app/services/user-services.service';
@Component({
  selector: 'app-purchases-component',
  templateUrl: './purchases-component.component.html',
  styleUrls: ['./purchases-component.component.css'],
})
export class PurchaseComponent implements OnInit {
  isFormVisible: boolean;
  userList: any = []; //Modelo list
  ticketList: any = []; //Modelo list

  @Input() purchase: Purchase; //Class object   ///1. Declacion
  constructor(
    private purchaseService: PurchaseService,
    private userService: UserService,
    private ticketService: TicketService
  ) {
    this.purchase = new Purchase(); // 2. Assignancion o inicialization
    this.isFormVisible = false;
  }

  addBtnClick() {
    this.isFormVisible = true;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getTickets();
  }

  getUsers(): any {
    this.userService.getAll().subscribe((data: any) => {
      if (data) {
        this.userList = data;
      }
    });
  }
  getTickets(): any {
    this.ticketService.getAll().subscribe((data: any) => {
      if (data) {
        this.ticketList = data;
      }
    });
  }

  payment() {
    const data = this.purchase;
    this.purchaseService.addPurchase(data).subscribe((data: any) => {
      if (data.success) {
        this.purchase = new Purchase(); // Reset to clean
        alert(data.message);
      }
    });
  }
}
