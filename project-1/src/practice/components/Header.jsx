export default function Header() {
  return (
    <header className="flex-container">
      <img className="logo" src="../src/assets/react.svg" alt="ReactLogo" />
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-list-item"> Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
