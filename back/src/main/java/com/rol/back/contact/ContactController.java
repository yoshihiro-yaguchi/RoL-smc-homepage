package com.rol.back.contact;

import com.rol.back.contact.bean.api.ApiDoSendParams;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping("contact")
public class ContactController {

  private ContactService service;

  @PostMapping(value="/doSend")
  public Boolean doSend(@ModelAttribute ApiDoSendParams params) {
    return false;
  }


}
