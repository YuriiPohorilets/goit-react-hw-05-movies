import { Header, Nav, NavItemLink, NavList, Container } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <NavList>
            {navItems.map(({ href, text }) => (
              <li key={href}>
                <NavItemLink to={href}>{text}</NavItemLink>
              </li>
            ))}
          </NavList>
        </Nav>
      </Container>
    </Header>
  );
};
