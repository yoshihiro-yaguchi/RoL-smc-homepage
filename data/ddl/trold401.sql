CREATE TABLE TROLD401(
    object_id varchar (30) comment 'オブジェクトID'
    , registered_date datetime comment '登録日'
    , registered_user varchar (256) comment '登録者'
    , registered_feature varchar (30) comment '登録機能'
    , updated_date datetime comment '更新日'
    , updated_user varchar(256) comment '更新者'
    , updated_feature varchar(30) comment '更新機能'
    , delete_flg varchar(1) comment '削除フラグ'
    , exclusive_flg varchar(256) comment '更新フラグ'
    , company_name varchar(256) comment '貴社名'
    , user_name varchar(256) comment 'お名前'
    , mail_address varchar(256) comment 'メールアドレス'
    , telephone_number varchar(256) comment '電話番号'
    , content text comment 'お問い合わせ内容'
    , read_flg varchar(1) comment '既読フラグ'
    , primary key(object_id)
) COMMENT = 'お問い合わせデータ'

