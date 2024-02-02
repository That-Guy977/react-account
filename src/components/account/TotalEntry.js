import PropTypes from 'prop-types';
import AccountEntry from "./AccountEntry";

function TotalEntry({ income, expense, total }) {
  return (
    <AccountEntry title="รวมยอด" income={income} expense={expense} total={total} />
  );
}

TotalEntry.propTypes = {
  income: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default TotalEntry;
