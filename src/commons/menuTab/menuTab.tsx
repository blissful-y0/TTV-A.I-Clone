import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DescriptionIcon from "@material-ui/icons/Description";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MovieIcon from "@material-ui/icons/Movie";
import { IconButton } from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`text-to-video-${index}`}
      aria-labelledby={`text-to-video-${index}`}
      {...other}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {value === index && <IconButton>{children}</IconButton>}
      </div>
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `text-to-video-${index}`,
  };
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { background: "#c7b9b4", color: "#000000" },
        }}
        centered
      >
        <Tab label="Text" {...a11yProps(0)} />
        <Tab label="To" {...a11yProps(1)} />
        <Tab label="Video" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DescriptionIcon style={{ fontSize: 130, color: "black" }} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArrowForwardIcon style={{ fontSize: 130, color: "black" }} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MovieIcon style={{ fontSize: 130, color: "black" }} />
      </TabPanel>
    </>
  );
}
