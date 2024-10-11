import React from 'react';
import * as S from './mentorCard.style';
import ProfileBase from '../../assets/ProfileBase.svg';

interface MentorData {
  mentorId: number;
  picture: string;
  mentorName: string;
  club: string;
  part: string;
  username: string;
  title: string;
  description: string;
}

interface MentorCardProps {
  mentor: MentorData;
  onClick: (mentor: MentorData) => void;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, onClick }) => {
  return (
    <S.ProfileCard onClick={() => onClick(mentor)}>
      <S.ProfileBox>
        {mentor.picture ? (
          <>
            <S.ProfileImg src={mentor.picture.slice(1,-1)} alt="Profile" />
          </>
        ) : (
          <S.ProfileBase src={ProfileBase} alt="Profile" />
        )}
        <S.ProfileTagContainer>
          <S.ProfileTag>{mentor.part}</S.ProfileTag>
          <S.ProfileTag>{mentor.club}</S.ProfileTag>
        </S.ProfileTagContainer>
      </S.ProfileBox>
      <S.ProfileContentsBox>
        <S.ProfileName>{mentor.mentorName} 멘토님</S.ProfileName>
        <S.ProfileBottomContainer>
          <S.ProfileTitle>{mentor.title}</S.ProfileTitle>
          <S.ProfileContents>{mentor.description}</S.ProfileContents>
        </S.ProfileBottomContainer>
      </S.ProfileContentsBox>
    </S.ProfileCard>
  );
};

export default MentorCard;
