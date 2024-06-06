import PropTypes from 'prop-types';

const TableHead = ({ title }) => {
  return <th>{title}</th>;
};

export default TableHead;

TableHead.propTypes = {
  title: PropTypes.string
};
