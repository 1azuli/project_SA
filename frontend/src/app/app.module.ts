import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './admin/login/login.component';
import { ManageComponent } from './admin/manage/manage.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SavingsComponent } from './savings/savings.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { InterestComponent } from './interest/interest.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    ManageComponent,
    ReservationComponent,
    ProfileComponent,
    SavingsComponent,
    DepositComponent,
    WithdrawComponent,
    InterestComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
