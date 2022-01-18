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
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
          <input className="input" name="email" placeholder="Email" {...register('email', { required: true })} />
          <input className="input" name="password" placeholder="Password" {...register('password', { required: true })} />
          <input className="input" type="submit" value="Log In" />
        </form>
        <Link to="/users/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LogIn;
