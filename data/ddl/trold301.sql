CREATE TABLE TROLD301(
    object_id varchar (30) comment 'オブジェクトID'
    , registered_date datetime comment '登録日'
    , registered_user varchar (256) comment '登録者'
    , registered_feature varchar (30) comment '登録機能'
    , updated_date datetime comment '更新日'
    , updated_user varchar(256) comment '更新者'
    , updated_feature varchar(30) comment '更新機能'
    , delete_flg varchar(1) comment '削除フラグ'
    , exclusive_flg varchar(256) comment '更新フラグ'
    , title varchar(256) comment 'タイトル'
    , content varchar(256) comment 'コンテンツ'
    , primary key(object_id)
) COMMENT = 'ブログデータ';
