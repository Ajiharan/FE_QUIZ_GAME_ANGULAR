import { A11yModule } from '@angular/cdk/a11y';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { ScoreTableComponent } from './reusable-components/score-table/score-table.component';
import { UserAvatarProfileComponent } from './reusable-components/user-avatar-profile/user-avatar-profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    GameDashboardComponent,
    GamePlayComponent,
    UserAvatarProfileComponent,
    ScoreTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    ToastModule,
    BrowserAnimationsModule,
    AvatarModule,
    OverlayPanelModule,
    ListboxModule,
    TableModule,
    A11yModule,
    RadioButtonModule,
    DialogModule,
  ],
  providers: [MessageService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
