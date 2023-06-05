import React, { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

interface Form {
  name: string;
}

export function FormContext() {
  const methods = useForm<Form>();
  const [result, setResult] = useState("");

  function NestedInput() {
    const { register } = useFormContext();
    return <input placeholder="user Name" {...register("name")} />;
  }

  const onSubmit = (data: Form) => {
    setResult(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
        <p>{result}</p>
      </form>
    </FormProvider>
  );
}
