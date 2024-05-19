import React, { useEffect, useState } from "react";
import * as styles from "./timeselect.styles";
import { useLocation } from "react-router-dom";
import BackButton from "../../../components/button/backButton";

interface TimeSlot {
  date: string;
  startTime: string;
  endTime: string;
}

const TimeSelect = () => {
  const location = useLocation();
  const username = location.state.key;
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };
  useEffect(() => {
    const token = process.env.REACT_APP_TOKEN;
    const url = `https://cogo.life/api/v1/mentor/possibleDates/${username}`;
    console.log(username);
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const formedData = getFormattedTimeSlots(data);
        setTimeSlots(formedData);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const getFormattedTimeSlots = (fetchData: TimeSlot[]) => {
    return fetchData.map((slot: TimeSlot) => {
      const date = new Date(slot.date);
      const dayOfWeek = date.toLocaleString("ko-KR", { weekday: "short" });
      const formattedDate = date.toLocaleDateString("ko-KR");
      return `${dayOfWeek} ${formattedDate} ${slot.startTime} ~ ${slot.endTime}`;
    });
  };

  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.ButtonContainer>
          <BackButton />
        </styles.ButtonContainer>
        <styles.HeaderText>미팅 날짜 및 시간을 맞춰주세요</styles.HeaderText>
        <styles.HeaderSubText>
          COOGH 동아리와의 미팅 시간을 선택해주세요.
        </styles.HeaderSubText>
      </styles.HeaderContainer>

      <styles.BodyContainer>
        <styles.TimeSlotContainer>
          {timeSlots.map((timeSlot, index) => (
            <styles.TimeSlotButton
              key={index}
              onClick={() => handleTimeSlotClick(timeSlot)}
              isSelected={selectedTimeSlot === timeSlot}>
              {timeSlot}
            </styles.TimeSlotButton>
          ))}
        </styles.TimeSlotContainer>
        <styles.ApplyButton>확인하기</styles.ApplyButton>
      </styles.BodyContainer>
    </styles.Container>
  );
};

export default TimeSelect;
