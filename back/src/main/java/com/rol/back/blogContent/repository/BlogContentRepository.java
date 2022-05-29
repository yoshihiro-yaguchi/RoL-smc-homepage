package com.rol.back.blogContent.repository;

import com.rol.back.blogContent.bean.repository.SelectTrold301Returns;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.RequestParam;

@Mapper
public interface BlogContentRepository {

  public SelectTrold301Returns selectTrold301(@RequestParam(name = "blogId", required = true) String blogId) throws Exception;
}
