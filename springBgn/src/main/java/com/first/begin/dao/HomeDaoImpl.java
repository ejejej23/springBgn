package com.first.begin.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("homeDao")
public class HomeDaoImpl implements HomeDao{

	@Autowired
	protected SqlSession sqlSession;
	
	@Override
	public String selectSampleData() throws Exception {
		return sqlSession.selectOne("disposableSql.selectDisposableTable");
	}

}
