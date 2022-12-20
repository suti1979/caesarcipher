import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { apiCall } from "../lib/api"
import { Inputs, TCodeProps } from "../type/types"

export default function Form({ setCode }: TCodeProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await toast.promise(apiCall(data), {
      pending: "Coding...",
      success: "Got it 👌",
      error: "Oh my... error. 🤯",
    })
    // const response = await apiCall(data)
    // if (response.error) {
    //   console.log(response.error)
    //   return
    // }

    setCode(response)
    reset()
  }

  return (
    <form
      className="flex w-full flex-col items-center "
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="str" className="uppercase">
        Secret
      </label>
      <input
        id="str"
        placeholder="your secret thing"
        {...register("str", { required: true })}
        type="text"
        className="w-4/5 overflow-ellipsis rounded-3xl border-4 border-indigo-500 bg-indigo-900 
                   p-3 text-center text-lg text-yellow-50 outline-none transition-all
                   focus:w-full focus:bg-indigo-800 active:bg-indigo-800
                 dark:border-gray-500 dark:bg-gray-300 dark:text-gray-800"
      />

      {errors.str && (
        <span className=" pt-1 text-sm text-red-500 ">
          This field is required!
        </span>
      )}
      <label htmlFor="cipher" className="mt-6 uppercase">
        Cipher
      </label>
      <input
        id="cipher"
        placeholder="cipher number"
        {...register("cipher", { required: true, min: -100000, max: 100000 })}
        type="number"
        className="w-4/5 overflow-ellipsis rounded-3xl border-4 border-indigo-500 bg-indigo-900 
                   p-3 text-center text-lg text-yellow-50 outline-none transition-all
                   focus:w-full focus:bg-indigo-800 active:bg-indigo-800
                 dark:border-gray-500 dark:bg-gray-300 dark:text-gray-800"
      />
      {errors.cipher && (
        <span className=" text-sm text-red-400 ">
          Cipher is required and must be a number! between -100000 and 100000)
        </span>
      )}

      <button
        className="mt-12 w-4/5 rounded-3xl border-4 border-indigo-500 p-3 outline-none
                 hover:bg-indigo-800 hover:shadow-2xl focus:border-indigo-300
                 dark:border-gray-500 dark:hover:bg-gray-400"
      >
        Code it!
      </button>
    </form>
  )
}
