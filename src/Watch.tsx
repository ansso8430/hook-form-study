import React from "react";
import { useForm } from "react-hook-form";

export function Watch() {
  const { register, watch } = useForm();

  const watchNickname = watch("nickname", "xiaoxi");

  return (
    <form>
      <input type="text" placeholder="Nick Name" {...register("nickname")} />
      <p>{watchNickname}</p>
    </form>
  );
}
