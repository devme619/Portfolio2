import isro from "../../Photos/isro.jpg";
import {
  ContentContainer,
  ExperienceContainer,
  ExperienceHeading,
  ExperienceSubHeading,
  Logo,
  ImageContainer,
} from "./Style";
const Isro = () => {
  return (
    <ExperienceContainer>
      <ImageContainer>
        <Logo src={isro} alt="isro" />
      </ImageContainer>
      <ContentContainer>
        <ExperienceHeading>
          INDIAN SPACE RESEARCH ORGANISATION
        </ExperienceHeading>
        <ExperienceSubHeading>
          Scientist(Group A-Gazetted Officer)- Mechanical
        </ExperienceSubHeading>
        <ExperienceSubHeading>Sep 2020-Sep 2022</ExperienceSubHeading>
      </ContentContainer>
    </ExperienceContainer>
  );
};

export default Isro;
