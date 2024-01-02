import React, {useEffect, useReducer, useState} from 'react';

import AuthGlobal from './AuthGlobal';

const Auth = props => {
  const [user, setUser] = useState(null);

  return (
    <AuthGlobal.Provider
      value={{
        user,
        setUser
      }}>
      {props.children}
    </AuthGlobal.Provider>
  );
};

export default Auth;
