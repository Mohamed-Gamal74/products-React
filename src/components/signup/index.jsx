import CreatableSelect from "react-select/creatable";
import "./signup.css";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/auth";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "Egypt", label: "Egypt" },
  { value: "USA", label: "USA" },
  { value: "Germany", label: "Germany" },
  { value: "Nederland", label: "Nederland" },
];

const SignUp = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  const submitHandler = (data) => {
    console.table(data);
    dispatch(LoginAction());
    navigate("/products");
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="container d-flex align-items-center flex-column register__form"
    >
      <div className="form-group w-50  mb-3">
        <label className="text-light" htmlFor="exampleInputName1">
          First Name
        </label>
        <input
          type="text"
          className="form-control "
          id="exampleInputName1"
          aria-describedby="nameHelp"
          placeholder="Mohamed"
          {...register("fName", { required: true })}
        />
        {errors?.fName?.type === "required" && (
          <span className="text-danger">first name is required</span>
        )}
      </div>
      <div className="form-group w-50 mb-3">
        <label className="text-light" htmlFor="exampleInputName2">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName2"
          aria-describedby="nameHelp"
          placeholder="Gamal"
          {...register("lName", { required: true })}
        />
        {errors?.lName?.type === "required" && (
          <span className="text-danger">Last name is required</span>
        )}
      </div>

      <div className="form-group w-50 mb-3">
        <label className="text-light" htmlFor="exampleInputName3">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputName3"
          aria-describedby="nameHelp"
          placeholder="m@gmail.com"
          {...register("email", { required: true })}
        />
        {errors?.email?.type === "required" && (
          <span className="text-danger">email is required</span>
        )}
      </div>

      <div className="form-group w-50 mb-3">
        <label className="text-light" htmlFor="exampleInputName4">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputName4"
          aria-describedby="passwordHelp"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors?.password?.type === "required" && (
          <span className="text-danger">password is required</span>
        )}
        {errors?.password?.type === "minLength" && (
          <span className="text-danger">min Length is 8</span>
        )}
      </div>

      <div className="form-group w-50 mb-3">
        <label className="text-light" htmlFor="exampleInputName5">
          confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputName5"
          aria-describedby="passwordHelp"
          {...register("confirmPassword", {
            required: true,
            validate: (val) => {
              if (watch("password") !== val) {
                return "Your password don't match";
              }
            },
          })}
        />
        {errors?.confirmPassword?.type === "required" && (
          <span className="text-danger">confirm Password is required</span>
        )}
        {errors?.confirmPassword?.type === "validate" && (
          <span className="text-danger">
            {errors?.confirmPassword?.message}
          </span>
        )}
      </div>

      <div className="form-group w-50 mb-3 mb-5">
        <label className="text-light" htmlFor="exampleInputName5">
          your country
        </label>
        <Controller
          {...register("select", { required: true })}
          name="select"
          control={control}
          render={({ field }) => (
            <CreatableSelect className="select" {...field} options={options} />
          )}
        />

        {errors?.select?.type === "required" && (
          <span className="text-danger">select country is required</span>
        )}
      </div>

      <div className="form-group d-flex align-items-center">
        <div className="item__container">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            {...register("checkBox", { required: true })}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            accept all terms
          </label>

          {errors?.checkBox?.type === "required" && (
            <p className="text-danger check ">checkBox is required</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUp;
