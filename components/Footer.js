import { MaxWidthWrapper } from "./styles/Global";
import { StyledFooter } from "./styles/Footer.styled";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      <MaxWidthWrapper>
        <div>
          <a href={"https://twitter.com/elijahtrillionz"}>
            <i className={"fab fa-twitter"} />
          </a>
          <a href={"https://github.com/elijah-trillionz"}>
            <i className={"fab fa-github"} />
          </a>
        </div>
        <ul>
          <li>
            <Link href={"/posts"}>Blog</Link>
          </li>
          <li>
            <Link href={"/tags/javascript"}>JavaScript</Link>
          </li>
          <li>
            <Link href={"/tags/css"}>
              <a>CSS</a>
            </Link>
          </li>
          <li>
            <Link href={"/tags/react"}>React</Link>
          </li>
        </ul>
        <p>
          &copy; <Link href={"/"}>Elijah Trillionz</Link> 2022-present. All
          Rights Reserved
        </p>
      </MaxWidthWrapper>
    </StyledFooter>
  );
};

export default Footer;
