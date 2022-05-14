package com.rol.back;

import com.rol.back.repository.HelloRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloService {
  @Autowired
  private HelloRepository repository;

  public String search() {
    return repository.search();
  }
}
