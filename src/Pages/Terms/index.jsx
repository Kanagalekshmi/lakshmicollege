import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

const terms = [
  ["Website use", "This website is intended to provide information about Lakshmi College and its academic services. Please use it lawfully and do not attempt to disrupt, misuse, or access restricted areas."],
  ["Admissions and applications", "Submitting an application does not guarantee admission. All applications are subject to eligibility requirements, document verification, applicable regulations, and the college admission process."],
  ["Accuracy of information", "We aim to keep website information current, but programmes, fees, schedules, policies, and availability may change. Please confirm important details with the college before making decisions."],
  ["Intellectual property", "The website content, branding, and visual materials belong to Lakshmi College or their respective owners. They may not be reused without appropriate permission."],
];

function Terms() {
  return (
    <>
      <Box sx={{ bgcolor: "primary.main", color: "white", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ letterSpacing: 2, opacity: 0.8 }}>LAKSHMI COLLEGE</Typography>
          <Typography variant="h3" sx={{ mt: 1 }}>Terms & Conditions</Typography>
          <Typography sx={{ mt: 1.5, opacity: 0.88 }}>Guidelines for using our website and services.</Typography>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
        <Paper sx={{ p: { xs: 3, md: 5 } }}>
          <Typography color="text.secondary" sx={{ mb: 4 }}>Last updated: July 2026</Typography>
          {terms.map(([title, text]) => (
            <Box key={title} sx={{ mb: 3.5 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{text}</Typography>
            </Box>
          ))}
          <Typography color="text.secondary">By using this website, you agree to these terms. For clarification, please contact the college administration.</Typography>
        </Paper>
      </Container>
    </>
  );
}

export default Terms;
