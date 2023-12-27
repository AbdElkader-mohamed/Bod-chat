import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import {
  Timeline,
  TextMsg,
  ImgMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg
} from "./MsgTypes";
import { SimpleBarStyle } from "../Scrollbar";
const Message = () => {
  return (
    <SimpleBarStyle
      sx={{ display: "flex", height: "100%" }}
      timeout={500}
      clickOnTrack={false}
    >
      <Box className="conversation" p={3}>
        <Stack spacing={3}>
          {Chat_History.map((el) => {
            switch (el.type) {
              case "divider":
                return <Timeline el={el} />;
              case "msg":
                switch (el.subtype) {
                  case "img":
                    return <ImgMsg el={el} />;
                  case "doc":
                    return <DocMsg el={el} />;
                  case "link":
                    return <LinkMsg el={el} />;
                  case "reply":
                    return <ReplyMsg el={el} />;
                  default:
                    return <TextMsg el={el} />;
                }
            }
          })}
        </Stack>
      </Box>
    </SimpleBarStyle>
  );
};

export default Message;
