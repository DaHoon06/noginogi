import { ReactElement } from "react";
import {DayOfTheWeek} from "@enums/erin";

export const erinDay = (day: string): DayOfTheWeek => {
  switch (day) {
    case '':
      return DayOfTheWeek.MONDAY;
    case '':
      return DayOfTheWeek.TUESDAY;
    case '':
      return DayOfTheWeek.WEDNESDAY;
    case '':
      return DayOfTheWeek.THURSDAY;
    case '':
      return DayOfTheWeek.FRIDAY;
    case '':
      return DayOfTheWeek.SATURDAY;
    case '':
      return DayOfTheWeek.SUNDAY;
  }
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
