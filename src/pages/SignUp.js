/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../redux/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img alt="logo" className="w-20 mx-auto mb-4" src="https://img.icons8.com/fluency-systems-regular/96/4c51bf/5-star-hotel.png" />
        </header>
        <form className="col" onSubmit={handleSubmit(onSubmit)} method="post">
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" name="name" placeholder="Name" {...register('name', { required: true })} />
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" name="email" placeholder="Email" {...register('email', { required: true })} />
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" name="password" type="password" placeholder="Password" {...register('password', { required: true })} />
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" name="password_confirmation" type="password" placeholder="Password Confirmation" {...register('password_confirmation', { required: true })} />
          <input className="w-full bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Sign Up" />
        </form>
        <Link className="cursor-pointer text-indigo-600 hover:text-indigo-800" to="/users/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
