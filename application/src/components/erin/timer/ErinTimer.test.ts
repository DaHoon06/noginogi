import { erinDay } from "@components/erin/timer/ErinTimer";
import { ErinDayOfTheWeek } from "@enums/erin";


/**
 * ======================================
 * 에린에서의 하루는 현실 시간 36분으로 간주
 * ======================================
 */

describe('요일별 요일 구하기', () => {
  let erinTimeMockFn: jest.Mock<ErinDayOfTheWeek, []>;

  beforeEach(() => {
    erinTimeMockFn = jest.fn(erinDay);
  });

  test('월요일 - 알반 에일레르 (Alban Eiler)', () => {
    const expectedDay = ErinDayOfTheWeek.MONDAY;
    expect(erinDay()).toBe(expectedDay);
  });

  test('화요일 - 벨테인 (Beltane)', () => {
    const expectedDay = ErinDayOfTheWeek.TUESDAY;
    expect(erinDay()).toBe(expectedDay);
  });

  test('수요일 - 알반 헤루인 (Alban Heruin)', () => {
    const expectedDay = ErinDayOfTheWeek.WEDNESDAY;
    expect(erinDay()).toBe(expectedDay);
  });

  test('목요일 - 루나사 (Lughnasadh)', () => {
    const expectedDay = ErinDayOfTheWeek.THURSDAY;
    expect(erinDay()).toBe(expectedDay);
  });

  test('금요일 - 알반 엘베드 (Alban Elved)', () => {
    const expectedDay = ErinDayOfTheWeek.FRIDAY;
    expect(erinDay()).toBe(expectedDay);
  });

  test('토요일 - 삼하인 (Samhain)', () => {
    const expectedDay = ErinDayOfTheWeek.SATURDAY;
    expect(erinDay()).toBe(expectedDay);
  });

  test('일요일 - 임볼릭 (imbolic)', () => {
    const expectedDay = ErinDayOfTheWeek.SUNDAY;
    expect(erinDay()).toBe(expectedDay);
  });
});

