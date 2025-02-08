import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Login() {
     const [obj,setObj]=useState({
            uid:"",
            pwd:"",
        })
        const [darkMode, setDarkMode] = useState(false);

        function doUpdate(event){
            // alert(event.target.value);
            var uid=event.target.uid;
            var pwd=event.target.pwd;
             setObj({...obj,[uid]:pwd})
            //  alert(JSON.stringify({obj}));
            
        }
        // async function doCheck() {
        //     const url = `http://localhost:2005/checkUser?uid=${obj.uid}&pwd=${obj.pwd}`;
        //     let resp= await axios.get(url);
        //     //alert(JSON.stringify(resp.data));
        //     if(resp.data.status==true)
        //         alert(resp.data.msg);
        //     else if(resp.data=="undefined")
        //     {
        //       alert("Invalid user");
        //     }
        // }

        async function doCheck() {
            const url = `http://localhost:2004/checkUser?uid=${obj.uid}&pwd=${obj.pwd}`;
            try {
                let resp = await axios.get(url);
        
                // Check if the response is valid
                if (resp && resp.data) {
                    if (resp.data.status === true) {
                        alert(resp.data.msg);
                    } else {
                        alert("Invalid user or incorrect password");
                    }
                } else {
                    alert("User not found");
                }
            } catch (error) {
                console.error("Error during login:", error);
                alert("An error occurred while trying to log in. Please try again later.");
            }
        }
        
  return (
    <div>
         <div>
       <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5">
      <div className=" flex flex-col items-end justify-start  overflow-hidden mb-2 xl:max-w-3xl w-full">
        <div className="flex">
          <h3 className="text-white">Dark Mode : &nbsp;</h3>
          <label class="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              readOnly
            />
            <div
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            ></div>
          </label>
        </div>
      </div>
      <div
        className={`xl:max-w-3xl ${
          darkMode ? "bg-black" : "bg-white"
        }  w-full p-5 sm:p-10 rounded-md`}
      >
        <h1
          className={`text-center text-xl sm:text-3xl font-semibold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Login Here
        </h1>
        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            <div className=" gap-3">
              <input
              name="uid"
              onChange={doUpdate}
                className={`w-full px-5 py-3 mb-4 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                }`}
                type="text"
                placeholder="Enter Email"
              />
              <input
              name="pwd"
              onChange={doUpdate}
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                }`}
                type="text"
                placeholder="Password"
              />
            </div>
           
            <button onClick={doCheck} className="mt-5 tracking-wide font-semibold bg-[#a8dadc] text-gray-100 w-full py-4 rounded-lg hover:bg-[#24595b]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-3">Register</span>
            </button>
            {/* <p className="mt-6 text-xs text-gray-600 text-center">
              Already have an account?{" "}
              <a href="">
                <span className="text-[#E9522C] font-semibold">Login</span>
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login