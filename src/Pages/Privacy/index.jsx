import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

const sections = [
  ["Information we collect", "We collect information you choose to submit through admission, contact, and account forms, such as your name, contact details, academic information, and uploaded application documents."],
  ["How we use information", "Your information is used to process enquiries and applications, provide student services, communicate important updates, and improve our website experience."],
  ["Protecting your information", "We use reasonable administrative and technical measures to protect information submitted through this website. Access is limited to authorised college personnel and service providers where needed."],
  ["Your choices", "You may contact the college to request an update to the personal information you have submitted or to ask questions about how it is used."],
];

function Privacy() {
  return (
    <>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>LAKSHMI COLLEGE</Typography>
          <Typography variant="h3" sx={{ mt: 1 }}>Privacy Policy</Typography>
          <Typography sx={{ mt: 1.5, opacity: 0.88 }}>How we handle the information you share with us.</Typography>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
        <Paper sx={{ p: { xs: 3, md: 5 } }}>
          <Typography color="text.secondary" sx={{ mb: 4 }}>Last updated: July 2026</Typography>
          {sections.map(([title, text]) => (
            <Box key={title} sx={{ mb: 3.5 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{text}</Typography>
            </Box>
          ))}
          <Typography variant="h5" sx={{ mb: 1 }}>Contact us</Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>For privacy-related questions, please contact Lakshmi College at lakshmicollege@gmail.com.</Typography>
        </Paper>
      </Container>
    </>
  );
}

export default Privacy;
