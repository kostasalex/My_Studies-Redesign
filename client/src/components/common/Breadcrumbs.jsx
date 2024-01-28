import { useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { FaHome, FaUser, FaGraduationCap } from "react-icons/fa"; // Εισαγωγή εικονιδίων από FontAwesome

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">
        <FaHome /> Home
      </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Ορίστε εικονίδιο ανάλογα με το όνομα του path
        const icon = name === "user" ? <FaUser /> : <FaGraduationCap />;

        return isLast ? (
          <Breadcrumb.Item active key={name}>
            {icon} {name}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={name} href={routeTo}>
            {icon} {name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
