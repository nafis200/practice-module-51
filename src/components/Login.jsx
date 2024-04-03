import { Link } from "react-router-dom";
import { AuthContext } from "./providers/Authprovider";
import { useContext } from "react";



const Login = () => {

   const {signInUser} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value 
        const password = e.target.password.value
        console.log(email,password);
        signInUser(email,password)
        .then(result =>{
           console.log(result.user);
        })
        .catch(error => {
           console.log(error.message);
        })
      }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"
          className="input input-bordered" 
          name = "email"
          required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" 
          name = "password"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>New here? <Link to="/register"> <button className="btn btn-link">Register</button> </Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;