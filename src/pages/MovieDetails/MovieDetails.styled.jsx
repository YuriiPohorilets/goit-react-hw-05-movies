import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 14px;

  font-weight: 500;
  font-size: 18px;

  border-radius: 4px;

  border: none;
  color: var(--accent);
  background-color: var(--bg);
  box-shadow: var(--main-shadow);

  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover,
  :focus-visible {
    color: var(--bg);
    background-color: var(--accent);
  }

  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

export const AddInfo = styled(NavLink)`
  display: inline-block;
  padding: 8px 14px;

  font-weight: 500;
  font-size: 18px;

  border-radius: 4px;

  border: none;
  color: var(--accent);
  background-color: var(--bg);
  box-shadow: var(--main-shadow);

  transition: all 200ms ease-in-out;
  cursor: pointer;

  &.active {
    color: var(--bg);
    background-color: var(--accent);
    box-shadow: var(--main-shadow);
  }

  :hover,
  :focus-visible {
    color: var(--bg);
    background-color: var(--accent);
  }

  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;
