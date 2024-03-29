import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ThemeModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
