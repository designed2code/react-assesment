import { Typography } from '@mui/material';
const LabelTextComponent = ({ children, props }) => {
  return (
    <>
      <Typography {...props}>{children}</Typography>
    </>
  );
};
export default LabelTextComponent;
