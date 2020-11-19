/*package com.reiCangaco.Api.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import com.reiCangaco.Api.service.CustomUserDetailsService;

//import com.reiCangaco.Api.service.CustomUserDetailsService;
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private CustomUserDetailsService customUserDetailsService;
	

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		 http
		.httpBasic()
		.and()
		.authorizeRequests()
		.anyRequest().authenticated()
		.and()
		.csrf().disable();	
	}
	
	
	@Bean
	public UserDetailsService users() {
	    // The builder will ensure the passwords are encoded before saving in memory
	    UserBuilder users = User.withDefaultPasswordEncoder();
	    UserDetails user = users
	        .username("user")
	        .password("password")
	        .roles("USER")
	        .build();
	    UserDetails admin = users
	        .username("admin")
	        .password("password")
	        .roles("USER", "ADMIN")
	        .build();
	    return new InMemoryUserDetailsManager(user, admin);
	}
	

	

}
*/

