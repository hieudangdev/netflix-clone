import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   disabled: PropTypes.bool,
};
function InputField(props) {
   const { name, label, type, required, form } = props;
   const { errors } = form.formState;

   return (
      <Controller
         name={name}
         control={form.control}
         render={() => (
            <TextField
               label={label}
               sx={{ mt: 3, color: '#333' }}
               type={type}
               required={required}
               error={!!errors[name]}
               helperText={errors[name] ? errors[name].message : ''}
               {...form.register(name.toString())}
               fullWidth
            />
         )}
      />
   );
}

export default InputField;
