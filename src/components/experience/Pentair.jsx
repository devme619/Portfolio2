import pentair from "../../Photos/pentair.png";
import {
  ContentContainer,
  ExperienceContainer,
  ExperienceHeading,
  ExperienceSubHeading,
  Logo,
  ImageContainer,
} from "./Style";
const Pentair = () => {
  return (
    <ExperienceContainer>
      <ImageContainer>
        <Logo src={pentair} alt="pentair" />
      </ImageContainer>
      <ContentContainer>
        <ExperienceHeading>
          Pentair Water India Private Limited
        </ExperienceHeading>
        <ExperienceSubHeading>Intern</ExperienceSubHeading>
        <ExperienceSubHeading>May 2018-Jul 2018</ExperienceSubHeading>
      </ContentContainer>
    </ExperienceContainer>
  );
};

export default Pentair;
