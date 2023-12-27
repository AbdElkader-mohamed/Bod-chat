/* eslint-disable react/prop-types */
import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography
} from "@mui/material";
import { DownloadSimple, Image } from "phosphor-react";

// to render the Doc message
function DocMsg({ el }) {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = el.message;
    link.href = el.href;
    link.click();
  };
  return (
    <Stack
      className="message"
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        borderRadius={1.2}
        width={"max-content"}
        className={el.incoming ? "outgoingMsg" : "incomingMsg"}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            alignItems="center"
            borderRadius={1}
            direction="row"
            className="primary-main-color"
          >
            <Image size={48} />
            <Typography variant="caption"> Abstract.png </Typography>
            <IconButton onClick={onDownload}>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography variant="body2" className="message-description">
            {" "}
            {el.message}{" "}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
// to render the link message
function LinkMsg({ el }) {
  return (
    <Stack
      className="message"
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        borderRadius={1.2}
        width={"max-content"}
        className={el.incoming ? "outgoingMsg" : "incomingMsg"}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            borderRadius={1.2}
            alignItems="center"
            direction="column"
            className="primary-main-color"
          >
            <img
              src={el.preview}
              alt={el.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle2">Abd Elkader Profile</Typography>
              <Typography variant="subtitle2" component={Link} to={el.link}>
                {el.link}
              </Typography>
            </Stack>
            <Typography variant="body2">{el.message}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
// to render the reply message
function ReplyMsg({ el }) {
  return (
    <Stack
      className="message"
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        px={0.5}
        pt={0.5}
        pb={1.5}
        borderRadius={1.2}
        width={"max-content"}
        className={el.incoming ? "outgoingMsg" : "incomingMsg"}
      >
        <Stack spacing={1}>
          <Stack
            p={2}
            direction="column"
            spacing={2}
            borderRadius={1.2}
            alignItems="center"
            className={el.incoming ? "incomingMsg" : "outgoingMsg"}
          >
            <Typography className="message-description" variant="body2">
              {el.message}
            </Typography>
          </Stack>
          <Typography variant="body2" className="message-description">
            {el.reply}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

// to render the img message
function ImgMsg({ el }) {
  return (
    <Stack
      className="message"
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        px={!el.message.length == 0 ? 0.5 : null}
        pt={!el.message.length == 0 ? 0.5 : null}
        pb={!el.message.length == 0 ? 1.5 : null}
        borderRadius="16px"
        width={"max-content"}
        className={el.incoming ? "outgoingMsg" : "incomingMsg"}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 210, borderRadius: 16 }}
          />
          {!el.message.length == 0 && (
            <Typography px={2} variant="body2" className="message-description">
              {el.message}
            </Typography>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}

// to render the text message
function TextMsg({ el }) {
  return (
    <Stack
      className="message"
      direction={"row"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        borderRadius={1.2}
        width={"max-content"}
        className={el.incoming ? "outgoingMsg" : "incomingMsg"}
      >
        <Typography variant="body2" className="message-description">
          {el.message}
        </Typography>
      </Box>
    </Stack>
  );
}

// to render the status of day message
function Timeline({ el }) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width="46%" />
      <Typography variant="caption">{el.text}</Typography>
      <Divider width="46%" />
    </Stack>
  );
}

export { Timeline, TextMsg, ImgMsg, ReplyMsg, LinkMsg, DocMsg };
