package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseForm;
import com.rays.dto.CartDTO;

public class CartForm extends BaseForm {

	@NotEmpty(message = "please enter customerName")
	private String customerName;

	@NotEmpty(message = "please enter product")
	private String product;

	@NotNull(message = "please enter transactionDate")
	private Date transactionDate;

	@NotNull(message = "please enter quantityOrdered")
	private Integer quantityOrdered;

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

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public Integer getQuantityOrdered() {
		return quantityOrdered;
	}

	public void setQuantityOrdered(Integer quantityOrdered) {
		this.quantityOrdered = quantityOrdered;
	}

	@Override
	public CartDTO getDto() {

		CartDTO dto = initDTO(new CartDTO());
		dto.setCustomerName(customerName);
		dto.setProduct(product);
		dto.setTransactionDate(transactionDate);
		dto.setQuantityOrdered(quantityOrdered);
		return dto;
	}

}
