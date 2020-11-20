package com.reiCangaco.Api.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.lang.Integer;
import java.lang.Long;


import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name="Pedido")
public class Pedido implements Serializable{
	
	
private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "pedido_seq")
    @SequenceGenerator(name = "pedido_seq", sequenceName = "pedido_seq", allocationSize = 100)
    @Column(name = "cd_pedido")
	private long cd_pedido; //identificador unico produto
	
	private long id_produto;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date dt_pedido;
	
	private double vl_desconto;
	
	private double quantidade;
	
	private String tp_pagamento;
	
	private String nm_produto;
	
	private double vl_total;
	
	

	public String getNm_produto() {
		return nm_produto;
	}

	public void setNm_produto(String nm_produto) {
		this.nm_produto = nm_produto;
	}

	public double getVl_total() {
		return vl_total;
	}

	public void setVl_total(double vl_total) {
		this.vl_total = vl_total;
	}

	public double getVl_desconto() {
		return vl_desconto;
	}

	public void setVl_desconto(double vl_desconto) {
		this.vl_desconto = vl_desconto;
	}

	public double getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(double quantidade) {
		this.quantidade = quantidade;
	}

	public String getTp_pagamento() {
		return tp_pagamento;
	}

	public void setTp_pagamento(String tp_pagamento) {
		this.tp_pagamento = tp_pagamento;
	}

	public long getCd_pedido() {
		return cd_pedido;
	}

	public void setCd_pedido(long cd_pedido) {
		this.cd_pedido = cd_pedido;
	}

	public long getId_produto() {
		return id_produto;
	}

	public void setCd_produto(long id_produto) {
		this.id_produto = id_produto;
	}

	public Date getDt_pedido() {
		return dt_pedido;
	}

	public void setDt_pedido(Date dt_pedido) {
		this.dt_pedido = dt_pedido;
	}	

}
