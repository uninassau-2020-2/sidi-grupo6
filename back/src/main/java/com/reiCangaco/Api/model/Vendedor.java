package com.reiCangaco.Api.model;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;



@Entity
@Table(name="Vendedor")
public class Vendedor implements Serializable{
	
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "vendedor_seq")
	@SequenceGenerator(name = "vendedor_seq", sequenceName = "vendedor_seq", allocationSize = 100)
	@Column(name = "cd_vendedor")
	private long cd_vendedor; //identificação do vendedor
	
	private String nm_vendedor; //nome do vendedor
	
	private String login; //login do vendedor
	
	private String senha; // senha do vendedor
	
	private String sn_ativo; // se o vendedo está ativo S-N

	public long getCd_vendedor() {
		return cd_vendedor;
	}

	public void setCd_vendedor(long cd_vendedor) {
		this.cd_vendedor = cd_vendedor;
	}

	public String getNm_vendedor() {
		return nm_vendedor;
	}

	public void setNm_vendedor(String nm_vendedor) {
		this.nm_vendedor = nm_vendedor;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getSn_ativo() {
		return sn_ativo;
	}

	public void setSn_ativo(String sn_ativo) {
		this.sn_ativo = sn_ativo;
	}


}
