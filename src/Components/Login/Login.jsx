import axios from "axios";
import React, { useState } from "react";

const Login = () => {
    const [user,setUser]=useState({
       email:"emilys",
       password:"emilyspass"
    })
    const handleInput=(e)=>{
        
        const {name,value}=e.target;

        setUser({...user,[name]:value})
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
     

      try {

        const {data}=await axios({
        method:"POST",
        url:"https://dummyjson.com/auth/login",
        data:{
       
    username: user.email,
    password: user.password
        }
      })
  
        console.log(data);
      } catch (error) {
        console.log(error.response.data)
      }
    }
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-blue-100">
        <div className="bg-white rounded-lg p-8 w-96 shadow-lg ">
          <h1 className="text-2xl p-4 font-semibold text-slate-800"> Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
              <label className="text-slate-600 font-semibold">
               <h1>{JSON.stringify(user)}f</h1>
                UserName:{" "}
              </label>
              <input
                className="p-2 border border-slate-500 rounded "
                type="text"
                placeholder="user@user.com"
                name="email"
                value={user.email}
                onChange={handleInput}
                required
              />
              <label className="text-slate-600 font-semibold mt-1">
                {" "}
                Password:{" "}
              </label>
              <input
                className="p-2 border border-slate-500 rounded"
                type="password"
                placeholder="test"
                name="password"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>

            <div className="flex justify-between items-center mt-1">
              <div
                className="flex gap-x-2 items-center"
              >
                <input disabled={(user.email.length&&user.password.length)==0} type="checkbox" name="remember" />
                <label> Remember me</label>
              </div>

              <button className="bg-indigo-500 px-6 py-2 text-white font-semibold">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
