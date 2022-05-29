package com.rol.back.blogContent;

import com.rol.back.blogContent.bean.api.ApiDoInitReturns;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping("blogContent")
public class BlogContentController {

  private BlogContentService service;

  @GetMapping(value="/doInit")
  public ApiDoInitReturns doInit(@RequestParam("blogId") String blogId) throws Exception {
    return service.init(blogId);
  }
}
