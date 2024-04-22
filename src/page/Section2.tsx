import Spacing from '@/components/Spacing.tsx';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { USER_PROFILE } from '@/constants/useProfile';
import TechStackIcon from '@/components/techStackIcon';
import styled from 'styled-components';
import Rainbow from '@/components/Rainbow.tsx';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const { name, education, techStack, career, field } = USER_PROFILE;
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.rightContent',
          start: 'top 70%',
          end: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
      .fromTo(
        '.rightContent > *',
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
      );
  }, []);

  return (
    <Wrapper id="section2">
      <RightContent className="rightContent">
        <Rainbow text={'About Me'} />
        <Spacing direction="vertical" size={100} />
        <WhiteBar />
        <Content ref={sectionRef}>이름 : {name}</Content>
        <Content>학력 : {education}</Content>
        <Content>직군 : {field}</Content>
        <Content>기술 스택: </Content>
        <TechStackIcon techs={techStack} />
        <Content>경력 : {career}</Content>
      </RightContent>
    </Wrapper>
  );
};

export default Section2;

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh; // Ensure that the Wrapper has minimum height
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

const RightContent = styled.div`
  position: absolute;
  top: 0; // Ensure that RightContent is properly positioned
  right: 0;
  width: 50%;
`;
