/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/auth';

const LogIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img alt="logo" className="w-20 mx-auto mb-4" src="https://img.icons8.com/fluency-systems-regular/96/4c51bf/5-star-hotel.png" />
        </header>
        <form className="col mt-12" onSubmit={handleSubmit(onSubmit)}>
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" name="email" placeholder="Email" {...register('email', { required: true })} />
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" placeholder="Password" {...register('password', { required: true })} />
          <input
            className="w-full bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
            value="Log In"
          />
        </form>
        <Link className="cursor-pointer text-indigo-600 hover:text-indigo-800" to="/users/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LogIn;
