"use client";

import { Spinner } from "@/components/spinner";
import { useAuthContext } from "@/context/use-auth-context";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import OTPForm from "./otp-form";
import TypeSelectionForm from "./type-selection-form";

const DetailForm = dynamic(() => import("./account-details-form"), {
  ssr: false,
  loading: () => <Spinner />,
});

type Props = {};

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContext();
  const [onOTP, setOnOTP] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");

  setValue("otp", onOTP);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return <DetailForm register={register} errors={errors} />;

    case 3:
      return <OTPForm onOTP={onOTP} setOTP={setOnOTP} />;
  }

  return <div>RegistrationFormStep</div>;
};

export default RegistrationFormStep;
