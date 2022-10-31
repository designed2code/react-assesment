import { useState } from 'react';

export const useToggle = () => {
  const [expanded, setIsExpanded] = useState(false);
  const handleExpanded = () => {
    setIsExpanded(!expanded);
  };
  return [expanded, handleExpanded];
};
