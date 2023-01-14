import { Tab, Tabs } from '@mui/material';
import FormSignIn from 'Componets/Form/FormSignIn';
import { useState } from 'react';
import FormSignUp from 'Componets/Form/FormSignUp';

const handleSubmit = (values) => console.log(values);

function Accounts() {
   const [value, setValue] = useState('in');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   window.scrollTo(0, 0);

   return (
      <div className='flex min-h-screen w-full items-center justify-center '>
         <div className=' mt-[100px]  w-[400px] rounded-lg bg-white p-4'>
            <Tabs
               sx={{
                  color: '#F90321',
                  '.MuiTabs-indicator': {
                     backgroundColor: '#F90321',
                  },
                  '.Mui-selected': {
                     color: '#F90321 !important',
                  },
               }}
               value={value}
               onChange={handleChange}
               aria-label='secondary tabs example'
            >
               <Tab value='in' label='Sign In' />
               <Tab value='up' label='Sign Up' />
            </Tabs>
            {value === 'in' && <FormSignIn onSubmit={handleSubmit} />}
            {value === 'up' && <FormSignUp onSubmit={handleSubmit} />}
         </div>
      </div>
   );
}

Accounts.propTypes = {};

export default Accounts;
