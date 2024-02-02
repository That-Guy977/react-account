import PropTypes from 'prop-types';
import AccountEntry from "./AccountEntry";

function ExpenseEntry({ title, amount, total = null }) {
  return (
    <AccountEntry title={title} expense={amount} total={total} />
  );
}

ExpenseEntry.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  total: PropTypes.number,
};

export default ExpenseEntry;
