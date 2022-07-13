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
      </ul>
    </MenuHamburg>
  );
}
