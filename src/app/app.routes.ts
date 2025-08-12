import { Routes } from '@angular/router';
import { RoleSelectorComponent } from './components/role-selector/role-selector.component';
import { LoginComponent } from './components/login/login.component';
import { MemberDashboardComponent } from './components/member-dashboard/member-dashboard.component';
import { LeadDashboardComponent } from './components/lead-dashboard/lead-dashboard.component';

export const routes: Routes = [
  { path: '', component: RoleSelectorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'member', component: MemberDashboardComponent },
  { path: 'lead', component: LeadDashboardComponent },
  { path: '**', redirectTo: '' }
];
