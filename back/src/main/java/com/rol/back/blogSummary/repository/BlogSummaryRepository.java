package com.rol.back.blogSummary.repository;

import java.util.List;

import com.rol.back.blogSummary.bean.repository.SelectTrold301Returns;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BlogSummaryRepository {
  public List<SelectTrold301Returns> selectTrold301() throws Exception;
}
