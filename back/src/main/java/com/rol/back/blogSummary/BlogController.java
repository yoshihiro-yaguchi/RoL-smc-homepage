package com.rol.back.blogSummary;

import com.rol.back.blogSummary.bean.api.ApiDoInitReturns;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping("blogSummary")
public class BlogController {

  private BlogService service;

  @GetMapping(value="/doInit")
  public ApiDoInitReturns doInit() throws Exception{
    return service.init();
  }
}
