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
@Table(name="FormaPagamento")
public class FormaPagamento implements Serializable {
	
private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "Formap_seq")
    @SequenceGenerator(name = "Formap_seq", sequenceName = "Formap_seq", allocationSize = 100)
    @Column(name = "cd_forma_pagamento")
	private long cd_forma_pagamento; //identificador unico produto
	
	private String tp_forma_pagamento;
	
	private String ds_forma_pagamento;
	
	public long getCd_forma_pagamento() {
		return cd_forma_pagamento;
	}

	public void setCd_forma_pagamento(long cd_forma_pagamento) {
		this.cd_forma_pagamento = cd_forma_pagamento;
	}

	public String getTp_forma_pagamento() {
		return tp_forma_pagamento;
	}

	public void setTp_forma_pagamento(String tp_forma_pagamento) {
		this.tp_forma_pagamento = tp_forma_pagamento;
	}

	public String getDs_forma_pagamento() {
		return ds_forma_pagamento;
	}

	public void setDs_forma_pagamento(String ds_forma_pagamento) {
		this.ds_forma_pagamento = ds_forma_pagamento;
	}

	
	

}
