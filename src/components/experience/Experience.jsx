import { Card } from "@mui/material";
import Bits from "./Bits";
import "./Experience.css";
import Isro from "./Isro";
import Pentair from "./Pentair";
import Sunking from "./Sunking";

const Experience = () => {
  return (
    <div id="experience">
      <Card className="experience">
        <h3>Experience</h3>
        <div className="experience-list">
          <Card>
            <Sunking />
          </Card>
          <Card>
            <Isro />
          </Card>
          <Card>
            <Bits />
          </Card>
          <Card>
            <Pentair />
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default Experience;
