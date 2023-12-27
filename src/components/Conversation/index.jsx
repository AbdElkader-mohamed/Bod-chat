import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />
      {/* Chat Body */}
      <Box sx={{ flexGrow: "1" }} width={"100%"}>
        <Message />
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
