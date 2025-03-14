"use client";
import { createCamp } from "@/utils/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
const SubmitButton = () => {
    const { pending} = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
        {pending ? "loading..." : "Submit"}
      </button>
    );
};



const Form = () => {
    const [message,formAction] = useActionState(createCamp,null)
  return (
    <>
    {message && <h1>{message}</h1>}
    <form action={formAction}>
        Form
      <input 
      placeholder="Camp Name"
      name="title"
      className="border"
      defaultValue="first camp"
        />
        <input
        placeholder="location"
        name="location"
        className="border"
        defaultValue="last camp"
        />
        <SubmitButton />
    </form>
    </>
  )
}

export default Form
