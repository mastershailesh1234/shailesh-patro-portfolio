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
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hello!! <br />
          My name is Shailesh Patro, and my portfolio is a representaion of all
          that I have learned and accomplished till now.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/1K6QaSYr3KUMytIgeh71UMOiBilj_z-xR/view?usp=sharing")
          }
        >
          View CV in PDF
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
