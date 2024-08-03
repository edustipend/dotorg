import PropTypes from 'prop-types';

const TableHead = ({ title, className }) => {
  return <th className={className}>{title}</th>;
};

export default TableHead;

TableHead.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};
