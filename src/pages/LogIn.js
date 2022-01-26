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
    <div className="flex h-screen bg-white">
      <div className="w-full max-w-sm m-auto bg-gray-200 rounded p-5">
        <header>
          <img alt="logo" className="w-20 mx-auto mb-4" src="https://img.icons8.com/fluency-systems-regular/96/99c22a/5-star-hotel.png" />
        </header>
        <form className="col mt-12" onSubmit={handleSubmit(onSubmit)}>
          <input className="w-full p-2 mb-6 border-b-2 bg-green outline-none focus:bg-gray-300" name="email" placeholder="Email" {...register('email', { required: true })} />
          <input className="w-full p-2 mb-6 border-b-2 bg-green outline-none focus:bg-gray-300" type="password" name="password" placeholder="Password" {...register('password', { required: true })} />
          <input
            className="w-full bg-green-button text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
            value="Log In"
          />
        </form>
        <small className="flex justify-center items-center">
          Don&apos;t have an account?
          <Link className="cursor-pointer bg-green px-2 text-sm" to="/users/signup">Sign Up</Link>
        </small>
      </div>
    </div>
  );
};

export default LogIn;
