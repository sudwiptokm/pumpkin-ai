"use client";

import { useEditEmail } from "@/hooks/email-marketing/use-marketing";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import FormGenerator from "../forms/form-generator";
import { Loader } from "../loader";
import { Button } from "../ui/button";

type EditEmailProps = {
  id: string;
  onCreate(): void;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setDefault: UseFormSetValue<FieldValues>;
};

export const EditEmail = ({
  id,
  onCreate,
  errors,
  register,
  setDefault,
}: EditEmailProps) => {
  const { loading, template } = useEditEmail(id);
  setDefault("description", template ? JSON.parse(template) : "");
  return (
    <form onSubmit={onCreate} className="flex flex-col gap-3">
      <Loader loading={loading}>
        <FormGenerator
          name="description"
          label="Message"
          register={register}
          errors={errors}
          inputType="textarea"
          lines={10}
          placeholder="Your email description"
          type="text"
        />
        <Button>Save</Button>
      </Loader>
    </form>
  );
};
