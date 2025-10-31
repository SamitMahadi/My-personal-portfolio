
import { Timeline } from "../components/Timeline";
import { experiences } from "../Constants/Index";
const Experiences = () => {
  return (
    <div id="work" className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
