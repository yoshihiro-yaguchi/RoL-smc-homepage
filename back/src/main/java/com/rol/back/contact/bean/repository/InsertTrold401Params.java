package com.rol.back.contact.bean.repository;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class InsertTrold401Params {
    // オブジェクトID
    private String objectId;
    // 登録日
    private String registeredDate;
    // 登録者
    private String registeredUser;
    // 登録機能
    private String registeredFeature;
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
