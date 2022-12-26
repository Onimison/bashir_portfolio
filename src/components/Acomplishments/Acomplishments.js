import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Open Source Contributions'},
  { number: 6, text: 'Reached Stage 6 in the HNG9 Internship ', },
  { number: 2022, text: 'Graduated from I4GxZuri Internship', }

];

const Acomplishments = () => (
  <Section >
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <SectionDivider />
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
