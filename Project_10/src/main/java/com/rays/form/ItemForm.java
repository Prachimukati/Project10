package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseForm;
import com.rays.dto.ItemDTO;

public class ItemForm extends BaseForm {

	@NotEmpty(message = "Please enter title")
	private String title;

	@NotEmpty(message = "Please enter overview")
	private String overview;

	@NotNull(message = "Please enter cost")
	private Integer cost;

	@NotNull(message = "Please enter purchaseDate")
	private Date purchaseDate;

	@NotEmpty(message = "Please enter category")
	private String category;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public Integer getCost() {
		return cost;
	}

	public void setCost(Integer cost) {
		this.cost = cost;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public ItemDTO getDto() {

		ItemDTO dto = initDTO(new ItemDTO());
		dto.setTitle(title);
		dto.setOverview(overview);
		dto.setCost(cost);
		dto.setPurchaseDate(purchaseDate);
		dto.setCategory(category);
		return dto;
	}

}
