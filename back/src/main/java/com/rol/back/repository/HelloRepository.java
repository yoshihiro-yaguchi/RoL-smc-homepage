package com.rol.back.repository;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface HelloRepository {
  public String search();
}
