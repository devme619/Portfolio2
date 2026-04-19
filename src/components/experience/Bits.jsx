import bits from "../../Photos/bits.png";
import {
  ContentContainer,
  ExperienceContainer,
  ExperienceHeading,
  ExperienceSubHeading,
  Logo,
  ImageContainer,
} from "./Style";
const Bits = () => {
  return (
    <ExperienceContainer>
      <ImageContainer>
        <Logo src={bits} alt="bits" />
      </ImageContainer>
      <ContentContainer>
        <ExperienceHeading>BITS PILANI</ExperienceHeading>

        <ExperienceSubHeading>B.E Mechanical Engineering</ExperienceSubHeading>
        <ExperienceSubHeading>2016-2020</ExperienceSubHeading>
      </ContentContainer>
    </ExperienceContainer>
  );
};

export default Bits;
