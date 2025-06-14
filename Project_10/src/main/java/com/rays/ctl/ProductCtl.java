package com.rays.ctl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.ItemDTO;
import com.rays.dto.ProductDTO;
import com.rays.form.ProductForm;
import com.rays.service.ProductServiceInt;

@RestController
@RequestMapping(value = "Product")
public class ProductCtl extends BaseCtl<ProductForm, ProductDTO, ProductServiceInt> { 
	
	 @GetMapping("/preload")
		public ORSResponse preload() {
			ORSResponse res = new ORSResponse(true);
			HashMap<Integer, String> map=new HashMap<Integer, String>();
			map.put(1, "Electronics");
			map.put(2, "Furniture");
			map.put(3, "Appliances");
			map.put(4, "Clothing");
			map.put(5, "Footwear");
			map.put(6, "Toys");
			map.put(7, "Groceries");
			
			res.addResult("Category", map);
			
			ProductDTO dto = new ProductDTO();
			List<DropdownList> list = baseService.search(dto, userContext);
			res.addResult("ProductList", list);
			return res;
		}

	

}
