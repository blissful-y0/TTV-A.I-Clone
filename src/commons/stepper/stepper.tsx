import React, {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import {
  TextInputWrapper,
  TextInput,
  LetterCounter,
  ConverButton,
} from "./stepper.style";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "80%",
    },
    step: {
      "&$completed": {
        color: "#c7b9b4",
      },
      "&$active": {
        color: "#c7b9b4",
      },
      "&$disabled": {
        color: "#c7b9b4",
      },
      color: "#c7b9b4",
    },
    alternativeLabel: {},
    active: {},
    completed: {},
    disabled: {},
    labelContainer: {
      "&$alternativeLabel": {
        marginTop: 0,
      },
    },
  })
);

function getSteps() {
  return ["Scripting", "Matching videos", "Encoding"];
}

function getStepContent(
  step: number,
  setLetterCount: Dispatch<number>,
  letterCount: number
) {
  const onChangeTextInput: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLetterCount(event.target.value.length);
  };

  switch (step) {
    case 0:
      return (
        <TextInputWrapper>
          <TextInput
            onChange={onChangeTextInput}
            placeholder="Put your script here 500~5,000 letters."
          />
          <LetterCounter>{letterCount} letters</LetterCounter>
          <ConverButton disabled>Convert</ConverButton>
        </TextInputWrapper>
      );
    case 1:
      return;
    case 2:
      return;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [letterCount, setLetterCount] = useState<number>(0);

  return (
    <div className={classes.root}>
      <Stepper
        style={{ backgroundColor: "#0e0c0c" }}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              classes={{
                alternativeLabel: classes.alternativeLabel,
                labelContainer: classes.labelContainer,
              }}
              StepIconProps={{
                classes: {
                  root: classes.step,
                  completed: classes.completed,
                  active: classes.active,
                },
              }}
            >
              <div style={{ color: "white", fontWeight: "bold" }}>{label}</div>
            </StepLabel>
            <StepContent>
              <Typography>
                {getStepContent(index, setLetterCount, letterCount)}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
