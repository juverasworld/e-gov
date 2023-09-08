import { ReactElement, useState } from "react";

export function useMultipleStepForm(steps:ReactElement[]) {
const [currentStepIndex,setCurrentStepIndex] = useState(0)
const [formData, setFormData] = useState({});

function next() {
setCurrentStepIndex(i => {
    if (i >= steps.length - 1) return i 
    return i + 1
})
}

function back() {
setCurrentStepIndex(i => {
    if(i <= 0) return i
    return i - 1
})
}
function goTo(index: number) {
    setCurrentStepIndex(index)
  }
  const isLastStep = currentStepIndex === steps.length - 1;
return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isSecondStep:currentStepIndex === 1,
    next,
    back,
    goTo,
    steps,
    isLastStep,
    formData,
    setFormData,
}
}