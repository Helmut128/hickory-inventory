import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorCatalogComponent } from './pages/vendor-catalog/vendor-catalog.component';
import { ComponentsComponent } from './components/components.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';

const routes: Routes = [

    { path: 'vendor', component: VendorCatalogComponent },

    {path: 'menu', component: MenuComponent },

    { path: 'components', component: ComponentsComponent},

    {path: 'home', component: AppComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
