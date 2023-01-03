import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        I'm Bashir
      </SectionTitle>
      <SectionText>
        I am a Front-End Developer </SectionText>
      <Button onClick={() => window.location.href = "https://drive.google.com/file/d/1tQB0xeLfL0SPOb3CIwLfvhGo02_rjdKv/view?usp=share_link" }>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;