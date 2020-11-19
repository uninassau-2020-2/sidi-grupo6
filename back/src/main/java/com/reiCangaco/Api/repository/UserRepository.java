package com.reiCangaco.Api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.reiCangaco.Api.model.User;

public interface UserRepository extends CrudRepository<User, Long> {
	
	User findByUsername(String username);
	User findByPassword(String password);
	
}
