import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BreadCrumbs.module.css';

export const BreadCrumbs = ({ paths }) => {
  return (
    <div className={styles.breadcrumbs}>
      {paths.map((item, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          <NavLink to={item.path} className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
            {item.title}
          </NavLink>
          {index < paths.length - 1 && <span className={styles.separator}>/</span>}
        </span>
      ))}
    </div>
  );
};

BreadCrumbs.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};
