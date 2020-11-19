package com.reiCangaco.Api.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Produto")
public class Produto implements Serializable  {
	
	
	private static final long serialVersionUID = 1L;
	

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "Produto_seq")
	@SequenceGenerator(name = "Produto_seq", sequenceName = "Produto_seq", allocationSize = 100)
	@Column(name = "id_produto")
	private long id_produto; //identificador unico produto
	
    private String cd_produto; //codigo do produto
	
	private double vl_produto; //valor do produto
	
	private String nm_produto; //nome do produto
	
	private String sn_ativo; // S-N se tem em estoque
	
	private String tp_produto;
	
	
	
	
	
	
	public String getTp_produto() {
		return tp_produto;
	}

	public void setTp_produto(String tp_produto) {
		this.tp_produto = tp_produto;
	}

	public long getId_produto() {
		return id_produto;
	}

	public void setId_produto(long id_produto) {
		this.id_produto = id_produto;
	}

	public String getCd_produto() {
		return cd_produto;
	}

	public void setCd_produto(String cd_produto) {
		this.cd_produto = cd_produto;
	}

	public double getVl_produto() {
		return vl_produto;
	}

	public void setVl_produto(double vl_produto) {
		this.vl_produto = vl_produto;
	}

	public String getNm_produto() {
		return nm_produto;
	}

	public void setNm_produto(String nm_produto) {
		this.nm_produto = nm_produto;
	}

	public String getSn_ativo() {
		return sn_ativo;
	}

	public void setSn_ativo(String sn_ativo) {
		this.sn_ativo = sn_ativo;
	}

}
