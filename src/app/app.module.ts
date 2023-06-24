import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { DxBoxModule } from 'devextreme-angular'

import { DxButtonModule,DxRadioGroupModule, DxToolbarModule, DxListModule, DxMenuModule,DxFormModule, DxNumberBoxModule, DxCheckBoxModule} from "devextreme-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorCatalogComponent } from './pages/vendor-catalog/vendor-catalog.component';
import { ComponentsComponent } from './components/components.component';
import { MenuComponent } from './menu/menu.component';
import dxOverlay from 'devextreme/ui/overlay';
import { DxDataGridModule } from 'devextreme-angular';


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
    DxBoxModule,
    DxDataGridModule,
    DxFormModule,
    DxNumberBoxModule,
    DxCheckBoxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


