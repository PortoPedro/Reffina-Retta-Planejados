import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import * as styled from "./FixedTopBar.styles";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function FixedTopBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navigate = useNavigate();

  const handleMobileMenuClick = () => {
    setIsDrawerOpen(true);
  };

  const handleContactClick = () => {
    setContactOpen(!contactOpen);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:alberto@reffina.com.br";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+5531999550808";
  };

  return (
    <styled.FixedTopBarContainer>
      <styled.DesktopContainer className="container">
        <div className="icon-text" onClick={handleEmailClick}>
          <FaEnvelope />
          <p>alberto@reffina.com.br</p>
        </div>
        <div className="icon-text" onClick={handlePhoneClick}>
          <FaPhone />
          <p>31 999550808</p>
        </div>
      </styled.DesktopContainer>
      <styled.MobileContainer>
        <div className="menu" onClick={handleMobileMenuClick}>
          <IoMdMenu />
        </div>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} transitionDuration={{ enter: 500, exit: 300 }}>
          <styled.DrawerContainer>
            <IconButton
              style={{ position: "absolute", top: 10, right: 10 }}
              onClick={() => setIsDrawerOpen(false)}
            >
              <IoMdClose />
            </IconButton>
            <List>
              <ListItem onClick={() => navigate('/home')}>
                <ListItemText primary="HOME" />
              </ListItem>
              <Divider />
              <ListItem onClick={() => navigate('/servicos')}>
                <ListItemText primary="SERVIÇOS" />
              </ListItem>
              <Divider />
              <ListItem onClick={handleContactClick}>
                <ListItemText primary="CONTATO" />
                {contactOpen ? <MdExpandLess /> : <MdExpandMore />}
              </ListItem>
              <Collapse in={contactOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem onClick={handlePhoneClick}>
                    <FaPhone style={{ marginRight: 8 }} />
                    <ListItemText primary="31 999550808" />
                  </ListItem>
                  <Divider />
                  <ListItem onClick={handleEmailClick}>
                    <FaEnvelope style={{ marginRight: 8 }} />
                    <ListItemText primary="alberto@reffina.com.br" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </styled.DrawerContainer>
        </Drawer>
      </styled.MobileContainer>
    </styled.FixedTopBarContainer>
  );
}

export default FixedTopBar;