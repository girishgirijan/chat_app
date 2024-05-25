import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Fullname"
              className="w-full input input-bordered h-11"
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full input input-bordered h-11"
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full input input-bordered h-11"
            />
          </div>
          <div>
            <label htmlFor="confirmpassword" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-11"
            />
          </div>
          <div className="mt-5">
            <GenderCheckbox />
          </div>
          <div>
            <button className="btn btn-primary text-white btn-block btn-md mt-4">
              Signup
            </button>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}
