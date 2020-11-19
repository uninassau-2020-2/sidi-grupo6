package com.reiCangaco.Api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reiCangaco.Api.model.User;
import com.reiCangaco.Api.repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api")
public class UserController {
	
	@Autowired
	UserRepository userRepository; 
	
	@PostMapping("/login")
	public ResponseEntity<User> Login(@RequestBody User user) {
		
		if(userRepository.findByUsername(user.getUsername()) != null && userRepository.findByPassword(user.getPassword()) != null ) {
			return new ResponseEntity<User>(user, HttpStatus.OK);	
		}
		return new ResponseEntity<User>( HttpStatus.UNAUTHORIZED);
		
		
	}
	
	

}
