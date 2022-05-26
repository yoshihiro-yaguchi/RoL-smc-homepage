package com.rol.back.contact.repository;

import com.rol.back.contact.bean.repository.InsertTrold401Params;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ContactRepository {

  public void insertTrold401(InsertTrold401Params params) throws Exception;
}
