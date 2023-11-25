import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import './App.css';
import './index.css';

function App() {
  return (
   <div className="app">
    <div className="container">
   
   <div className="head">
        <p><FaTwitter className="twittericon"/></p>
        <h1 className="heading">Sign in to Twitter</h1>
   </div>
   <div>
       <button><FcGoogle className="googleicon"/>Sign in with Google</button>
   </div>

   <div>
        <button><FaApple className="appleicon"/>Sign in with Apple</button>
   </div>
   <div className="hrtag">
      <hr className="hrleft"></hr>
      <p className="hrcontent">Or</p>
      <hr className="hrright"></hr>
   </div>
    
   <form>
        <input type="text" placeholder="Phone email or username" />
        <button>Next</button>
    </form>

  <button>Forget password?</button>


  <p className="signup">
        Don't Have an account?<a href="https://goo">Sign up</a>
  </p>

    </div>
   </div>
  );
}

export default App;
