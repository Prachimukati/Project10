package com.rays.common;

import java.lang.reflect.Method;

/**
 * Contains generic attributes of a form. It is extended by all form beans.
 * Prakhar Solanki 
 */

public class BaseForm {

	/**
	 * Contains non-business primary key
	 */
	protected Long id = null;

	private Long[] ids;

	/**
	 * Current page number, 0 is first page index
	 */
	private int pageNo = 0;

	/**
	 * Number of records displayed on list page
	 */
	private int pageSize = 5;

	/**
	 * Value of button clicked
	 */
	private String operation;

	/**
	 * Created by User ID
	 */
	protected String createdBy;

	/**
	 * Modified by User ID
	 */
	protected String modifiedBy;

	/**
	 * Record created datetime
	 */
	protected long createdDatetime;

	/**
	 * Record last modified datetime
	 */
	protected long modifiedDatetime;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long[] getIds() {
		return ids;
	}

	public void setIds(Long[] ids) {
		this.ids = ids;
	}

	public int getPageNo() {
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	public long getCreatedDatetime() {
		return createdDatetime;
	}

	public void setCreatedDatetime(long createdDatetime) {
		this.createdDatetime = createdDatetime;
	}

	public long getModifiedDatetime() {
		return modifiedDatetime;
	}

	public void setModifiedDatetime(long modifiedDatetime) {
		this.modifiedDatetime = modifiedDatetime;
	}

	/**
	 * Converts form into dto.
	 * 
	 * @return
	 */
	public BaseDTO getDto() {
		return null;		
	}

	/**
	 * Initialize DTO
	 * 
	 * @param dto
	 * @return
	 */
	public <T extends BaseDTO> T initDTO(T dto) {
		if (id != null && id > 0) {
		dto.setId(id);
		} else {
			dto.setId(null);
		}
		return dto;
	}

	/*
	 * public < T extends BaseDTO> initDTO(T dto) { return new UserDTO(); }
	 */

	/**
	 * Converts dto into form.
	 * 
	 */
	public void populate(BaseDTO bDto) {

	}
	
	
//	@Override
//	public String toString() {
//		StringBuffer buffer = new StringBuffer();
//		Method[] ms = this.getClass().getMethods();
//
//		String mName = null;
//		for (int i = 0; i < ms.length; i++) {
//			mName = ms[i].getName();
//			if (mName.startsWith("get")) {
//				try {
//					buffer.append("\n\t" + mName + " = " + ms[i].invoke(this, (Object[]) null));
//				} catch (Exception e) {
//					e.printStackTrace();
//				}
//			}
//
//		}
//		return buffer.toString();
//	}
	
	@Override
	public String toString() {
	    StringBuilder buffer = new StringBuilder();
	    Method[] methods = this.getClass().getMethods();

	    for (Method method : methods) {
	        String name = method.getName();

	        // Skip methods that are not getters or are getClass()
	        if (name.startsWith("get") &&
	            method.getParameterCount() == 0 &&
	            !name.equals("getClass")) {
	            try {
	                Object value = method.invoke(this);
	                buffer.append("\n\t").append(name).append(" = ").append(value);
	            } catch (Exception e) {
	                buffer.append("\n\t").append(name).append(" = ERROR: ").append(e.getClass().getSimpleName());
	                // Optional: log the exception
	            }
	        }
	    }
	    return buffer.toString();
	}


}
