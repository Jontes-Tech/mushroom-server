import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class DbService {
  constructor(@Inject('PG_CONNECTION') private conn: any) {}

  async getUsers(id) {
    const res = await this.conn.query('SELECT * FROM "' + id + '_users"');
    return res.rows;
  }
}
