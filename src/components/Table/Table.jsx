import MobileTable from './internals/MobileTable';
import DesktopTable from './internals/DesktopTable';
import styles from './Table.module.css';
import PropTypes from 'prop-types';

export const Table = ({ entries, tableHead, oneClickApply }) => {
  return (
    <>
      <section className={styles.mobileTable}>
        <MobileTable entries={entries} tableHead={tableHead} oneClickApply={oneClickApply} />
      </section>
      <section className={styles.desktopTable}>
        <DesktopTable entries={entries} tableHead={tableHead} oneClickApply={oneClickApply} />
      </section>
    </>
  );
};

Table.propTypes = {
  entries: PropTypes.array,
  tableHead: PropTypes.array,
  oneClickApply: PropTypes.func
};
Table.defaultProps = {
  entries: [],
  tableHead: []
};
