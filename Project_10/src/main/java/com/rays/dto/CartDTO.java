package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_CART")
public class CartDTO extends BaseDTO {

	@Column(name = "CUSTOMER_NAME", length = 50)
	private String customerName;

	@Column(name = "PRODUCT", length = 50)
	private String product;

	@Column(name = "QUANTITY_ORDERED")
	private Integer quantityOrdered;

	@Column(name = "TRANSACTION_DATE")
	private Date transactionDate;

	
	
	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public Integer getQuantityOrdered() {
		return quantityOrdered;
	}

	public void setQuantityOrdered(Integer quantityOrdered) {
		this.quantityOrdered = quantityOrdered;
	}

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public String getKey() {
		return id + "";
	}
	
	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return customerName;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "customerName";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return customerName;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "Customer Name";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("customerName", "asc");
		
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("customerName", customerName);
		return map;
	}

}
