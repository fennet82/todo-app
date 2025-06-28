/// <reference types="vite-plugin-svgr/client" />

import { useState } from 'react';
import {
  IconHome2,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Center, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import  Logo from "../../assets/logo.svg?react";
import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  to?: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const Navbar = ({ navProps }: { navProps: NavbarLinkProps[] }) => {
  const [active, setActive] = useState(0);

  const links = navProps.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => (
        setActive(index)
      )}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <Logo className={classes.logo}/>
      </Center>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}

export default Navbar;
export type { NavbarLinkProps };