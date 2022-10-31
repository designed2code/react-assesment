import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchInputComponent({ handleSearchInputText }) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl fullWidth sx={{ m: 1 }}>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={handleSearchInputText}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            label="Amount"
          />
        </FormControl>
      </div>
    </Box>
  );
}
