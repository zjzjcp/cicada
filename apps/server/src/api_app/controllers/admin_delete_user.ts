import { ExceptionCode } from '#/constants/exception';
import { getUserById, Property as UserProperty } from '@/db/user';
import { getDB } from '@/db';
import { Context } from '../constants';

export default async (ctx: Context) => {
  const { id } = ctx.query as { id?: unknown };
  if (typeof id !== 'string' || !id.length) {
    return ctx.except(ExceptionCode.PARAMETER_ERROR);
  }

  const user = await getUserById(id, Object.values(UserProperty));
  if (!user) {
    return ctx.except(ExceptionCode.USER_NOT_EXIST);
  }

  const [loginCodeList, lyricList] = await Promise.all([
    getDB().all(
      `
        SELECT * FROM login_code
        WHERE userId = ?
      `,
      [id],
    ),
    getDB().all(
      `
        SELECT l.* FROM lyric AS l
        LEFT JOIN music as m
          ON l.musicId = m.id
        WHERE m.createUserId = ?
      `,
      [id],
    ),
  ]);
};
