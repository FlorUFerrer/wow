import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './views/commons/login.guard';
import { BodyComponent } from './views/pages/body/body.component';
import { ClientComponent } from './views/pages/client/client.component';
import { FooterComponent } from './views/pages/footer/footer.component';
import { LayoutComponent } from './views/pages/layout/layout.component';
import { LoginComponent } from './views/pages/login/login.component';
import { NavbarComponent } from './views/pages/navbar/navbar.component';
import { ProductComponent } from './views/pages/product/product.component';
import { StockComponent } from './views/pages/stock/stock.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
  },
  {
    path: "alumnos",
    component: ProductComponent,
    canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
