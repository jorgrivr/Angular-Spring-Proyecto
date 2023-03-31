package com.gestion.empleados.repo.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.empleados.model.admin.Admin;

@Repository
public interface AdminRepo extends  JpaRepository<Admin,Long> {

}
