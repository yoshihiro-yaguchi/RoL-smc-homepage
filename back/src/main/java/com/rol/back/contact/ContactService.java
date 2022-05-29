package com.rol.back.contact;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import com.rol.back.contact.bean.api.ApiDoSendParams;
import com.rol.back.contact.bean.repository.InsertTrold401Params;
import com.rol.back.contact.repository.ContactRepository;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import net.bytebuddy.utility.RandomString;

@Service
@AllArgsConstructor
public class ContactService {
  private ContactRepository repository;

  public boolean send(ApiDoSendParams params) throws Exception {
    InsertTrold401Params reposParam = new InsertTrold401Params();
    // オブジェクトID
    reposParam.setObjectId(RandomString.make(30));
    // 登録日
    ZonedDateTime nowZonedDt = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    reposParam.setRegisteredDate(nowZonedDt.format(formatter));
    // 登録者
    reposParam.setRegisteredUser(params.getUserName());
    // 登録機能
    reposParam.setRegisteredFeature("contact");
    // 貴社名
    reposParam.setCompanyName(params.getCompanyName());
    // お名前
    reposParam.setUserName(params.getUserName());
    // メールアドレス
    reposParam.setMailAddress(params.getMailAddress());
    // 電話番号
    reposParam.setTelephoneNumber(params.getTelephoneNumber());
    // お問い合わせ内容
    reposParam.setContents(params.getContents());
    try {
      repository.insertTrold401(reposParam);
      return true;
    } catch (Exception e) {
      e.printStackTrace();
      return false;
    }
  }
}
