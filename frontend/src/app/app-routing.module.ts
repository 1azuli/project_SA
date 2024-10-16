import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './admin/login/login.component';
import { ManageComponent } from './admin/manage/manage.component';
import { SavingsComponent } from './savings/savings.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { InterestComponent } from './interest/interest.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'profile', component: ProfileComponent },
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'admin/admin-login', component: LoginComponent },
  { path: 'admin/manage', component: ManageComponent },
  { path: 'admin', redirectTo: 'admin/admin-login', pathMatch: 'full' },
  { path: 'savings', component: SavingsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
