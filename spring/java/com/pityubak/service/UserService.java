package com.pityubak.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pityubak.repository.UserRepository;
import com.pityubak.domain.User;

@Service
public class UserService {
	private UserRepository repo;

	@Autowired
	public void setRepo(UserRepository repo) {
		this.repo = repo;
	}
	
	public List<User> findAll(){
		return repo.findAll();
	}
	public Optional<User> findById(Long id) {
		return repo.findById(id);
	}
	public boolean addUser(User user) {
		return repo.save(user) != null;
	}
	
	public void deleteUser(Long id) {
		repo.deleteById(id);
	}
	public boolean updateUser(User user) {
		if(user!=null) {
			repo.save(user);
			return true;
		}
		return false;
	}

}
