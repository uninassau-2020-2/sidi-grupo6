/*package com.reiCangaco.Api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.reiCangaco.Api.model.Vendedor;
import com.reiCangaco.Api.repository.UserRepository;
import com.reiCangaco.Api.repository.VendedorRepository;


@Component
public class CustomUserDetailsService implements UserDetailsService{
	
	private final UserRepository userRepository;
	
	@Autowired
	public CustomUserDetailsService(UserRepository userRepository) {
		
	this.userRepository = userRepository;
		
	}
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		com.reiCangaco.Api.model.User user = Optional.ofNullable(userRepository.findByUsername(username)).orElseThrow(() -> new UsernameNotFoundException("Usuario não encontrado"));
		
		List<GrantedAuthority> authorityListAdmin = AuthorityUtils.createAuthorityList("ADMIN", "USER");
		List<GrantedAuthority> authorityListUser = AuthorityUtils.createAuthorityList("ADMIN","USER");
		
		return new User(user.getUsername(), user.getPassword(), user.isIsadmin() ? authorityListAdmin : authorityListUser);
		
	}

}
*/











