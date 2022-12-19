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
      className="flex flex-col w-full items-center "
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
        className="p-3 border-4 border-indigo-500 text-indigo-900 w-6/12 
                rounded-3xl active:bg-indigo-100 focus:bg-indigo-100 focus:w-full 
                outline-none transition-all text-center text-lg overflow-ellipsis"
      />

      {errors.str && (
        <span className=" text-red-400 text-sm ">This field is required!</span>
      )}
      <label htmlFor="cipher" className="uppercase mt-6">
        Cipher
      </label>
      <input
        id="cipher"
        placeholder="cipher number"
        {...register("cipher", { required: true, min: -1000, max: 1000 })}
        type="number"
        className="p-3 border-4 border-indigo-500 text-indigo-900 w-6/12 
                rounded-3xl active:bg-indigo-100 focus:bg-indigo-100 focus:w-full 
                outline-none transition-all text-center text-lg overflow-ellipsis"
      />
      {errors.cipher && (
        <span className=" text-red-400 text-sm ">
          Cipher is required and must be a number! between -1000 and 1000)
        </span>
      )}

      <button
        className="p-3 border-4 rounded-3xl mt-12 border-indigo-500 w-6/12
              hover:shadow-2xl hover:bg-indigo-600 outline-none focus:border-indigo-300"
      >
        Code it!
      </button>
    </form>
  )
}
