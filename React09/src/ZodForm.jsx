import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import z from "zod";
function ZodForm() {

    const UserSchema = z.object({
        name: z.string().min(3, "Minimum length should be 3").max(20, "Maximum length should be 20"),
        age: z.coerce.number().min(10, "Minimum ahe should be 10").max(50, "Maximum age should be 50"),
        password: z.string().min(3, "Minimum length should be 3").max(20, "Maximum length should be 20"),
        email: z.string().email("Invalid email address"),
        confirmPassword: z.string().min(3, "Minimum length should be 3").max(20, "Maximum length should be 20")
    })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords don't match",
            path: ["confirmPassword"], // path of error
        });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(UserSchema)
    },
    );
    

    function onSubmit(data) {
        console.log(data)
        console.log("data")
    }
    console.log("render");


  return (
      <>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <label htmlFor="first">Name: </label>
                  <input {...register('name')} id="first" />
                  {errors.name && <span>Name can't be Empty</span>}
              </div>
              <div>
                  <label htmlFor="fifth">Email: </label>
                  <input {...register('email')} id="fifth" />
                  {errors.email && <span>Email can't be Empty</span>}
              </div>
              <div>
                  <label htmlFor="second">age: </label>
                  <input {...register('age')} id="second" />
                  {errors.age && errors.age.message}
              </div>
              <div>
                  <label htmlFor="third">Password: </label>
                  <input {...register('password')} id="third" />
                  {errors.password && <span>Password can't be Empty</span>}
              </div>
              <div>
                  <label htmlFor="sixth">Confirm Password: </label>
                  <input {...register('confirmPassword')} id="sixth" />
                  {errors.confirmPassword && <span>Passwords don't match</span>}
              </div>
              <button type='submit'>Submit </button>
          </form>
      </>
  )
}

export default ZodForm;