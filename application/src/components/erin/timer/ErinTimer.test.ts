import {erinDay} from "@components/erin/timer/ErinTimer";
import {DayOfTheWeek} from "@enums/erin";

/**
 * 에린에서의 하루는 현실 시간 36분으로 간주
 */

describe('요일별 요일 구하기', () => {
  let erinTimeMockFn: jest.Mock<DayOfTheWeek, [string]>;

  beforeEach(() => {
    erinTimeMockFn = jest.fn(erinDay);
  });

  test('월요일 - 알반 에일레르 (Alban Eiler)', () => {

  });

  test('화요일 - 벨테인 (Beltane)', () => {

  });

  test('수요일 - 알반 헤루인 (Alban Heruin)', () => {

  });

  test('목요일 - 루나사 (Lughnasadh)', () => {

  });

  test('금요일 - 알반 엘베드 (Alban Elved)', () => {

  });

  test('토요일 - 삼하인 (Samhain)', () => {

  });

  test('일요일 - 임볼릭 (imbolic)', () => {

  });
})