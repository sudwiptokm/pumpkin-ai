"use client";

import React, { createContext } from "react";

type InitialValuesProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const InitialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
};

const authContext = createContext(InitialValues);
const { Provider } = authContext;

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = React.useState(
    InitialValues.currentStep
  );

  const values = { currentStep, setCurrentStep };

  return <Provider value={values}>{children}</Provider>;
};

export const useAuthContext = () => React.useContext(authContext);
