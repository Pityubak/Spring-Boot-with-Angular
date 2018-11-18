package com.pityubak.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.pityubak.domain.User;

@CrossOrigin(origins="http://localhost:4200")
public interface UserRepository extends CrudRepository<User,Long> {
	
	List<User> findAll();
	

}
