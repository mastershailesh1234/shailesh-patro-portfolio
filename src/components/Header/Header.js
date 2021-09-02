import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { SiCodeforces, SiCodechef } from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "orange" }}>
          <DiCssdeck size="3rem" /> <Span>ShaileshPatro</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>AboutMe</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/mastershailesh1234">
        <AiFillGithub size="2.7rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/shailesh-patro-4b28901b3/">
        <AiFillLinkedin size="2.7rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/master_shailesh_1234/">
        <AiFillInstagram size="2.7rem" />
      </SocialIcons>
      <SocialIcons href="https://codeforces.com/profile/master_coder1234">
        <SiCodeforces size="2.7rem" />
      </SocialIcons>
      <SocialIcons href="https://www.codechef.com/users/master_sp1234">
        <SiCodechef size="2.7rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
