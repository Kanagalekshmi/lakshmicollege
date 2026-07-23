import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <AppRoute />
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
