package com.rays.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseForm;
import com.rays.dto.CustomerDTO;

public class CustomerForm extends BaseForm {

	@NotEmpty(message = "please enter clientName")
	@Pattern(regexp = "^[A-Za-z ]+$", message = "Only letters are allowed")
	private String clientName;

	@NotEmpty(message = "please enter location")
	private String location;

	@NotNull(message = "Please enter contact number")
	@Pattern(regexp = "(^$|[0-9]{10})", message = "Only 10 digitis are allowed")
    private String contactNumber;

	@NotEmpty(message = "please enter importance")
	private String importance;

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getImportance() {
		return importance;
	}

	public void setImportance(String importance) {
		this.importance = importance;
	}

	@Override
	public CustomerDTO getDto() {

		CustomerDTO dto = initDTO(new CustomerDTO());
		dto.setClientName(clientName);
		dto.setLocation(location);
		dto.setContactNumber(contactNumber);
		dto.setImportance(importance);
		return dto;
	}

}