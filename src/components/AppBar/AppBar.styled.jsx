import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 30px 0;
  max-width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavItemLink = styled(NavLink)`
  display: block;
  padding: 8px 14px;

  font-weight: 700;
  font-size: 22px;

  border-radius: 4px;

  transition: all 200ms ease-in-out;

  &.active {
    color: var(--bg);
    background-color: var(--accent);
    box-shadow: var(--main-shadow);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--accent);
  }

  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;
