import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there, <br />
        I'm Bashir
      </SectionTitle>
      <SectionText>
        I am a Front-End Developer </SectionText>
      <Button onclick={() => window.location = "https://google.com" }>Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;