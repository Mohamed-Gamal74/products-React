import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import login from "../../assests/login.webp";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // after submit will console data and navigate to products page
  // set the state of login to true
  // the register button will disapper and the login will be logout
  // will show the cart icon
  const submitHandler = (data) => {
    console.table(data);
    dispatch(LoginAction());
    navigate("/products");
  };

  return (
    <div className="d-flex align-items-center justify-content-center container" >
      <img src={login} alt="login" className="w-50" />
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="container  d-flex align-items-center flex-column"
      >
        <div className="form-group w-75">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors?.email?.type === "required" && (
            <span className="text-danger">Email is required</span>
          )}
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group w-75 ">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control "
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors?.password?.type === "required" && (
            <span className="text-danger">password is required</span>
          )}
          {errors?.password?.type === "minLength" && (
            <span className="text-danger">min Length is 8</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-75">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
