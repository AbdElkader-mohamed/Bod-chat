import { Box, Stack } from "@mui/material";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";

function GeneralApp() {
  return (
    <Stack direction={"row"}>
      <Chats />

      <Box
        className="conversation"
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)"
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
}

export default GeneralApp;
