import { ReactElement } from "react";
import {DayOfTheWeek, ErinDayOfTheWeek} from "@enums/erin";


const daysOfWeek: DayOfTheWeek[] = [
  DayOfTheWeek.SUNDAY,
  DayOfTheWeek.MONDAY,
  DayOfTheWeek.TUESDAY,
  DayOfTheWeek.WEDNESDAY,
  DayOfTheWeek.THURSDAY,
  DayOfTheWeek.FRIDAY,
  DayOfTheWeek.SATURDAY
];

const dayToErinDay: { [key in DayOfTheWeek]: ErinDayOfTheWeek } = {
  [DayOfTheWeek.SUNDAY]: ErinDayOfTheWeek.SUNDAY,
  [DayOfTheWeek.MONDAY]: ErinDayOfTheWeek.MONDAY,
  [DayOfTheWeek.TUESDAY]: ErinDayOfTheWeek.TUESDAY,
  [DayOfTheWeek.WEDNESDAY]: ErinDayOfTheWeek.WEDNESDAY,
  [DayOfTheWeek.THURSDAY]: ErinDayOfTheWeek.THURSDAY,
  [DayOfTheWeek.FRIDAY]: ErinDayOfTheWeek.FRIDAY,
  [DayOfTheWeek.SATURDAY]: ErinDayOfTheWeek.SATURDAY,
};

export const erinDay = (): ErinDayOfTheWeek => {
  const currentDay = new Date().getDay();
  return dayToErinDay[daysOfWeek[currentDay]];
}

export const erinTime = (): string => {
  return '';
}

export const ErinTimer = (): ReactElement => {
  return (
    <div>
      <div>현재 에린은 삼하인 10:10분 입니다.</div>
    </div>
  );
};
