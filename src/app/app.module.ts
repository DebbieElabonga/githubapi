import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { UserserviceComponent } from './userservice/userservice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoComponent,
    SearchComponent,
    UserComponent,
    UserserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
