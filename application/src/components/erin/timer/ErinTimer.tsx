import { ReactElement, useEffect, useState } from "react";
import { DayOfTheWeek, ErinDayOfTheWeek } from "@enums/erin";


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

const erinTime = (realTime: Date): string => {
  const realHours = realTime.getHours();
  const realMinutes = realTime.getMinutes();
  const realSeconds = realTime.getSeconds();

  // 총 경과 초 (시, 분, 초 모두 포함)
  const totalRealSeconds = (realHours * 3600) + (realMinutes * 60) + realSeconds;
  // 시간 변환 비율: 36분 = 24시간
  const realToVirtualFactor = (24 * 60 * 60) / (36 * 60); // 1초당 흘러가는 시간
  const totalVirtualSeconds = Math.floor(totalRealSeconds * realToVirtualFactor);

  const virtualHours = Math.floor(totalVirtualSeconds / 3600) % 24;
  const virtualMinutes = Math.floor((totalVirtualSeconds % 3600) / 60 / 10) * 10;

  return `${String(virtualHours).padStart(2, '0')}시 ${String(virtualMinutes).padStart(2, '0')}분`;
}

export const ErinTimer = (): ReactElement => {
  const [time, setTime] = useState<string>("00시 00분");

  useEffect(() => {
    const updateVirtualTime = () => {
      const currentTime = new Date();
      const virtualTime = erinTime(currentTime);
      setTime(virtualTime);
    };
    updateVirtualTime();
    const intervalId = setInterval(updateVirtualTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div>현재 에린은 {time} {erinDay()} 입니다.</div>
    </div>
  );
};
