import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  styled
} from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";

const StyledInput = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    padding: "12px"
  }
}));

const Footer = () => {
  return (
    <Box className="chatFooter" p={2} width={"100%"}>
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <StyledInput
          fullWidth
          placeholder="Write a message..."
          variant="filled"
          InputProps={{
            disableUnderLine: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Box
          className="chatFooter__Send-btn"
          sx={{ width: 48, height: 48, borderRadius: 1.3 }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt className="not" color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
