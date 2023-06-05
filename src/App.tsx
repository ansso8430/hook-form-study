import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface Form {
  age: number;
}

export function App() {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<Form>();
  const [result, setResult] = useState("");

  const onSubmit = (data: Form) => {
    setResult(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="age"
        {...register("age", { required: true, min: 17, max: 40 })}
      />
      {errors.age?.type === "required" && <span>Age is required</span>}
      {errors.age?.type === "min" && <span>Minimum age is 17</span>}
      {errors.age?.type === "max" && <span>Maximum age is 40</span>}
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}
