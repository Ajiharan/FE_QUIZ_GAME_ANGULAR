import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, data: { title: 'Login' } },
  { path: 'register', component: SignupComponent, data: { title: 'Signup' } },
  {
    path: 'dashboard',
    component: GameDashboardComponent,
    data: { title: 'Game Dashboard' },
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
