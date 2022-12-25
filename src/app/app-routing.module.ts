import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './views/pages/body/body.component';
import { ClientComponent } from './views/pages/client/client.component';
import { FooterComponent } from './views/pages/footer/footer.component';
import { NavbarComponent } from './views/pages/navbar/navbar.component';
import { ProductComponent } from './views/pages/product/product.component';
import { StockComponent } from './views/pages/stock/stock.component';

const routes: Routes = [
  {
    path: "",
    component: ProductComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
