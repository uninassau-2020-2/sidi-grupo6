package com.reiCangaco.Api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reiCangaco.Api.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

	Produto findById(long id_produto);
}
