import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatagridComponent } from './features/datagrid/datagrid.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'poke-grid', component: DatagridComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    DatagridComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
