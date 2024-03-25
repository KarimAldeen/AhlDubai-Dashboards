import React, { useEffect } from 'react'
import LoginForm from './LoginForm';
import { LoginBg } from '../../Layout/app/Const';
import useAuthState from '../../lib/state mangment/AuthState';
import { useNavigate } from 'react-router-dom';
import { BaseURL_IMAGE } from '../../api/config';
import { useGetHomeSetting } from '../../api/setting';
const Auth = () => {

  const { isAuthenticated } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [])
    const {data} = useGetHomeSetting()


  return (
    <div className='Auth' style={{ background: `url(${LoginBg})` }}>
      <div className='In_Auth'>
        <div className="Left_Col">
          <img className='Logo' src={BaseURL_IMAGE+data?.logo} alt="Logo" />

        </div>
        <div className=" Right_Col ">
          <LoginForm />
        </div>
      </div>

    </div>
  )
}

export default Auth