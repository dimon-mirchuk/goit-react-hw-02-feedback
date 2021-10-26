import PropTypes from "prop-types";
import styless from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={styless.section}>
      <h1 className={styless.section - title}>{title}</h1>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: "",
  children: [],
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
