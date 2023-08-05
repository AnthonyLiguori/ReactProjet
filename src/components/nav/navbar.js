import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import "./nav.css"
const Navbar = () => {
  return (
    <header>
      <h1>Anthony.LGR</h1>
      <nav>
        <ul>
          <CustomLink to="/">Accueil</CustomLink>
          <CustomLink to="/projet">Mes projets</CustomLink>
          <CustomLink to="/cv">Mon CV</CustomLink>
        </ul>
        <CustomLink to="/contact">Contact</CustomLink>
      </nav>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "selected" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;
