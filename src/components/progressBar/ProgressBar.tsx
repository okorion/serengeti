import React from 'react';
import ProgressBarShape from './ProgressBarShape';
import ProgressBarActive from './ProgressBarActive';
import styled from 'styled-components';
import { playSmoothScrollToRef } from '@/utils/playSmoothScrollToRef'; // 사용자 정의 훅 import

interface ProgressBarProps {
  scrollFactor: number;
  sectionRefs: number[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ scrollFactor, sectionRefs }) => {
  const smoothScrollToRef = playSmoothScrollToRef(); // 사용자 정의 스무스 스크롤 훅

  const handleClick = (index: number) => {
    const targetPosition = sectionRefs[index];
    const totalScrollHeight = window.document.documentElement.scrollHeight - window.innerHeight;
    const scrollTo = targetPosition * totalScrollHeight;
    smoothScrollToRef(scrollTo);
  };

  return (
    <ProgressBarContainer>
      <ProgressBarShape>
        <ProgressBarActive $customwidth={scrollFactor} />
        <CheckpointsContainer>
          {sectionRefs.map((_, index) => (
            <Checkpoint
              key={index}
              checked={index <= scrollFactor * (sectionRefs.length - 1)}
              onClick={() => handleClick(index)}
            />
          ))}
        </CheckpointsContainer>
      </ProgressBarShape>
    </ProgressBarContainer>
  );
};

const CheckpointsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -17px;
`;

const Checkpoint = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? 'yellow' : 'gray')};
  cursor: pointer;
  z-index: 3;
`;

const ProgressBarContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  z-index: 1000; // 다른 요소들 위에 표시되도록 z-index 설정
`;

export default ProgressBar;
