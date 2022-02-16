import Image from 'next/image';
import { StyledAbout } from './styles/Home.styled';

const MeetMe = () => {
  return (
    <StyledAbout>
      <Image
        src='/user/profile_image/475315/8ca55abe-8c92-48cb-bc29-4de6e64f4921.jpg'
        alt='john doe avatar'
        width={130}
        height={130}
      />
      <p>
        Hello there, am{' '}
        <strong>
          <a
            href='https://twitter.com/elijahtrillionz'
            target={'_blank'}
            rel={'noreferrer'}
          >
            Elijah
          </a>
        </strong>
        . I love coding. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Reiciendis commodi numquam incidunt blanditiis quibusdam atque
        natus inventore sunt autem iusto.
      </p>
    </StyledAbout>
  );
};

export default MeetMe;
