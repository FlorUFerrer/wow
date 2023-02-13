//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//Component
import { NavbarComponent } from './views/pages/navbar/navbar.component';
import { FooterComponent } from './views/pages/footer/footer.component';
import { BodyComponent } from './views/pages/body/body.component';
import { StockComponent } from './views/pages/stock/stock.component';
import { ClientComponent } from './views/pages/client/client.component';
import { ProductComponent } from './views/pages/product/product.component';
import { ListComponent } from './views/pages/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonMoreComponent } from './views/commons/button-more/button-more.component';
import { FormCustomerComponent } from './views/commons/form-customer/form-customer.component';
//Pipes
import { ChoiceCustomer, SearchPipe } from './views/commons/pipes/search.pipe';
//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { environment } from 'src/environments/environment';

//Firestore emulator
import * as firebase from 'firebase/app';
import { AngularFirestore, USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreService } from './services/firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from '@angular/fire/auth';


import { EditTableComponent } from './views/pages/edit-table/edit-table.component';
import { TargetDescriptionComponent } from './views/commons/target-description/target-description.component';
import { LoginComponent } from './views/pages/login/login.component';
import { LayoutComponent } from './views/pages/layout/layout.component';
import { AuthGuard } from './views/commons/login.guard';
import { LogoutComponent } from './views/logout/logout.component';
import { RegistrerComponent } from './views/commons/registrer/registrer.component';
import { RegistrerUserComponent } from './views/pages/registrer-user/registrer-user.component';

firebase.initializeApp(environment.firebase);

//firebase.default.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    StockComponent,
    ClientComponent,
    ProductComponent,
    ListComponent,
    SearchPipe,
    ChoiceCustomer,
    ButtonMoreComponent,
    FormCustomerComponent,
    EditTableComponent,
    TargetDescriptionComponent,
    LoginComponent,
    LayoutComponent,
    LogoutComponent,
    RegistrerComponent,
    RegistrerUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AngularFirestore,
    AuthGuard,
    AngularFireAuth,
    FirestoreService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },

    // {
    //   provide: USE_FIRESTORE_EMULATOR,
    //   useValue: environment.firebase ? ['localhost', 8080] : undefined,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
