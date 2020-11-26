package com.reiCangaco.Api.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.reiCangaco.Api.model.Vendedor;

public interface VendedorRepository extends JpaRepository<Vendedor, Long >{
	
	Vendedor findById(long cd_vendedor);
	Vendedor findByLogin(String login);
	Vendedor findBySenha(String senha);
	

}
