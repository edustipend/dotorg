import Table1 from './internals/Table1';
import Table2 from './internals/Table2';
import styles from './Table.module.css'
import PropTypes from 'prop-types';

export const Table = ({ entries, tableHead }) => {
  return (
    <>
      <section className={styles.table1}>
        <Table1 entries={entries} tableHead={tableHead} />
      </section>
      <section className={styles.table2}>
        <Table2 entries={entries} tableHead={tableHead} />
      </section>
    </>
  )
};

Table.propTypes = {
  entries: PropTypes.array,
  tableHead: PropTypes.array
};
Table.defaultProps = {
  entries: [],
  tableHead: []
};
