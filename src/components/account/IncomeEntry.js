import PropTypes from 'prop-types';
import AccountEntry from "./AccountEntry";

function IncomeEntry({ title, amount, total = null }) {
  return (
    <AccountEntry title={title} income={amount} total={total} />
  );
}

IncomeEntry.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  total: PropTypes.number,
};

export default IncomeEntry;
