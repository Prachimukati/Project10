package com.rays.ctl;

import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.CartDTO;
import com.rays.form.CartForm;
import com.rays.service.CartServiceInt;

@RestController
@RequestMapping(value = "Cart")
public class CartCtl extends BaseCtl<CartForm, CartDTO, CartServiceInt> { 
	
	 @GetMapping("/preload")
		public ORSResponse preload() {
			ORSResponse res = new ORSResponse(true);
			HashMap<Integer, String> map=new HashMap<Integer, String>();
			map.put(1, "Shoes");
			map.put(2, "Books");
			map.put(3, "Mobile");
			map.put(4, "Laptop");
			map.put(5, "Watch");
			map.put(6, "RC Car");
			map.put(7, "Tablet");
			
			res.addResult("cart",map);
			
			
			System.out.println("inside preload");
			
			CartDTO dto = new CartDTO();
			List<DropdownList> list = baseService.search(dto, userContext);
			res.addResult("CartList", list);
			return res;
		}

	

}
