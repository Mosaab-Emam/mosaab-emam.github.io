import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo icon="" name="Mosaab Emam" />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/Mosaab-Emam">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/EmamMosaab">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
