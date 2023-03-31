import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAdminComponent } from './actualizar-admin/actualizar-admin.component';
import { ActualizarUserComponent } from './actualizar-user/actualizar-user.component';
import { AdminDetallesComponent } from './admin-detalles/admin-detalles.component';
import { ListarAdminComponent } from './listar-admin/listar-admin.component';
import { ListarUserComponent } from './listar-user/listar-user.component';
import { RegistrarAdminComponent } from './registrar-admin/registrar-admin.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { UserDetallesComponent } from './user-detalles/user-detalles.component';

const routes: Routes = [
  {path: 'users',component:ListarUserComponent},
  {path: 'admins',component:ListarAdminComponent},
  {path: 'registrar-user',component:RegistrarUserComponent},
  {path: 'registrar-admin',component:RegistrarAdminComponent},
  {path: 'actualizar-admin/:id',component:ActualizarAdminComponent},
  {path: 'actualizar-user/:id',component:ActualizarUserComponent},
  {path: 'admin-detalles/:id',component:AdminDetallesComponent},
  {path: 'user-detalles/:id',component:UserDetallesComponent},
  {path:'',redirectTo:'users',pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
