package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.ProductDTO;

@Repository
public class ProductDAOImpl extends BaseDAOImpl<ProductDTO> implements ProductDAOInt {

	@Override
	protected List<Predicate> getWhereClause(ProductDTO dto, CriteriaBuilder builder, Root<ProductDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getName())) {

			whereCondition.add(builder.like(qRoot.get("name"), dto.getName() + "%"));
		}

		if (!isEmptyString(dto.getDescription())) {

			whereCondition.add(builder.like(qRoot.get("description"), dto.getDescription() + "%"));
		}

		if (isNotNull(dto.getPrice())){

			whereCondition.add(builder.equal(qRoot.get("price"), dto.getPrice()));
		}

		if (isNotNull(dto.getDateOfPurchase())){

			whereCondition.add(builder.equal(qRoot.get("dateOfPurchase"), dto.getDateOfPurchase() ));
		}

		if (!isEmptyString(dto.getCategory())){

			whereCondition.add(builder.like(qRoot.get("category"), dto.getCategory()));
		}

		return whereCondition;
	}

	@Override
	public Class<ProductDTO> getDTOClass() {
		// TODO Auto-generated method stub
		return ProductDTO.class;
	}

}
