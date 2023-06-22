import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { app_routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PlanesComponent } from './components/planes/planes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MonitoreodepesoComponent } from './components/monitoreodepeso/monitoreodepeso.component';
import { AuthGuard } from './components/guard/auth.guard';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { EditCitasComponent } from './components/edit-citas/edit-citas.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { DataService } from './components/services/data.service';
import { CartService } from './components/services/cart.service';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    PlanesComponent,
    RecetasComponent,
    LoginComponent,
    RegisterComponent,
    MonitoreodepesoComponent,
    CarritoComponent,
    ListCitasComponent,
    EditCitasComponent,
    TurnosComponent,
    ListUsersComponent,
    EditUsersComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    DataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
