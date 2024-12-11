const sql = require("better-sqlite3");
const db = sql("auction_category.db");
const dummyCategory = require("./src/shared/state/initialize/auctionCategories.json");
// const dummyCategory = [
//   {
//     label: "무기",
//     value: "무기",
//     index: 1,
//     children: [
//       {
//         category: "근거리",
//         items: [
//           {
//             label: "검",
//             value: "검",
//             index: 1,
//           },
//           {
//             label: "한손 장비",
//             value: "한손 장비",
//             index: 2,
//           },
//           {
//             label: "양손 장비",
//             value: "양손 장비",
//             index: 3,
//           },
//           {
//             label: "둔기",
//             value: "둔기",
//             index: 4,
//           },
//           {
//             label: "도끼",
//             value: "도끼",
//             index: 5,
//           },
//           {
//             label: "랜스",
//             value: "랜스",
//             index: 6,
//           },
//           {
//             label: "너클",
//             value: "너클",
//             index: 7,
//           },
//           {
//             label: "핸들",
//             value: "핸들",
//             index: 8,
//           },
//           {
//             label: "체인 블레이드",
//             value: "체인 블레이드",
//             index: 8,
//           },
//         ],
//       },
//       {
//         category: "원거리",
//         items: [
//           {
//             label: "활",
//             value: "활",
//             index: 1,
//           },
//           {
//             label: "석궁",
//             value: "석궁",
//             index: 2,
//           },
//           {
//             label: "듀얼건",
//             value: "듀얼건",
//             index: 3,
//           },
//           {
//             label: "수리검",
//             value: "수리검",
//             index: 4,
//           },
//           {
//             label: "아틀라틀",
//             value: "아틀라틀",
//             index: 5,
//           },
//         ],
//       },
//       {
//         category: "마법",
//         items: [
//           {
//             label: "스태프",
//             value: "스태프",
//             index: 1,
//           },
//           {
//             label: "원드",
//             value: "원드",
//             index: 2,
//           },
//           {
//             label: "실린더",
//             value: "실린더",
//             index: 3,
//           },
//         ],
//       },
//       {
//         category: "기타 장비",
//         items: [
//           {
//             label: "방패",
//             value: "방패",
//             index: 1,
//           },
//           {
//             label: "원거리 소모품",
//             value: "원거리 소모품",
//             index: 2,
//           },
//           {
//             label: "마도서",
//             value: "마도서",
//             index: 3,
//           },
//           {
//             label: "마리오네트",
//             value: "마리오네트",
//             index: 4,
//           },
//           {
//             label: "오브",
//             value: "오브",
//             index: 5,
//           },
//           {
//             label: "악기",
//             value: "악기",
//             index: 6,
//           },
//           {
//             label: "액세서리",
//             value: "액세서리",
//             index: 7,
//           },
//           {
//             label: "에코스톤",
//             value: "에코스톤",
//             index: 8,
//           },
//           {
//             label: "에이도스",
//             value: "에이도스",
//             index: 9,
//           },
//           {
//             label: "기타 장비",
//             value: "기타 장비",
//             index: 10,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "방어구",
//     value: "방어구",
//     index: 2,
//     children: [
//       {
//         category: "모자/가발",
//         items: [
//           {
//             label: "모자/가발",
//             value: "모자/가발",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "방어구",
//         items: [
//           {
//             label: "중갑옷",
//             value: "중갑옷",
//             index: 1,
//           },
//           {
//             label: "경갑옷",
//             value: "경갑옷",
//             index: 2,
//           },
//           {
//             label: "천옷",
//             value: "천옷",
//             index: 3,
//           },
//         ],
//       },
//       {
//         category: "장갑",
//         items: [
//           {
//             label: "장갑",
//             value: "장갑",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "신발",
//         items: [
//           {
//             label: "신발",
//             value: "신발",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "로브",
//         items: [
//           {
//             label: "로브",
//             value: "로브",
//             index: 1,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "생활",
//     value: "생활",
//     index: 3,
//     children: [
//       {
//         category: "생활 도구",
//         items: [
//           {
//             label: "생활 도구",
//             value: "생활 도구",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "도면",
//         items: [
//           {
//             label: "도면",
//             value: "도면",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "옷본",
//         items: [
//           {
//             label: "옷본",
//             value: "옷본",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "천옷/방직",
//         items: [
//           {
//             label: "천옷/방직",
//             value: "천옷/방직",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "제련/블랙스미스",
//         items: [
//           {
//             label: "제련/블랙스미스",
//             value: "제련/블랙스미스",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "매직 크래프트",
//         items: [
//           {
//             label: "매직 크래프트",
//             value: "매직 크래프트",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "힐웬 공학",
//         items: [
//           {
//             label: "힐웬 공학",
//             value: "힐웬 공학",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "마기그래프",
//         items: [
//           {
//             label: "마기그래프",
//             value: "마기그래프",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "마기그래프 도안",
//         items: [
//           {
//             label: "마기그래프 도안",
//             value: "마기그래프 도안",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "피니 펫",
//         items: [
//           {
//             label: "피니 펫",
//             value: "피니 펫",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "핀즈비즈",
//         items: [
//           {
//             label: "핀즈비즈",
//             value: "핀즈비즈",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "퍼품",
//         items: [
//           {
//             label: "퍼품",
//             value: "퍼품",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "낭만농장/달빛섬",
//         items: [
//           {
//             label: "낭만농장/달빛섬",
//             value: "낭만농장/달빛섬",
//             index: 1,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "소모품",
//     value: "소모품",
//     index: 4,
//     children: [
//       {
//         category: "포션",
//         items: [
//           {
//             label: "포션",
//             value: "포션",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "인챈트 스크롤",
//         items: [
//           {
//             label: "인챈트 스크롤",
//             value: "인챈트 스크롤",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "마법가루",
//         items: [
//           {
//             label: "마법가루",
//             value: "마법가루",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "개조석",
//         items: [
//           {
//             label: "개조석",
//             value: "개조석",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "던전 통행증",
//         items: [
//           {
//             label: "던전 통행증",
//             value: "던전 통행증",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "알반 훈련석",
//         items: [
//           {
//             label: "알반 훈련석",
//             value: "알반 훈련석",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "염색 앰플",
//         items: [
//           {
//             label: "염색 앰플",
//             value: "염색 앰플",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "음식",
//         items: [
//           {
//             label: "음식",
//             value: "음식",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "페이지",
//         items: [
//           {
//             label: "페이지",
//             value: "페이지",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "변신 메달",
//         items: [
//           {
//             label: "변신 메달",
//             value: "변신 메달",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "분양 메달",
//         items: [
//           {
//             label: "분양 메달",
//             value: "분양 메달",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "불타래",
//         items: [
//           {
//             label: "불타래",
//             value: "불타래",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "기타 소모품",
//         items: [
//           {
//             label: "기타 소모품",
//             value: "기타 소모품",
//             index: 1,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "기타",
//     value: "기타",
//     index: 5,
//     children: [
//       {
//         category: "책",
//         items: [
//           {
//             label: "책",
//             value: "책",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "마비노기벨",
//         items: [
//           {
//             label: "마비노기벨",
//             value: "마비노기벨",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "토템",
//         items: [
//           {
//             label: "토템",
//             value: "토템",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "팔리아스 유물",
//         items: [
//           {
//             label: "팔리아스 유물",
//             value: "팔리아스 유물",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "허브",
//         items: [
//           {
//             label: "허브",
//             value: "허브",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "퍼품",
//         items: [
//           {
//             label: "퍼품",
//             value: "퍼품",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "스케치",
//         items: [
//           {
//             label: "스케치",
//             value: "스케치",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "마족 스크롤",
//         items: [
//           {
//             label: "마족 스크롤",
//             value: "마족 스크롤",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "기타 재료",
//         items: [
//           {
//             label: "기타 재료",
//             value: "기타 재료",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "기타",
//         items: [
//           {
//             label: "기타",
//             value: "기타",
//             index: 1,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "꾸미기",
//     value: "꾸미기",
//     index: 6,
//     children: [
//       {
//         category: "꼬리",
//         items: [
//           {
//             label: "꼬리",
//             value: "꼬리",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "날개",
//         items: [
//           {
//             label: "날개",
//             value: "날개",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "제스처",
//         items: [
//           {
//             label: "제스처",
//             value: "제스처",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "얼굴 장식",
//         items: [
//           {
//             label: "얼굴 장식",
//             value: "얼굴 장식",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "뷰티 쿠폰",
//         items: [
//           {
//             label: "뷰티 쿠폰",
//             value: "뷰티 쿠폰",
//             index: 1,
//           },
//         ],
//       },
//       {
//         category: "말풍선 스티커",
//         items: [
//           {
//             label: "말풍선 스티커",
//             value: "말풍선 스티커",
//             index: 1,
//           },
//         ],
//       },
//     ],
//   },
// ];

db.prepare(
  `CREATE TABLE IF NOT EXISTS auction_category 
  (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  display_name TEXT NOT NULL,
  value TEXT NOT NULL,
  depth: INTEGER
  )
  `
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO auction_category VALUES (
        null,
        @display_name,
        @value,
        @depth,
      )
    `);
  // 데이터 인설트
  for (const category of dummyCategory) {
    stmt.run(category);
  }
}
// initData();
console.log("경매장 카테고리 데이터 insert");
