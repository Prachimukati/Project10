package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.CartDAOInt;
import com.rays.dto.CartDTO;

@Service
@Transactional
public class CartServiceImpl extends BaseServiceImpl<CartDTO, CartDAOInt> implements CartServiceInt{

}