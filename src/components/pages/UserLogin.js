import React, { useState } from 'react';
import styles from '../styles/UserLogin.module.scss';
import Button from '../ui/Button';

const UserLogin = () => {
  const [userType, setUserType] = useState('new-user')
  const handleUser = (userType) => {
    setUserType(userType)
  }

  const {
    outerWrapper,
    sideBar,
    login,
    contentWrapper,
    header,
    buttonWrapper,
    existingUser,
  } = styles;

  return (
    <div className={outerWrapper}>
      <div className={sideBar}>
      </div>
      <div className={login}>
        <div className={contentWrapper}>
          <div>
            <h1 className={header}>FITNESS <br /> TRACKER</h1>
          </div>
          <div className={buttonWrapper}>

            <Button
              active={userType === 'new-user' ? 'active' : ''} 
              onClick={()=>{handleUser('new-user')}}>
              New User
            </Button>

            <Button 
              active={userType === 'existing-user' ? 'active' : ''} 
              onClick={()=>{handleUser('existing-user')}}>
              Existing User
            </Button>
              {userType === 'existing-user' && (
                <input className={existingUser} type='text' autoFocus placeholder='Enter Email Address'></input>
              )}
            <Button actionButton='actionButton'>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin;