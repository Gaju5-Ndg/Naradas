import React, { useState } from 'react';
import {makeStyles} from '@mui/styles';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import BusinessInformation from './BusinessInformation';
import FinancialInformation from './FinancialInformation';
import BusinessGoals from './BusinessGoals';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    // marginRight: theme.spacing(1),
    marginRight:"12px"
  },
  instructions: {
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1),
    marginBottom:"12px",
    marginTop:"12px"

  },
}));

function getSteps() {
  return ['Business Information', 'Financial Information', 'Business Goals'];
}

function getStepContent(stepIndex, handleNext, handleBack) {
  switch (stepIndex) {
    case 0:
      return <BusinessInformation handleNext={handleNext} />;
    case 1:
      return <FinancialInformation handleNext={handleNext} handleBack={handleBack} />;
    case 2:
      return <BusinessGoals handleBack={handleBack} />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function BusinessForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep, handleNext, handleBack)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
