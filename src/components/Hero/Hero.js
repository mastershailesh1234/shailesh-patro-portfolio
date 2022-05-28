import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Portfolio
        </SectionTitle>
        <SectionText>
          Hello!! <br />
          My name is Shailesh Patro, and my portfolio is a representaion of all
          that I have learned and accomplished till now.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/17upV7dPHfF9GYN0CMySp5kunEOf2U-bt/view?usp=sharing")
          }
        >
          View CV in PDF
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
