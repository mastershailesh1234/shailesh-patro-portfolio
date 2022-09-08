import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 400, text: "+ problems solved on leetcode and GFG " },
  { number: 162, text: "th rank in CodeChef Starters 18 Division 3 " },
  { number: 342, text: "rd rank in Newton's coding challenge September 2021" },
  { number: 1710, text: "+ Rating-Codechef" },
  { number: 756, text: "th rank in March CodeChef Starters 2021 Division 3" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
