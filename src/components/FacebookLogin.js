import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from 'react-router-dom';
import "../App.css";


function FacebookLoginComponent() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  let navigate = useNavigate();


  const responseFacebook = (response) => {
    console.log(response);
    // Login failed
    if (response.status === "unknown") {
      alert("Login failed!");
      setLogin(false);
      return false;
    }
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
      navigate('dashboard');
      
    } else {
      setLogin(false);
    }
  };
  const logout = () => {
    setLogin(false);
    setData({});
    setPicture("");
  };

  return (
    <div className="container">
      {!login && (
        <FacebookLogin
          appId="327200342848306"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
        />
      )}

      {login && (
        <div className="card">
          <div className="card-body">
            <img className="rounded" src={picture} alt="Profile" />
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">Email ID: {data.email}</p>
            <button className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FacebookLoginComponent;