import React from 'react'
import { useForm } from "react-hook-form"
function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {

        console.log(data)
    }
    console.log("render");
  return (
      <>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <label htmlFor="first">Name: </label>
                  <input {...register('name', { required: true })} id="first" />
                  {errors.name && <span>Name can't be Empty</span>}
          </div>
          <div>
          <label htmlFor="second">age: </label>
                  <input {...register('age',
                      {
                          min: {
                              value: 10,
                              message:"Minimum age should be 10"
                          },
                          max:{
                              value: 60,
                              message: "Maxixmum age should be 60"
                          }
                      }
                  )} id="second" />
                 {errors.age && errors.age.message}
          </div>
          <div>
          <label htmlFor="third">Password: </label>
              <input {...register('password')} id="third" />
              </div>
              <button type='submit'>Submit </button>
          </form>
      </>
  )
}

export default Form