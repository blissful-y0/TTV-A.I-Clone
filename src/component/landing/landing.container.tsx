import { useState } from "react";
import LandingUI from "./landing.presenter";

const Landing: React.FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return <LandingUI open={open} setOpen={setOpen} handleOpen={handleOpen} />;
};

export default Landing;
