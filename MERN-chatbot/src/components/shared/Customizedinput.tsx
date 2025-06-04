import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  name: string;
  type: string;
  label: string;
};

const Customizedinput = (props: Props) => {
  return (
    <TextField
    margin='normal'
      name={props.name}
      label={props.label}
      type={props.type}
      slotProps={{
        // This is the new way to style the label
        inputLabel: {
          style: { color: 'white' },
        },
        input: {
            style: {color: 'white', 
                width: '400px',
                 borderRadius: '8px',
                 fontSize: '16px',
                 padding: '6px' },
        }
      }}
    />
  );
};

export default Customizedinput;
