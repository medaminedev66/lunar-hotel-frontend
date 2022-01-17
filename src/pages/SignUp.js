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
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit(onSubmit)} method="post">
          <input className="input" name="name" placeholder="Name" {...register('name', { required: true })} />
          <input className="input" name="email" placeholder="Email" {...register('email', { required: true })} />
          <input className="input" name="password" placeholder="Password" {...register('password', { required: true })} />
          <input className="input" name="password_confirmation" placeholder="Password Confirmation" {...register('password_confirmation', { required: true })} />
          <input className="input" type="submit" value="Sign Up" />
        </form>
        <Link className="login-link" to="/users/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
