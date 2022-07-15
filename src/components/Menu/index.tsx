import { MenuHamburg } from "./styled";

export function Menu() {
  return (
    <MenuHamburg className="menu">
      <ul>
        <li>
          <a href="home">
            <p>All Categories</p>
          </a>
        </li>
        <li>
          <a href="home">
            <p>Outdors</p>
          </a>
        </li>
        <li>
          <a href="home">
            <p>Indors</p>
          </a>
        </li>
        <li>
          <a href="home">
            <p>Water</p>
          </a>
        </li>
        <li>
          <a href="home">
            <p>Kids</p>
          </a>
        </li>
        <li>
          <a href="home">
            <p>Women</p>
          </a>
        </li>
        <li>
          <a href="home">
            <p>Men</p>
          </a>
        </li>
      </ul>
    </MenuHamburg>
  );
}
