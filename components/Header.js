import Link from "next/link";
import { StyledHeader } from "./styles/Header.styled";
import { MaxWidthWrapper } from "./styles/Global";

const Header = () => {
  return (
    <StyledHeader>
      <MaxWidthWrapper>
        <h1>
          <Link href="/">Elijah Trillionz</Link>
        </h1>
        <ul>
          <li>
            <Link href="/posts">Blog</Link>
          </li>
          <li>
            <Link href="/tags/javascript">JavaScript</Link>
          </li>
          <li>
            <Link href="/tags/css">CSS</Link>
          </li>
        </ul>
      </MaxWidthWrapper>
    </StyledHeader>
  );
};

export default Header;
