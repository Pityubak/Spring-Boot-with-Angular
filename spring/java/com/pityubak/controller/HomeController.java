package com.pityubak.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.pityubak.domain.User;
import com.pityubak.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {

	private UserService service;

	@Autowired
	public void setService(UserService service) {
		this.service = service;
	}

	@RequestMapping("/userlist")
	public List<User> index() {
		return service.findAll();
	}

	@PostMapping(value = "/add")
	public String add(@RequestBody User user) {
		if (service.addUser(user)) {
			return "ok";
		} else {
			return "fail";
		}
	}

	@DeleteMapping(path = "/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") Long id) {
		service.deleteUser(id);
		return new ResponseEntity<String>("Delete!", HttpStatus.OK);
	}

	@GetMapping(path = "/update/{id}")
	public Optional<User> getUpdateUser(@PathVariable("id") Long id) {
		return service.findById(id);
	}
	@PostMapping(path="/update")
	public void updateUser(@RequestBody User user ) {
		service.addUser(user);
	}
}
