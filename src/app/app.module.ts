import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';


import { DxButtonModule,DxRadioGroupModule, DxToolbarModule, DxListModule, DxMenuModule } from "devextreme-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorCatalogComponent } from './pages/vendor-catalog/vendor-catalog.component';
import { ComponentsComponent } from './components/components.component';
import { MenuComponent } from './menu/menu.component';
import dxOverlay from 'devextreme/ui/overlay';

@NgModule({
  declarations: [
    AppComponent,
    VendorCatalogComponent,
    ComponentsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxRadioGroupModule,
    DxToolbarModule,
    RouterModule,
    DxListModule,
    DxMenuModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
