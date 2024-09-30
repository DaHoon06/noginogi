import { ReactElement, useEffect, useState } from "react";
import { daysOfWeek, dayToErinDay, ErinDayOfTheWeek } from "@enums/erin";
import * as S from './ErinTimer.styled';

export const erinDay = (): ErinDayOfTheWeek => {
  const currentDay = new Date().getDay();
  return dayToErinDay[daysOfWeek[currentDay]];
}

const erinTime = (realTime: Date): string => {
  const realHours = realTime.getHours();
  const realMinutes = realTime.getMinutes();
  const realSeconds = realTime.getSeconds();

  // 총 경과 초 (시, 분, 초 모두 포함)
  const totalRealSeconds = (realHours * 3600) + (realMinutes * 58) + realSeconds;
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
    <S.TimerContainer>
      <S.DayDisplay>
        <S.TimeDisplay>{time}</S.TimeDisplay> {erinDay()}
      </S.DayDisplay>
    </S.TimerContainer>
  );
};
