import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from './FormController/InputField';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';

const schema = yup
   .object({
      email: yup.string().email().required('Vui lòng kiểm tra lại Email !!'),
      password: yup.string().min(8).required('Mật khẩu tối thiểu phải 8 kí tự !!'),
   })
   .required();

export default function FormSignIn() {
   const navigation = useNavigate();
   const form = useForm({
      defaultValues: {
         email: '',
         password: '',
      },
      resolver: yupResolver(schema),
   });
   const onSubmit = async (data) => {
      signInWithEmailAndPassword(auth, data.email, data.password)
         .then((userCredential) => {
            // Signed in
            toast.success('Sign In successful');
            //to do some things
            navigation('/');
         })
         .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode === 'auth/user-not-found') {
               toast.error('Not Found user');
            }
            if (errorCode === 'auth/wrong-password') {
               toast.error('Wrong password');
            }
         });
   };

   return (
      <form onSubmit={form.handleSubmit(onSubmit)}>
         <div className='flex flex-col items-center '>
            <InputField label='Email' type='text' name='email' form={form} />
            <InputField label='Password' type='password' autoComplete='current-password' id='outlined-password-input' name='password' form={form} />
            <Button className='mt-6 w-full border-0 bg-Red ' variant='contained' type='submit'>
               Sign In
            </Button>
         </div>
      </form>
   );
}
