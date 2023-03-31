import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {
  

  user: User =new User();

  constructor(private userService:UserService,private router:Router){

  }
  ngOnInit(): void {
    
    }

    onSubmit(){
        this.guardarUser()    }

    guardarUser(){
      this.userService.registrarUsuario(this.user).subscribe(dato=>{
        console.log(dato);
        this.irListaUser();
      },error=>console.log(error));
    }

    irListaUser(){
      this.router.navigate(['/users'])
    }
  



}
