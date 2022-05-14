package com.rol.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@EnableAutoConfiguration
@RequestMapping("routing")
public class HelloWorld {
  @Autowired
  private HelloService service;

  @RequestMapping("/hello")
  @ResponseBody
  public String hello() {
    return service.search();
  }
}
