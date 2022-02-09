import { StyledMetadata } from "./styles/Markdown.styled";
import { formatDate } from "../scripts/date";

const Metadata = ({ date }) => {
  //the date format is [month, day, year]
  return (
    <StyledMetadata>
      <p>
        by <a href="https://twitter.com/elijahtrillionz">Elijah Trillionz</a>
      </p>
      <p>{formatDate(...date)}</p>
    </StyledMetadata>
  );
};

export default Metadata;
