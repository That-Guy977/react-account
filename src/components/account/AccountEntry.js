import PropTypes from 'prop-types';

function AccountEntry({ title, income = null, expense = null, total }) {
  return (
    <tr>
      <td className="account-title">{title}</td>
      <td className="account-entry" style={{ backgroundColor: income ? "lightgreen" : "inherit" }}>{income}</td>
      <td className="account-entry" style={{ backgroundColor: expense ? "lightcoral" : "inherit" }}>{expense}</td>
      <td className="account-entry" style={{ backgroundColor: "lightskyblue" }}>{total}</td>
    </tr>
  );
}

AccountEntry.propTypes = {
  title: PropTypes.string.isRequired,
  income: PropTypes.number,
  expense: PropTypes.number,
  total: PropTypes.number.isRequired,
};

export default AccountEntry;
