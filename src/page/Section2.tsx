import Spacing from '@/components/Spacing.tsx';
import { USER_PROFILE } from '@/constants/useProfile';
import TechStackIcon from '@/components/techStackIcon';
import styled from 'styled-components';
import Rainbow from '@/components/Rainbow.tsx';
import { useOnScreen } from '@/hooks/use-on-screen.ts';
import { useRef, useEffect } from 'react';
import { sectionName } from '@/constants/sectionName.ts';

const Section2 = () => {
  const { name, education, techStack, career, field } = USER_PROFILE;
  const sectionRef = useRef<HTMLDivElement>(null);
  const opacityRef = useRef<HTMLSpanElement>(null);
  useOnScreen(sectionRef, sectionName.section2, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  useEffect(() => {
    // Define the observer options with a threshold of 0.2.
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // Trigger when 20% of the element is visible.
    };

    // Create the observer using the options.
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.style.opacity = '1';
        } else {
          target.style.opacity = '0';
        }
      });
    }, observerOptions);

    // Apply the observer to each element that needs to fade in.
    const elements = document.querySelectorAll('.fade-in'); // Assuming you add this class to your opacity elements.
    elements.forEach(el => observer.observe(el));

    // Clean up the observer on component unmount.
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper id="section2">
      <OpacityText className="fade-in" ref={opacityRef}>
        저의 키워드는
      </OpacityText>
      <Spacing size={500} />
      <OpacityText className="fade-in" ref={opacityRef}>
        열정
      </OpacityText>
      <Spacing size={500} />
      <OpacityText className="fade-in" ref={opacityRef}>
        사랑
      </OpacityText>
      <Spacing size={500} />
      <RightContent>
        <div>
          <Rainbow text={'About Me'} />
          <Spacing direction="vertical" size={100} />
          <WhiteBar />
          <Content ref={sectionRef}>이름 : {name}</Content>
          <Content>학력 : {education}</Content>
          <Content>직군 : {field}</Content>
          <Content>기술 스택: </Content>
          <TechStackIcon techs={techStack} />
          <Content>경력 : {career}</Content>
        </div>
      </RightContent>
    </Wrapper>
  );
};

export default Section2;
const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  justify-content: center;
`;

const WhiteBar = styled.div`
  width: 80%;
  height: 5px;
  background-color: white;
`;

const Content = styled.span`
  color: #fffdd0;
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  display: block;
  line-height: 1.5;
`;

const OpacityText = styled.span`
  color: #fffdd0;
  white-space: pre-wrap;
  font-size: 150px;
  font-weight: bold;
  line-height: 1.5;
  opacity: 0;
  transition: all 2s;

  display: block; /* 블록 레벨 요소로 만들어 줍니다 */
  margin-left: auto;
  margin-right: auto;
  width: fit-content; /* 텍스트의 너비에 맞게 설정합니다 */
`;

const RightContent = styled.div`
  padding-left: 40%;
  display: flex;
  width: 50%;
  right: 0;
`;
