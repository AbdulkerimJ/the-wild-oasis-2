import React from 'react';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';

const Account = () => {
  
  return (
    <div className='flex flex-col gap-2'>
      <UpdateUserDataForm />
      <UpdatePasswordForm />
    </div>
  );
};

export default Account;