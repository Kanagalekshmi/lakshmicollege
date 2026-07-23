import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Paper, Typography } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const questions = [
  ["What programmes are available?", "Lakshmi College offers undergraduate programmes in Biotechnology, Computer Science, Civil, Electronics & Communication, Information Technology, and Mechanical Engineering."],
  ["How do I apply for admission?", "Select Apply Now from the navigation bar, complete the online application, and upload the requested documents. The admissions team will guide you through the next steps."],
  ["Which documents should I keep ready?", "Keep your academic records, a recent passport-size photo, identity details, and any documents requested in the online application ready before you start."],
  ["Can I save my application and continue later?", "Your entered application details are saved locally in this browser while you complete the form. Please submit the application when all information is ready."],
  ["How can I contact the college?", "Visit the Contact page to send an enquiry, or contact us at lakshmicollege@gmail.com or +91 8867543296."],
];

function Faq() {
  return (
    <>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: { xs: 6, md: 8 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>HELP CENTRE</Typography>
          <Typography variant="h3" sx={{ mt: 1 }}>Frequently Asked Questions</Typography>
          <Typography sx={{ mt: 1.5, opacity: 0.88 }}>Quick answers for prospective students and families.</Typography>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
        <Paper sx={{ overflow: "hidden" }}>
          {questions.map(([question, answer]) => (
            <Accordion key={question} disableGutters elevation={0} sx={{ "&:not(:last-child)": { borderBottom: "1px solid", borderColor: "divider" } }}>
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} sx={{ px: { xs: 2, md: 3 }, py: 1 }}>
                <Typography fontWeight={700}>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 3 }}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Container>
    </>
  );
}

export default Faq;
