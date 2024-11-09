import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <div>
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          
            <h3 className="font-bold text-lg">Create new account</h3>
            
            <div className="mt-4 space-y-2">
              <span>Enter your name</span>
              <br />
              <input
                type="text"
                placeholder="write your name"
                className="wt-80 px-3 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="write your email"
                className="wt-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="write your password"
                className="wt-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            
            <div className="mt-4 space-y-2">
              <span>Confirm Password</span>
              <br />
              <input
                type="password"
                placeholder="confirm password"
                className="wt-80 px-3 border rounded-md outline-none"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && <span>This field is required</span>}
            </div>
            
            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-pink-500 text-white rounded-md pt-2 pb-2 ps-2">
                Sign up
              </button>
              <p>
                <Link to="../" className="bg-slate-400 underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
