package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.common.UserContext;
import com.rays.dao.ItemDAOInt;
import com.rays.dto.ItemDTO;

@Service
@Transactional
public class ItemServiceImpl extends BaseServiceImpl<ItemDTO, ItemDAOInt> implements ItemServiceInt {

}
