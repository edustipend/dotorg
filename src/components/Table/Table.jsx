import MobileTable from './internals/MobileTable';
import DesktopTable from './internals/DesktopTable';
import styles from './Table.module.css';
import PropTypes from 'prop-types';

export const Table = ({ entries, tableHead }) => {
  return (
    <>
      <section className={styles.mobileTable}>
        <MobileTable entries={entries} tableHead={tableHead} />
      </section>
      <section className={styles.desktopTable}>
        <DesktopTable entries={entries} tableHead={tableHead} />
      </section>
    </>
  );
};

Table.propTypes = {
  entries: PropTypes.array,
  tableHead: PropTypes.array
};
Table.defaultProps = {
  entries: [],
  tableHead: []
};
