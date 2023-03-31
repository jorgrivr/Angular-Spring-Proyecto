package com.gestion.empleados.controller;

import java.util.List;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.empleados.excepciones.ResourceNotFoundException;
import com.gestion.empleados.model.admin.Admin;
import com.gestion.empleados.model.user.User;
import com.gestion.empleados.repo.admin.AdminRepo;
import com.gestion.empleados.repo.user.UserRepo;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:4200/")
public class EmpleadoController {
	
	@Autowired
	private AdminRepo adminRepo;
	
	@GetMapping("/admins")
	public List<Admin> listarAdmin(){
		return adminRepo.findAll();
		
	}
	
	@Autowired
	private UserRepo userRepo;
	
	@GetMapping("/users")
	public List<User> listarUser(){
		return userRepo.findAll();
	}
	
	
	@PostMapping("/admins")
	public  Admin guardarAdmin(@RequestBody Admin admin) {
		return adminRepo.save(admin);
		
	}
	@PostMapping("/users")
	public  User guardarUser(@RequestBody User user) {
		return userRepo.save(user);
		
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<User> obtenerUserId(@PathVariable Long id){
		User user= userRepo.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el empleado con el ID"+ id));
					return ResponseEntity.ok(user);
		
		
	}
	
	@GetMapping("/admins/{id}")
	public ResponseEntity<Admin> obtenerAdminId(@PathVariable Long id){
		Admin admin= adminRepo.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el empleado con el ID: "+ id));
					return ResponseEntity.ok(admin);
		
		
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> actualizarUser(@PathVariable Long id,@RequestBody User detallesUser){
		User user= userRepo.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el empleado con el ID: "+ id));
		user.setNombre(detallesUser.getNombre());
		user.setApellido(detallesUser.getApellido());
		user.setEmail(detallesUser.getEmail());
		
		User userActualizado =userRepo.save(user);

		
	return ResponseEntity.ok(userActualizado);
		
		
	} 
	
	@PutMapping("/admins/{id}")
	public ResponseEntity<Admin> actualizarAdmin(@PathVariable Long id,@RequestBody Admin detallesAdmin){
		Admin admin= adminRepo.findById(id)
					.orElseThrow(()-> new ResourceNotFoundException("No existe el empleado con el ID: "+ id));
		admin.setNombre(detallesAdmin.getNombre());
		admin.setApellido(detallesAdmin.getApellido());
		admin.setEmail(detallesAdmin.getEmail());
		admin.setPermiso(detallesAdmin.getPermiso());
		
		Admin adminActualizado =adminRepo.save(admin);

		
	return ResponseEntity.ok(adminActualizado);
		
		
	} 
	@DeleteMapping("/admins/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarAdmin(@PathVariable Long id){
		Admin admin=adminRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID: " + id));
		adminRepo.delete(admin);
		Map<String,Boolean> respuesta= new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
		
	}
	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarUser(@PathVariable Long id){
		User user=userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID: " + id));
		userRepo.delete(user);
		Map<String,Boolean> respuesta= new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
		
	}
	
	
	
	
	
	
	

}
