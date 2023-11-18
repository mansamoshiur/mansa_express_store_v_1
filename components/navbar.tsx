"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { IoIosArrowDown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import Container from "./ui/container";
import NaveItems from "./nave-items";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

const menuRoutes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const drawerWidth = 200;
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4 px-4 md:px-6">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <div
                  {...bindTrigger(popupState)}
                  className="flex py-2 px-6 rounded-lg cursor-pointer gap-3 items-center justify-center bg-slate-100"
                >
                  Categories <IoIosArrowDown />
                </div>
                <Menu
                  PaperProps={{
                    style: {
                      margin: "4px 0px 0px 0px",
                      width: "16ch",
                    },
                  }}
                  {...bindMenu(popupState)}
                >
                  {menuRoutes.map((route) => (
                    <Link href={route.href} key={route.href}>
                      <MenuItem onClick={popupState.close}>
                        {route.label}
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <div>
            <div className="hidden md:flex gap-6 text-lg font-semibold ">
              {menuRoutes.map((route) => (
                <NaveItems
                  key={route.href}
                  href={route.href}
                  label={route.label}
                />
              ))}
            </div>
            <div className="md:hidden">
              <MdMenu
                onClick={() => setOpenDrawer(!openDrawer)}
                size={28}
                className="text-[#e94560]"
              />
              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                  },
                }}
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <List>
                  {menuRoutes.map((route, index) => (
                    <ListItemButton key={index}>
                      <ListItemText>
                        <Link href={route.href}>{route.label}</Link>
                      </ListItemText>
                    </ListItemButton>
                  ))}
                </List>
              </Drawer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
