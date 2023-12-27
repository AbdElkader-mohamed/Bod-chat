import styled from "@emotion/styled";
import { Avatar, Badge, Divider, Stack, Typography } from "@mui/material";
import { CircleDashed } from "phosphor-react";
import { Archive, Search } from "react-bootstrap-icons";
import { ChatList } from "../../data";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import { SimpleBarStyle } from "../../components/Scrollbar";
import "simplebar-react/dist/simplebar.min.css";
import StyledBadge from "../../components/setting/StyledBadge";
const NumBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#5B96F7",
    position: "relative",
    top: "50%",
    right: "50%",
    transform: "translate(50%, -50%)"
  }
}));

const ChatElement = ({ id, img, name, msg, time, unread, pinned, online }) => {
  return (
    <div className="chat">
      <div className="chat__wrapper">
        <div className="chat__user">
          {online ? (
            <StyledBadge
              variant="dot"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <div className="chat__user__wrapper">
            <Typography className="chat__user__name" variant="subtitle">
              {name}
            </Typography>
            <Typography variant="caption" className="chat__user__sliceMessage">
              {msg}
            </Typography>
          </div>
        </div>
        <Stack spacing={2} alignItems="center">
          <Typography variant="caption">{time}</Typography>
          {unread !== 0 ? (
            <NumBadge className="not" color="primary" badgeContent={unread} />
          ) : null}
        </Stack>
      </div>
    </div>
  );
};

ChatElement.PropTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  name: PropTypes.string,
  msg: PropTypes.string,
  time: PropTypes.string,
  unread: PropTypes.number,
  pinned: PropTypes.bool,
  online: PropTypes.bool
};
function Chats() {
  return (
    <aside className="aside chats">
      <div className="chats__header">
        <h5 className="aside__title">Chats</h5>
        <button className="my-status">
          <CircleDashed size={30} />
        </button>
      </div>
      <div className="chats__search">
        <div className="form-group">
          <input
            type="search"
            id="chats-search"
            placeholder="Search..."
            className="form-control"
          />
          <Search className="search-btn" />
        </div>
      </div>
      <div className="chats__archive">
        <div className="chats__archive__wrapper">
          <Archive />
          <button className="btn">Archive</button>
        </div>
        <Divider />
      </div>
      <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
        <SimpleBarStyle
          sx={{ display: "flex", height: "100%" }}
          timeout={500}
          clickOnTrack={false}
        >
          <div className="chats__body">
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((chat) => chat.pinned).map((user) => {
              return <ChatElement key={user.id} {...user} />;
            })}
          </div>
          <div className="chats__body">
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((chat) => !chat.pinned).map((user) => {
              return <ChatElement key={user.id} {...user} />;
            })}
          </div>
        </SimpleBarStyle>
      </Stack>
    </aside>
  );
}

export default Chats;
