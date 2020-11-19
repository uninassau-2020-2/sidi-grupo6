package com.reiCangaco.Api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reiCangaco.Api.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
	
	
	Pedido findById(long cd_pedido);

}
