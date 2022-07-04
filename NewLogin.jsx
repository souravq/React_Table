import React,{useState} from "react";
//import "./NewLogin.css";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function NewLogin(props) {


    const [logindata, SetLogindata] = useState({
        user_email: "",
        password: "",
      });
    
      //const [records, setRecords] = useState([]);
    
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        SetLogindata({ ...logindata, [name]: value });
      };
    
      const PostData= async (e)=>{
        e.preventDefault();
        const {user_email,password}=logindata;
        const res = await fetch("http://192.168.0.133/userauthservice/login",{
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            user_email,password
          })
        });
      
        const data =await res.json();
      
        if(res.status==417){
          toast.error("Username Doesn't Exist");
          //alert("Username Doesn't Exist");
        }else if(res.status==400){
          toast.error("Invalid Password");
          //alert("Invalid Password");
        }else{
          alert("Successfully Login");
          window.location.href="/searchtype";
        }
       
    
      }

  return (
    <div id="loginform">
        <h2 id="headerTitle">PAT DEL</h2>
      <h2 id="headerTitle">Login</h2>
      <form  method='POST'>
      <div className="row">
        <label>Useremail</label>
        <input type="text" name='user_email' value={logindata.user_email}
                onChange={handleInput} placeholder="Enter your Email" />
      </div>
      <div className="row">
        <label>Password</label>
        <input type="password" name='password' value={logindata.password}
                onChange={handleInput} placeholder="Enter your password" />
      </div>

      <div id="button" className="row">
        <button type='submit' onClick={PostData}>Log In</button>
      </div>
      </form>
      {/* <Form /> */}
      {/* <OtherMethods /> */}
    </div>
  );
}

// const FormHeader = props => (
//     <h2 id="headerTitle">{props.title}</h2>
// );

// const Form = props => (
//     <div>
//         <div class="row">
//             <label>Username</label>
//             <input type="text" placeholder="Enter your username"/>
//         </div>
//         <div class="row">
//             <label>Password</label>
//             <input type="password" placeholder="Enter your password"/>
//         </div>

//         <div id="button" class="row">
//             <button>Log In</button>
//         </div>
//     </div>
//  );

// const FormButton = props => (
//     <div id="button" class="row">
//       <button>{props.title}</button>
//     </div>
// );

// const FormInput = props => (
//     <div class="row">
//       <label>{props.description}</label>
//       <input type={props.type} placeholder={props.placeholder}/>
//     </div>
//   );

export default NewLogin;
