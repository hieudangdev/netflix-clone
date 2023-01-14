import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import InputField from './FormController/InputField';

export default function FormSignUp() {
   const schema = yup
      .object({
         email: yup.string().email('Email must be a valid email').required('Email must be a valid email'),

         password: yup.string().min(8, 'Password must be at least 8 characters').required('Password must be at least 8 characters!!'),
      })
      .required();

   const form = useForm({
      defaultValues: {
         email: '',

         password: '',
      },
      resolver: yupResolver(schema),
   });

   const onSubmit = (data) => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
         .then((userCredential) => {
            updateProfile(auth.currentUser, {
               displayName: data.username,
            })
               .then(() => {
                  //signup success
                  form.reset();
                  toast.success('Sign In successful');
               })
               .catch((error) => {
                  toast.error(error);
               });

            //to do some things
            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/user-not-found') {
               toast.error('Not Found user');
            }
            if (errorCode === 'auth/wrong-password') {
               toast.error('Wrong password');
            }
            if (errorCode === 'auth/email-already-in-use') {
               toast.error('Email already in use');
            }
            toast.error(errorCode);
         });
   };

   return (
      <form onSubmit={form.handleSubmit(onSubmit)}>
         <div className='flex h-max flex-col items-center '>
            <InputField label='UserName' name='username' type='text' form={form} required />
            <InputField label='Email' name='email' required type='text' form={form} />
            <InputField label='Password' name='password' required type='password' form={form} />

            <Button className='mt-6 h-[46px] w-full border-0 bg-Red   text-white' variant='outlined' type='submit'>
               Sign Up
            </Button>
         </div>
      </form>
   );
}
