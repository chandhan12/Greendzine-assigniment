import { useRef, useState } from 'react';
import loginpic from '../assets/Rectangle 26@2x.png';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../assets/goog.svg';
import AppleIcon from '../assets/icons8-apple-logo.svg';

export default function Signup() {
  const [passwordMsg, setPasswordMsg] = useState(false);
  const[passLength,setPassLength]=useState(false)
  const emailRef = useRef();
  const UserNameRef = useRef();
  const numberRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const Register = (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const userName = UserNameRef.current.value.trim();
    const number = numberRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!email || !userName || !number || !password || !confirmPassword) {
        alert("Please fill all the fields");
        return; 
      }

      if (password.length < 6 && confirmPassword.length < 6) {
        setPassLength(true);
        return;
      }
      
    if (password !== confirmPassword) {
      setPasswordMsg(true);
      return
    } else {
      setPasswordMsg(false);
      localStorage.setItem('email', email);
      localStorage.setItem('userName', userName);
      localStorage.setItem('number', number);
      localStorage.setItem('password', password);
      alert('User registered successfully');
      navigate('/');
    }
  };

  return (
    <>
      <div className="ml-6 mt-3">
        <h1 className="font-semibold">Your Logo</h1>
      </div>
      <div className="flex gap-2 h-screen w-full justify-center items-center">
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-8 md:mt-28 mb-4 md:mb-2 ml-20 md:ml-2">
            <div className="mr-5">
              <h1 className="text-4xl font-bold mb-3 text-slate-950">Sign Up to</h1>
              <h2 className="text-2xl font-semibold mb-3 text-slate-950">Lorem ipsum is simply</h2>
            </div>
            <div>
              <p className="text-lg text-slate-700">If you already have an account</p>
              <p className="text-lg text-slate-700">
                You can{' '}
                <span className="text-blue-600 hover:underline">
                  <Link to={'/'}>Login here !</Link>
                </span>
              </p>
            </div>
          </div>
          <div className="translate-y-44 hidden md:block">
            <img className="h-96" src={loginpic} alt="" />
          </div>
          <div>
            <form
              className="flex flex-col gap-4 ml-20 md:ml-32"
              onSubmit={Register}
              noValidate
            >
              <h1 className="font-semibold text-2xl">Sign up</h1>

              <input
                type="email"
                required
                ref={emailRef}
                minLength={5}
                className="bg-slate-100 p-1 pl-4 w-72 h-11 rounded-md text-black placeholder-slate-400"
                placeholder="Enter Email"
              />
              <input
                ref={UserNameRef}
                required
                minLength={3}
                type="text"
                className="bg-slate-100 p-1 pl-4 w-72 h-11 rounded-md text-black placeholder-slate-400"
                placeholder="Create UserName"
              />
              <input
                ref={numberRef}
                type="tel"
                required
                pattern="\d{10}"
                minLength={10}
                maxLength={10}
                className="bg-slate-100 p-1 pl-4 w-72 h-11 rounded-md text-black placeholder-slate-400"
                placeholder="Contact Number"
              />
              <input
                ref={passwordRef}
                required
                type="password"
                minLength={6}
                className="bg-slate-100 p-1 pl-4 w-72 h-11 rounded-md text-black placeholder-slate-400"
                placeholder="Password"
              />
              <input
                ref={confirmPasswordRef}
                required
                type="password"
                minLength={6}
                className="bg-slate-100 p-1 pl-4 w-72 h-11 rounded-md text-black placeholder-slate-400"
                placeholder="Confirm Password"
              />
              {passwordMsg && (
                <p className="text-red-600">Password and confirm password do not match</p>
              )}
              {passLength && (
                <p className="text-red-600">Password must be atleast 6 characters</p>
              )}
              <button
                type="submit"
                className="p-1 bg-blue-500 rounded-md h-11 w-72 text-white"
              >
                Register
              </button>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col p-4">
                  <p className="text-slate-600 font-semibold text-base">or continue with</p>
                  <div className="flex gap-4 mt-5 ml-5">
                    <div className="bg-slate-400">
                      <img
                        className="h-6 w-6 bg-white hover:cursor-pointer"
                        src={AppleIcon}
                        alt=""
                      />
                    </div>
                    <img
                      className="h-6 w-6 hover:cursor-pointer"
                      src={GoogleIcon}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
