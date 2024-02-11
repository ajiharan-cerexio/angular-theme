import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, CustomTableComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
