import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import {
  ChatBubbleOutlineRounded,
  CloseRounded,
  SendRounded,
  SmartToyRounded,
} from "@mui/icons-material";

import College from "../../Assets/Images/college.avif";
import Faculty from "../../Assets/Images/Faculty.png";
import Infrastructure from "../../Assets/Images/infrastructure.png";
import Placement from "../../Assets/Images/placement.png";

import Biotech from "../../Assets/Images/Biotech.png";
import CSE from "../../Assets/Images/cse.png";
import Civil from "../../Assets/Images/civil.png";
import ECE from "../../Assets/Images/ece.png";
import IT from "../../Assets/Images/it.png";
import Mech from "../../Assets/Images/mech.png";
import courses from "../../data/courses";

const suggestedQuestions = [
  "What courses do you offer?",
  "How can I apply?",
  "Tell me about placements",
];

const getAssistantReply = (question) => {
  const text = question.toLowerCase();

  if (text.includes("course") || text.includes("program")) {
    return "We offer Biotechnology, Computer Science, Civil, Electronics & Communication, Information Technology, and Mechanical Engineering programmes.";
  }
  if (text.includes("apply") || text.includes("admission")) {
    return "You can begin your application through the Apply Now button in the navigation bar. Our admissions team will guide you through the next steps.";
  }
  if (text.includes("placement") || text.includes("career")) {
    return "Our placement support team helps students prepare for opportunities through training, guidance, and industry connections.";
  }
  if (text.includes("contact") || text.includes("phone") || text.includes("email")) {
    return "You can reach our team from the Contact page. We would be happy to help with your question.";
  }

  return "Thanks for your question! I can help with courses, admissions, placements, and contacting Lakshmi College.";
};

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I’m Lakshmi College’s virtual assistant. How can I help you today?",
    },
  ]);

  const sendMessage = (text = message) => {
    const trimmedMessage = text.trim();
    if (!trimmedMessage) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { sender: "user", text: trimmedMessage },
      { sender: "bot", text: getAssistantReply(trimmedMessage) },
    ]);
    setMessage("");
  };

  return (
    <>
      {/* Hero Section */}

      <Box sx={{ position: "relative", minHeight: { xs: 440, md: 520 }, overflow: "hidden" }}>

        <img
          src={College}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            minHeight: "inherit",
            objectFit: "cover",
          }}
        />

        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(5,25,44,0.82) 0%, rgba(5,25,44,0.48) 53%, rgba(5,25,44,0.08) 100%)" }} />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: 24, sm: "8%", lg: "12%" },
            transform: "translateY(-50%)",
            color: "white",
            maxWidth: { xs: "calc(100% - 48px)", sm: 560 },
          }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: "2.3rem", sm: "3.4rem" }, textShadow: "0 4px 18px rgba(0,0,0,0.3)" }}>
            Empowering Minds,
            <br />
            Shaping Futures
          </Typography>

          <Typography mt={2} sx={{ fontSize: { xs: "1rem", sm: "1.12rem" }, lineHeight: 1.75, opacity: 0.95 }}>
            Lakshmi College aims to provide quality education,
            innovative knowledge and a nurturing environment
            for future leaders.
          </Typography>
        </Box>
      </Box>

      {/* Features */}

      <Container sx={{ py: { xs: 5, md: 7 } }}>

        <Grid container spacing={4}>

          <Grid size={{ xs: 12, md: 4 }}>

            <Card sx={{ p: 3, height: "100%", textAlign: "center", transition: "0.2s ease", "&:hover": { transform: "translateY(-4px)" } }}>
              <img src={Faculty} width="80" alt="" />

              <Typography mt={2} variant="h6">
                Experienced Faculty
              </Typography>
            </Card>

          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>

            <Card sx={{ p: 3, height: "100%", textAlign: "center", transition: "0.2s ease", "&:hover": { transform: "translateY(-4px)" } }}>
              <img src={Infrastructure} width="80" alt="" />

              <Typography mt={2} variant="h6">
                Modern Infrastructure
              </Typography>
            </Card>

          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>

            <Card sx={{ p: 3, height: "100%", textAlign: "center", transition: "0.2s ease", "&:hover": { transform: "translateY(-4px)" } }}>
              <img src={Placement} width="80" alt="" />

              <Typography mt={2} variant="h6">
                Placement Support
              </Typography>
            </Card>

          </Grid>

        </Grid>

      </Container>

      {/* Courses */}

      <Box sx={{ bgcolor: "#f0f5fa", py: { xs: 5, md: 7 } }}>
      <Container>

        <Typography variant="h4" mb={1} textAlign="center">
          Courses Offered
        </Typography>
        <Typography color="text.secondary" textAlign="center" sx={{ mb: 4 }}>Explore programmes designed for tomorrow's engineers.</Typography>

        <Grid container spacing={4}>

          {courses.map((course, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
            >
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>

                <CardMedia
                  component="img"
                  image={course.image}
                  height="250"
                />

                <CardContent
                  sx={{
                    background: "#294766",
                    color: "white",
                    textAlign: "center",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ minHeight: 60 }}
                  >
                    {course.title}
                  </Typography>

                  <Button
                    component={Link}
                    to={`/courses/${course.id}`}
                    variant="outlined"
                    sx={{
                      color: "white",
                      borderColor: "white",
                      mt: 2,
                    }}
                  >
                    More
                  </Button>

                </CardContent>

              </Card>
            </Grid>
          ))}

        </Grid>

      </Container>
      </Box>

      <Box
        sx={{
          position: "fixed",
          right: { xs: 16, sm: 28 },
          bottom: { xs: 16, sm: 28 },
          zIndex: 1300,
        }}
      >
        {isChatOpen && (
          <Paper
            elevation={12}
            sx={{
              width: { xs: "calc(100vw - 32px)", sm: 360 },
              mb: 1.5,
              overflow: "hidden",
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1.5,
                color: "white",
                bgcolor: "#0A2947",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <SmartToyRounded />
                <Box>
                  <Typography fontWeight={700}>College Assistant</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    Typically replies instantly
                  </Typography>
                </Box>
              </Box>
              <IconButton
                aria-label="Close chat"
                onClick={() => setIsChatOpen(false)}
                sx={{ color: "white" }}
              >
                <CloseRounded />
              </IconButton>
            </Box>

            <Box
              sx={{
                height: 280,
                p: 2,
                overflowY: "auto",
                bgcolor: "#f6f8fb",
                display: "flex",
                flexDirection: "column",
                gap: 1.25,
              }}
            >
              {messages.map((chatMessage, index) => (
                <Box
                  key={`${chatMessage.sender}-${index}`}
                  sx={{
                    alignSelf: chatMessage.sender === "user" ? "flex-end" : "flex-start",
                    maxWidth: "84%",
                    px: 1.5,
                    py: 1,
                    borderRadius: 2,
                    bgcolor: chatMessage.sender === "user" ? "#0A2947" : "white",
                    color: chatMessage.sender === "user" ? "white" : "#23384d",
                    boxShadow: chatMessage.sender === "user" ? "none" : "0 1px 5px rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography variant="body2">{chatMessage.text}</Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ px: 2, pt: 1.25, display: "flex", gap: 0.75, flexWrap: "wrap" }}>
              {suggestedQuestions.map((question) => (
                <Button
                  key={question}
                  size="small"
                  variant="outlined"
                  onClick={() => sendMessage(question)}
                  sx={{ textTransform: "none", fontSize: "0.7rem", borderColor: "#b7c8d8", color: "#0A2947" }}
                >
                  {question}
                </Button>
              ))}
            </Box>

            <Box
              component="form"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              sx={{ display: "flex", gap: 1, p: 2 }}
            >
              <TextField
                fullWidth
                size="small"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask a question..."
                inputProps={{ "aria-label": "Chat message" }}
              />
              <IconButton
                type="submit"
                aria-label="Send message"
                disabled={!message.trim()}
                sx={{ bgcolor: "#FFC107", color: "#0A2947", "&:hover": { bgcolor: "#ffb300" } }}
              >
                <SendRounded fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        )}

        <Button
          variant="contained"
          startIcon={isChatOpen ? <CloseRounded /> : <ChatBubbleOutlineRounded />}
          onClick={() => setIsChatOpen((open) => !open)}
          sx={{
            borderRadius: 8,
            px: 2.25,
            py: 1.25,
            textTransform: "none",
            fontWeight: 700,
            bgcolor: "#0A2947",
            boxShadow: "0 8px 22px rgba(10,41,71,0.3)",
            "&:hover": { bgcolor: "#143e62" },
          }}
        >
          {isChatOpen ? "Close" : "Chat with us"}
        </Button>
      </Box>
    </>
  );
}

export default Home;
