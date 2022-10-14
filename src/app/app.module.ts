import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user-services.service';
import { FormsModule } from '@angular/forms';
import { PurchaseService } from './services/purchases-services.service';
import { PurchaseComponent } from './components/purchase/purchases-component.component';

@NgModule({
  declarations: [AppComponent, UserComponent, PurchaseComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],

  providers: [UserService, PurchaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
