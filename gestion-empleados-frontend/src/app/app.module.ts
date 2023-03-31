import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUserComponent } from './listar-user/listar-user.component';
import { ListarAdminComponent } from './listar-admin/listar-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { RegistrarAdminComponent } from './registrar-admin/registrar-admin.component';
import { FormsModule } from '@angular/forms';
import { ActualizarUserComponent } from './actualizar-user/actualizar-user.component';
import { ActualizarAdminComponent } from './actualizar-admin/actualizar-admin.component';
import { AdminDetallesComponent } from './admin-detalles/admin-detalles.component';
import { UserDetallesComponent } from './user-detalles/user-detalles.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarUserComponent,
    ListarAdminComponent,
    RegistrarUserComponent,
    RegistrarAdminComponent,
    ActualizarUserComponent,
    ActualizarAdminComponent,
    AdminDetallesComponent,
    UserDetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
