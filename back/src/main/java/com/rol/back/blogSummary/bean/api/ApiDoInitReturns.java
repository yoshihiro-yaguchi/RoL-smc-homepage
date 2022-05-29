package com.rol.back.blogSummary.bean.api;

import java.util.List;

import com.rol.back.blogSummary.bean.repository.SelectTrold301Returns;

import lombok.Data;

@Data
public class ApiDoInitReturns {
  // 検索結果
  private List<SelectTrold301Returns> result;
}
