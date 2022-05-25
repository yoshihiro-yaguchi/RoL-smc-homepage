package com.rol.back.contact.bean.api;

import lombok.Data;

@Data
public class ApiDoSendParams {
  // 貴社名
  private String companyName;
  // お名前
  private String userName;
  // メールアドレス
  private String mailAddress;
  // 電話番号
  private String telephoneNumber;
  // お問い合わせ内容
  private String contents;
}
