import sql from 'better-sqlite3';

const db = sql('auction_category.db');

export async function getAuctionCategory() {
  return db
    .prepare(
      `
      SELECT * FROM auction_category
    `,
    )
    .all(); // run은 데이터를 수정하거나 인설트 할 때
}
