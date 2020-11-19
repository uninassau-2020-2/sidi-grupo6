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
@Table(name="Fornecedor")
public class Fornecedor implements Serializable {
	
	
private static final long serialVersionUID = 1L;

	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "forne_seq")
    @SequenceGenerator(name = "forne_seq", sequenceName = "forne_seq", allocationSize = 100)
    @Column(name = "cd_fornecedor")
	private long cd_fornecedor; //identificador unico produto
	
	private String cnpj_cpf;
	
	private String nome_fantasia;
	
	private String sn_ativo;
	
	private String email;
	
	private String estado;
	
	private double cep;
	
	private double contato;
	
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public double getCep() {
		return cep;
	}

	public void setCep(double cep) {
		this.cep = cep;
	}

	public double getContato() {
		return contato;
	}

	public void setContato(double contato) {
		this.contato = contato;
	}

	public long getCd_fornecedor() {
		return cd_fornecedor;
	}

	public void setCd_fornecedor(long cd_fornecedor) {
		this.cd_fornecedor = cd_fornecedor;
	}

	public String getCnpj_cpf() {
		return cnpj_cpf;
	}

	public void setCnpj_cpf(String cnpj_cpf) {
		this.cnpj_cpf = cnpj_cpf;
	}

	public String getNome_fantasia() {
		return nome_fantasia;
	}

	public void setNome_fantasia(String nome_fantasia) {
		this.nome_fantasia = nome_fantasia;
	}

	public String getSn_ativo() {
		return sn_ativo;
	}

	public void setSn_ativo(String sn_ativo) {
		this.sn_ativo = sn_ativo;
	}
	
	
	
	
	
	
	

}
