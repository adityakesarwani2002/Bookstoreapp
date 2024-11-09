import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
            
            <h3 className="font-bold text-lg">Login</h3>
            
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
            
            <div className="flex justify-around mt-4">
              <button type="submit" className="btn">Login</button>
              <p>Not registered? <Link to="/Signup" className="bg-slate-400 underline">Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
