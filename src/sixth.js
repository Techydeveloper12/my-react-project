import React, { useState } from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { TextField, Button } from "@mui/material"
import { ArrowRightAlt as ArrowRightAltIcon } from '@mui/icons-material';

const FAQAccordion = () => {
  const faqs = [
    { question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week' },
    { question: 'How much Netflix Cost?', answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.' },
    { question: 'Where can I watch ?', answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.' },
    { question: 'How do I cancel ?', answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.' },
    { question: 'What can I watch on netflix?', answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.' },
    { question: 'Is netflix good for kids ?', answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.' },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ backgroundColor: 'black', padding: '40px 20px' }}
    >
      <Typography variant="h4" align="center" color="white" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{ width: '100%', maxWidth: 600, mb: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <AccordionSummary
            expandIcon={expanded === `panel${index}` ? <CloseIcon sx={{color:"white"}} /> : <AddIcon sx={{color:"white"}} />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography color="white">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

<Grid container direction="column" alignItems="center" spacing={2}>
            
            
           
            <Grid item>
              <Typography variant="h5" align="center" color="white">
                Ready to watch? Enter your email to create or restart your membership.
              </Typography>
            </Grid>

          
          <Grid item container justifyContent="center">
            <TextField
              label="Enter your email"
              variant="outlined"
              sx={{
                width: { xs: 200, md: 500 },
                marginRight: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'red',
                  },
                  '&:hover fieldset': {
                    borderColor: 'red',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'red',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white',
                },
              }}
            />
            <Button
              variant="contained"
              color="inherit"
              sx={{
                bgcolor: 'red',
                color: "white",
                mt: { xs: 2, sm: 0 },
                '&:hover': {
                  backgroundColor: 'darkred', // Change this to any color you want on hover
                },
              }}
              endIcon={<ArrowRightAltIcon />}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
    </Grid>
  
         
        
    </div>
  );
};

export default FAQAccordion;
