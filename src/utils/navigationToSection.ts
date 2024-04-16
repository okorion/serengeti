import { sectionName } from '@/constants/sectionName.ts';
import LocomotiveScroll from 'locomotive-scroll';

export const navigateToSection = (locoScroll: LocomotiveScroll) => {
  const path = window.location.pathname;

  if (path === `/${sectionName.section2}`) {
    const section2 = document.querySelector('#section2') as HTMLElement;
    if (section2) {
      locoScroll.scrollTo(section2);
    }
  }

  if (path === `/${sectionName.section3}`) {
    const section3 = document.querySelector('#section3') as HTMLElement;
    if (section3) {
      locoScroll.scrollTo(section3);
    }
  }

  if (path === `/${sectionName.section5}`) {
    const section5 = document.querySelector('#section5') as HTMLElement;
    if (section5) {
      locoScroll.scrollTo(section5);
    }
  }
};
