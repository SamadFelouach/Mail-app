import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposeHeaderComponent } from './compose-mail/compose-header/compose-header.component';
import { ComposeSideBarComponent } from './compose-mail/compose-side-bar/compose-side-bar.component';
import { ComposeSideBarRightComponent } from './compose-mail/compose-side-bar-right/compose-side-bar-right.component';
import { ComposeFormComponent } from './compose-mail/compose-form/compose-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MailService } from './global-data/mail-service/mail-service.service';
import { HomeManageComponent } from './home-manage/home-manage.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComposeHeaderComponent,
    ComposeSideBarComponent,
    ComposeSideBarRightComponent,
    ComposeFormComponent,
    HomeManageComponent



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
