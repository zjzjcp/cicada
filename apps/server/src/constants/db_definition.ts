import { MusicType } from '#/constants/music';

export const USER_TABLE_NAME = 'user';
export enum UserProperty {
  ID = 'id',
  EMAIL = 'email',
  AVATAR = 'avatar',
  NICKNAME = 'nickname',
  JOIN_TIMESTAMP = 'joinTimestamp',
  ADMIN = 'admin',
  REMARK = 'remark',
  MUSICBILL_ORDERS_JSON = 'musicbillOrdersJSON',
  MUSICBILL_MAX_AMOUNT = 'musicbillMaxAmount',
  CREATE_MUSIC_MAX_AMOUNT_PER_DAY = 'createMusicMaxAmountPerDay',
  EXPORT_MUSICBILL_MAX_TIME_PER_DAY = 'exportMusicbillMaxTimePerDay',
}
export type User = {
  [UserProperty.ID]: string;
  [UserProperty.EMAIL]: string;
  [UserProperty.AVATAR]: string;
  [UserProperty.NICKNAME]: string;
  [UserProperty.JOIN_TIMESTAMP]: number;
  [UserProperty.ADMIN]: 0 | 1;
  [UserProperty.REMARK]: string;
  [UserProperty.MUSICBILL_ORDERS_JSON]: string | null;
  [UserProperty.MUSICBILL_MAX_AMOUNT]: number;
  [UserProperty.CREATE_MUSIC_MAX_AMOUNT_PER_DAY]: number;
  [UserProperty.EXPORT_MUSICBILL_MAX_TIME_PER_DAY]: number;
};

export const MUSIC_TABLE_NAME = 'music';
/**
 * v2 可移除
 * @author mebtte<hi@mebtte.com>
 */
export enum MusicPropertyV0 {
  ID = 'id',
  TYPE = 'type',
  NAME = 'name',
  ALIASES = 'aliases',
  COVER = 'cover',
  SQ = 'sq',
  HQ = 'hq',
  AC = 'ac',
  HEAT = 'heat',
  CREATE_USER_ID = 'createUserId',
  CREATE_TIMESTAMP = 'createTimestamp',
}
export type MusicV0 = {
  [MusicPropertyV0.ID]: string;
  [MusicPropertyV0.TYPE]: MusicType;
  [MusicPropertyV0.NAME]: string;
  [MusicPropertyV0.ALIASES]: string;
  [MusicPropertyV0.COVER]: string;
  [MusicPropertyV0.SQ]: string;
  [MusicPropertyV0.HQ]: string;
  [MusicPropertyV0.AC]: string;
  [MusicPropertyV0.HEAT]: number;
  [MusicPropertyV0.CREATE_USER_ID]: string;
  [MusicPropertyV0.CREATE_TIMESTAMP]: number;
};
export enum MusicProperty {
  ID = 'id',
  TYPE = 'type',
  NAME = 'name',
  ALIASES = 'aliases',
  COVER = 'cover',
  ASSET = 'asset',
  HEAT = 'heat',
  CREATE_USER_ID = 'createUserId',
  CREATE_TIMESTAMP = 'createTimestamp',
  DURATION = 'duration',
}
export type Music = {
  [MusicProperty.ID]: string;
  [MusicProperty.TYPE]: MusicType;
  [MusicProperty.NAME]: string;
  [MusicProperty.ALIASES]: string;
  [MusicProperty.COVER]: string;
  [MusicProperty.ASSET]: string;
  [MusicProperty.HEAT]: number;
  [MusicProperty.CREATE_USER_ID]: string;
  [MusicProperty.CREATE_TIMESTAMP]: number;
  [MusicProperty.DURATION]: number;
};
