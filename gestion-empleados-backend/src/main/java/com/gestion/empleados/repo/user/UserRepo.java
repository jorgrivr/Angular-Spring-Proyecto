package com.gestion.empleados.repo.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.empleados.model.user.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {

}
