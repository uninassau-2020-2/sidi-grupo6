package com.reiCangaco.Api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


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
	
	private long cd_produto;
	
	private double vl_pedido;
	
	@DateTimeFormat
	private String dt_pedido;
	
	private String Status;
	
	private double vl_desconto;
	
	private int quantidade;
	
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

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
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

	public long getCd_produto() {
		return cd_produto;
	}

	public void setCd_produto(long cd_produto) {
		this.cd_produto = cd_produto;
	}

	public double getVl_pedido() {
		return vl_pedido;
	}

	public void setVl_pedido(double vl_pedido) {
		this.vl_pedido = vl_pedido;
	}

	public String getDt_pedido() {
		return dt_pedido;
	}

	public void setDt_pedido(String dt_pedido) {
		this.dt_pedido = dt_pedido;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}
	
	
	
	

}
