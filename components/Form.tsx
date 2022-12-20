import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
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
    const result = await apiCall(data)
    setCode(result)
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
        className="w-6/12 overflow-ellipsis rounded-3xl border-4 border-indigo-500 bg-indigo-900 
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
        {...register("cipher", { required: true, min: -1000, max: 1000 })}
        type="number"
        className="w-6/12 overflow-ellipsis rounded-3xl border-4 border-indigo-500 bg-indigo-900 
                   p-3 text-center text-lg text-yellow-50 outline-none transition-all
                   focus:w-full focus:bg-indigo-800 active:bg-indigo-800
                 dark:border-gray-500 dark:bg-gray-300 dark:text-gray-800"
      />
      {errors.cipher && (
        <span className=" text-sm text-red-400 ">
          Cipher is required and must be a number! between -1000 and 1000)
        </span>
      )}

      <button
        className="mt-12 w-6/12 rounded-3xl border-4 border-indigo-500 p-3 outline-none
                 hover:bg-indigo-800 hover:shadow-2xl focus:border-indigo-300
                 dark:border-gray-500 dark:hover:bg-gray-400"
      >
        Code it!
      </button>
    </form>
  )
}
