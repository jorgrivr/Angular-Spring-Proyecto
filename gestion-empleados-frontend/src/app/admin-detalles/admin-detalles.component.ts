import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-detalles',
  templateUrl: './admin-detalles.component.html',
  styleUrls: ['./admin-detalles.component.css']
})
export class AdminDetallesComponent implements OnInit {
  id:number;
  admin:Admin;

  constructor(private route:ActivatedRoute,private adminService:AdminService){


  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
        this.admin=new Admin();
        this.adminService.obtenerAdminId(this.id).subscribe(dato =>{
          this.admin=dato;
          swal(`Detalles del Empleado ${this.admin.nombre}`);
        })

  }

}
