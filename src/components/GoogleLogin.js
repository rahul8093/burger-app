
import React from 'react';

import { GoogleLogin } from 'react-google-login';

import { useNavigate } from 'react-router-dom';
// refresh token
import { refreshTokenSetup } from './RefreshToken';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

  export const Login=()=>{
    let navigate = useNavigate();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
   // alert(
      // `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
    navigate('dashboard');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={false}
      />
    </div>
  );
}

