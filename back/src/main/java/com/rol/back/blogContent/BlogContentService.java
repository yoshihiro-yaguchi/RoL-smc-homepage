package com.rol.back.blogContent;

import com.rol.back.blogContent.bean.api.ApiDoInitReturns;
import com.rol.back.blogContent.bean.repository.SelectTrold301Returns;
import com.rol.back.blogContent.repository.BlogContentRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BlogContentService {

  private BlogContentRepository repository;

  public ApiDoInitReturns init(String blogId) throws Exception {
    SelectTrold301Returns result = repository.selectTrold301(blogId);
    ApiDoInitReturns response = new ApiDoInitReturns();
    response.setResult(result);
    return response;
  }
}
