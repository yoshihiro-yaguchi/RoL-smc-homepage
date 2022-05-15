package com.rol.back.sample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping("sample")
public class HelloController {
  @Autowired
  private HelloService service;

  @RequestMapping("/hello")
  @ResponseBody
  public String hello() {
    return service.search();
  }

  @RequestMapping(path = "/getMethod", method = GET)
  @ResponseBody
  public String getMethod() {
    return "getMethod";
  }

  @RequestMapping(path = "/postMethod", method = POST)
  @ResponseBody
  public String postMethod() {
    return "postMethod";
  }
}
