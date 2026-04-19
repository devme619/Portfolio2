import sunking from "../../Photos/sunking.png";
import {
  ContentContainer,
  ExperienceHeading,
  ImageContainer,
  ExperienceSubHeading,
  ExperienceContainer,
  Logo,
} from "./Style";

const Sunking = () => {
  return (
    <ExperienceContainer>
      <ImageContainer>
        <Logo src={sunking} alt="sunking" />
      </ImageContainer>
      <ContentContainer>
        <ExperienceHeading>SUNKING (GREEN LIGHT PLANET)</ExperienceHeading>
        <ExperienceSubHeading>
          Software Developer- Frontend
        </ExperienceSubHeading>
        <ExperienceSubHeading>Dec 2022-Feb 2025</ExperienceSubHeading>
      </ContentContainer>
    </ExperienceContainer>
  );
};

export default Sunking;
