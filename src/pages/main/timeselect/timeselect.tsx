import React, { useState } from "react";
import * as styles from "./timeselect.styles";

function TimeSelect() {
  const timeSlots = [
    "화 09:00-10:00",
    "수 09:00-10:00",
    "목 10:00-11:00",
    "금 11:00-12:00",
  ];

  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot); // 선택된 시간 슬롯 업데이트
  };

  return (
    <styles.Container>
      <styles.HeaderContainer>
        <styles.BackButton onClick={() => console.log("뒤로 가기")}>
          {"<-"}
        </styles.BackButton>
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
}

export default TimeSelect;
