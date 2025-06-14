package com.rays.dao;

import java.util.ArrayList; 
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.CustomerDTO;

@Repository
public class CustomerDAOImpl extends BaseDAOImpl<CustomerDTO> implements CustomerDAOInt {

	@Override
	protected List<Predicate> getWhereClause(CustomerDTO dto, CriteriaBuilder builder, Root<CustomerDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getClientName())) {

			whereCondition.add(builder.like(qRoot.get("clientName"), dto.getClientName() + "%"));
		}

		if (!isEmptyString(dto.getLocation())) {

			whereCondition.add(builder.like(qRoot.get("location"), dto.getLocation() + "%"));
		}

		if (isNotNull(dto.getContactNumber())){

			whereCondition.add(builder.equal(qRoot.get("contactNumber"), dto.getContactNumber()));
		}

		if (!isEmptyString(dto.getLocation())) {

			whereCondition.add(builder.like(qRoot.get("location"), dto.getLocation() + "%"));
		}

		if (!isEmptyString(dto.getImportance())) {

			whereCondition.add(builder.equal(qRoot.get("importance"), dto.getImportance()));
		}

		return whereCondition;
	}

	@Override
	public Class<CustomerDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return CustomerDTO.class;
	}

}