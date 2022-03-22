import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HappyBirthdayComponent } from './pages/home/happy-birthday/happy-birthday.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HbdNameComponent } from './pages/home/hbd-name/hbd-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HappyBirthdayComponent,
    HbdNameComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
