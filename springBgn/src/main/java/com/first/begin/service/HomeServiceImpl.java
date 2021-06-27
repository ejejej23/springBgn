package com.first.begin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.first.begin.dao.HomeDao;

@Service("homeService")
public class HomeServiceImpl implements HomeService{
	
	@Autowired
	protected HomeDao homeDao;

	@Override
	public String selectSamepleData() throws Exception {
		return homeDao.selectSampleData();
	}
	
}
