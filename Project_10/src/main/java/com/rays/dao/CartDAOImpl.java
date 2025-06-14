package com.rays.dao;

import java.util.ArrayList; 
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.CartDTO;

@Repository
public class CartDAOImpl extends BaseDAOImpl<CartDTO> implements CartDAOInt {

	@Override
	protected List<Predicate> getWhereClause(CartDTO dto, CriteriaBuilder builder, Root<CartDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getCustomerName())) {

			whereCondition.add(builder.like(qRoot.get("customerName"), dto.getCustomerName() + "%"));
		}

		if (!isEmptyString(dto.getProduct())) {

			whereCondition.add(builder.like(qRoot.get("product"), dto.getProduct() + "%"));
		}

		if (isNotNull(dto.getQuantityOrdered())){

			whereCondition.add(builder.equal(qRoot.get("quantityOrdered"), dto.getQuantityOrdered()));
		}

		if (isNotNull(dto.getTransactionDate())){

			whereCondition.add(builder.equal(qRoot.get("transactionDate"), dto.getTransactionDate()));
		}

		return whereCondition;
	}

	@Override
	public Class<CartDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return CartDTO.class;
	}

}
