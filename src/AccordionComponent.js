import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AccordionComponent.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import data from './data/celebrities.json';
import { calculateAge } from './utils/calculateAge';
import ImageComponent from './components/ImageComponent';
import LabelTextComponent from './components/LabelTextComponent';
import TextareaAutosize from '@mui/material/TextareaAutosize';
export default function AccordionComponent() {
  const [expanded, setExpanded] = useState(false);
  const [users, setUsers] = useState(data);
  const [isClicked, setIsClicked] = useState(false);
  const [textAreaText, setTextAreaText] = useState('');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleDelete = (userId) => {
    const filteredUsers = users.filter(
      (user) => parseInt(user.id) !== parseInt(userId)
    );
    setUsers(filteredUsers);
  };
  const handleEdit = (userId) => {
    setIsClicked(true);
    console.log();
  };
  const handleFormInputChange = (e) => {
    setTextAreaText(e.target.value);
  };
  return (
    <div>
      {/* <ModalComponent /> */}
      {users.map((user) => (
        <Accordion
          expanded={expanded === user.id}
          onChange={handleChange(user.id)}
          key={user.id}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              <ImageComponent src={user.picture} alt="profile-picture" />
            </Typography>

            <LabelTextComponent sx={{ color: 'red' }}>
              {user.first}
            </LabelTextComponent>
          </AccordionSummary>
          <AccordionDetails>
            <div className="accordion-subHeader">
              <Typography>Age {calculateAge(user.dob)}</Typography>
              <Typography>Gender {user.gender}</Typography>
              <Typography>Country {user.country}</Typography>
            </div>
            <div className="accordion-description">
              {isClicked ? (
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  value={user.description}
                  style={{ width: 200 }}
                  onChange={handleFormInputChange}
                />
              ) : (
                <Typography>Description {user.description}</Typography>
              )}
            </div>
            <div className="accordion-icons">
              <EditIcon onClick={handleEdit} />
              <DeleteIcon onClick={() => handleDelete(user.id)} />
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
