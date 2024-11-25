import { Container, Typography, TextField, InputAdornment, IconButton, Box } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { List, ListItem, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
function Help_center() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Search value:', searchValue);
    // Add your search logic here
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
        <Box>
          <Typography variant="h6" sx={{ mt: 5 }}>Hello User_Name_8415! How can we help you today?</Typography>
          <TextField
            id="search-bar"
            placeholder="Search for help"
            type="search"
            fullWidth
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            sx={{
              borderRadius: '50px',
              border: '1px solid #ccc',
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" >
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment >
              ),
              sx: {
                padding: '2px',
                fontSize: '16px',
                fontWeight: 'bold',

                borderRadius: '50px',
              },
            }}
          />
        </Box>
      </Container>


      <Container maxWidth="lg" sx={{ display: 'block', justifyContent: 'center', alignItems: 'center', width: '50%', margin: '0 auto' }}>
        <Typography variant='h6' sx={{ ml: 3, mb: 3 }}>
          Top Queries
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What is the purpose of this help center?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This help center is designed to provide you with quick and easy access to information and resources that can help you with your queries.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>How do I reset my password?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To reset your password, click on the "Forgot Password" link on the login page and follow the instructions to reset your password.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>What are the system requirements for this application?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The system requirements for this application are listed on our website. Please visit our website for more information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography>How do I contact the support team?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can contact our support team by clicking on the "Contact Us" link on our website or by sending an email to our support email address.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
        ml: 10,
        mr: 3,
        borderRadius: 10,
        borderRadius: 10,
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'

      }}>

        <Box sx={{


          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Box>

            <Typography variant="h4" component="div">
              Connect to TV with this App
            </Typography>
            <Typography variant="body1" component="div">
              To connect to your TV, follow these steps:
              <List>
                <ListItem>
                  <ListItemText primary="Make sure your TV and device are connected to the same Wi-Fi network." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Open the app and select your TV from the list of available devices." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Enter the code displayed on your TV to complete the connection." />
                </ListItem>
              </List>
              <Button variant="contained" sx={{ mt: 2, mb: 2, ml: 2 }}>Connect to TV</Button>
            </Typography>
          </Box>
          <Box sx={{
            width: '50%',
            padding: 5,

          }}>
            <img src="https://www.spaceotechnologies.com/wp-content/uploads/2021/03/Smart-TV-Remote-App.png" alt="" height="400px" />
          </Box>
        </Box>

      </Box>
      <Container maxWidth="lg" sx={{ display: 'block', justifyContent: 'center', alignItems: 'center', width: '50%', margin: '0 auto' }}>
  <Typography variant='h6' sx={{ ml: 3, mb: 3 }}>
    Frequently Asked Questions
  </Typography>

  <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDownwardIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography>What is the purpose of this help center?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        This help center is designed to provide you with quick and easy access to information and resources that can help you with your queries.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <Typography>How do I reset my password?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        To reset your password, click on the "Forgot Password" link on the login page and follow the instructions to reset your password.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDownwardIcon />}
      aria-controls="panel3-content"
      id="panel3-header"
    >
      <Typography>What are the system requirements for this application?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        The system requirements for this application are listed on our website. Please visit our website for more information.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel4-content"
      id="panel4-header"
    >
      <Typography>How do I contact the support team?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        You can contact our support team by clicking on the "Contact Us" link on our website or by sending an email to our support email address.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDownwardIcon />}
      aria-controls="panel5-content"
      id="panel5-header"
    >
      <Typography>How do I update my account information?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        To update your account information, click on the "My Account" link on the top right corner of the page and follow the instructions to update your information.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel6-content"
      id="panel6-header"
    >
      <Typography>What are the payment options available?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        We accept various payment options, including credit cards, debit cards, and online payment services. Please visit our website for more information.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Container>
    </>
  )
}

export default Help_center