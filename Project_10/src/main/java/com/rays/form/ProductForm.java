package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseForm;
import com.rays.dto.ProductDTO;

public class ProductForm extends BaseForm {

	@NotEmpty(message = "please enter name")
	private String name;

	@NotEmpty(message = "please enter description")
	private String description;

	@NotNull(message = "please enter price")
	private Integer price;

	@NotNull(message = "please enter date Of Purchase")
	private Date dateOfPurchase;

	@NotEmpty(message = "please enter category")
	private String category;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Date getDateOfPurchase() {
		return dateOfPurchase;
	}

	public void setDateOfPurchase(Date dateOfPurchase) {
		this.dateOfPurchase = dateOfPurchase;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public ProductDTO getDto() {

		ProductDTO dto = initDTO(new ProductDTO());
		dto.setName(name);
		dto.setDescription(description);
		dto.setPrice(price);
		dto.setDateOfPurchase(dateOfPurchase);
		dto.setCategory(category);
		return dto;
	}

}
