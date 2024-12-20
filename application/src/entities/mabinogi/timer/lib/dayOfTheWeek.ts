enum DayOfTheWeek {
  MONDAY = '월요일',
  TUESDAY = '화요일',
  WEDNESDAY = '수요일',
  THURSDAY = '목요일',
  FRIDAY = '금요일',
  SATURDAY = '토요일',
  SUNDAY = '일요일',
}

enum ErinDayOfTheWeek {
  MONDAY = '알반 에일레르(Alban Eiler)',
  TUESDAY = '벨테인(Beltane)',
  WEDNESDAY = '알반 헤루인(Alban Heruin)',
  THURSDAY = '루나사(Lughnasadh)',
  FRIDAY = '알반 엘베드(Alban Elved)',
  SATURDAY = '삼하인(Samhain)',
  SUNDAY = '임볼릭(imbolic)',
}

export const daysOfWeek: DayOfTheWeek[] = [
  DayOfTheWeek.SUNDAY,
  DayOfTheWeek.MONDAY,
  DayOfTheWeek.TUESDAY,
  DayOfTheWeek.WEDNESDAY,
  DayOfTheWeek.THURSDAY,
  DayOfTheWeek.FRIDAY,
  DayOfTheWeek.SATURDAY,
];

export const dayToErinDay: { [key in DayOfTheWeek]: ErinDayOfTheWeek } = {
  [DayOfTheWeek.SUNDAY]: ErinDayOfTheWeek.SUNDAY,
  [DayOfTheWeek.MONDAY]: ErinDayOfTheWeek.MONDAY,
  [DayOfTheWeek.TUESDAY]: ErinDayOfTheWeek.TUESDAY,
  [DayOfTheWeek.WEDNESDAY]: ErinDayOfTheWeek.WEDNESDAY,
  [DayOfTheWeek.THURSDAY]: ErinDayOfTheWeek.THURSDAY,
  [DayOfTheWeek.FRIDAY]: ErinDayOfTheWeek.FRIDAY,
  [DayOfTheWeek.SATURDAY]: ErinDayOfTheWeek.SATURDAY,
};
