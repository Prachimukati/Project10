package com.rays.ctl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.ItemDTO;
import com.rays.form.ItemForm;
import com.rays.service.ItemServiceInt;

@RestController
@RequestMapping(value = "Item")
public class ItemCtl extends BaseCtl<ItemForm, ItemDTO, ItemServiceInt> {

	@Autowired
	ItemServiceInt itemService;

	@GetMapping("/preload")
	public ORSResponse preload() { 
		ORSResponse res = new ORSResponse(true);
		
		Map<Integer, String> map = new HashMap<Integer, String>();
		
		map.put(1, "Electronics");
		map.put(2, "Furniture");
		map.put(3, "Appliances");
		map.put(4, "Clothing");
		map.put(5, "Footwear");
		map.put(6, "Toys");
		map.put(7, "Groceries");
		
		res.addResult("item",map);
		
		
		System.out.println("inside preload");
		
		ItemDTO dto = new ItemDTO();
		List<DropdownList> list = itemService.search(dto, userContext);
		res.addResult("ItemList", list);
		return res;
	}

}
