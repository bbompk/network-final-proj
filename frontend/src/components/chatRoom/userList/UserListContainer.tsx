import { avatars_url } from "../../../data/Avatar";
import { useSocket } from "../../SocketProvider"
import { UserInterface } from "../../../interfaces/UserInterface";
import { useUser } from "../../UserProvider";
import { styled } from "@mui/material/styles";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

const UserListContainerWrapper = styled('div')(({ theme }) => ({
  height: "100%",
  width: "20%",
  minWidth: "15rem",
  maxWidth: "20rem",
  padding: "14px 9px",
  backgroundColor: "#F3F4F6",
  flex: "1 1 auto",
  overflowY: "auto",
}));

export function UserListContainer() {
  const { users, checkDm, socket } = useSocket();
  const { room } = useUser();
  const handleClick = (user: UserInterface) => {
    if(checkDm && user.id && user.id !== socket?.id && user.id !== room){
      checkDm(user.id);
    }
  }
  return (
    <UserListContainerWrapper>
      <Typography variant="subtitle1" sx={{ fontSize: 14, fontWeight: 600, paddingLeft: 1 }}>
        ONLINE - {users?.length}
      </Typography>
      <List sx={{ paddingTop:1 }}>
        {users?.map((user, idx) => (
          <ListItem key={idx} button onClick={() => handleClick(user)} disablePadding sx={{ borderRadius: '10px', '&:hover': { backgroundColor: '#E5E7EB' } }}>
            <ListItemAvatar sx={{padding: 1}}>
              <Avatar alt="avatar" src={avatars_url[user.avatar ?? 0]} sx={{ width: 40, height: 40 }} />
            </ListItemAvatar>
            <ListItemText primary={user.name} primaryTypographyProps={{ sx: { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" } }} />
          </ListItem>
        ))}
      </List>
    </UserListContainerWrapper>
  );
}