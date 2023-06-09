import { Input } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface Form {
  age: number;
}

function ControlledComponent() {
  // prettier-ignore
  const { handleSubmit, control, formState: { errors } } = useForm<Form>();
  const [result, setResult] = useState<string>();

  const onSubmit = (data: Form) => {
    setResult(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <Controller
          name="age"
          control={control}
          defaultValue={33}
          rules={{ required: true, min: 17, max: 40 }} // 유효성 검사
          render={({ field }) => <Input {...field} />}
        />
        {errors.age?.type === "required" && (
          <span className="error">Age is required</span>
        )}
        {errors.age?.type === "min" && (
          <span className="error">Minimum Age is 17</span>
        )}
        {errors.age?.type === "max" && (
          <span className="error">Maximum Age is 40</span>
        )}
      </div>
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default ControlledComponent;
