import IncomeEntry from "./IncomeEntry";
import ExpenseEntry from "./ExpenseEntry";
import TotalEntry from "./TotalEntry";

function AccountTable({ children }) {
  const entries = [];
  let runningTotal = 0;
  let totalIncome = 0;
  let totalExpense = 0;
  const entryProps = {
    get total() { return runningTotal; },
    get key() { return entries.length; },
  };
  for (const child of children) {
    const EntryComponent = child.type;
    const { amount } = child.props;
    if (EntryComponent === IncomeEntry) {
      runningTotal += amount;
      totalIncome += amount;
    } else if (EntryComponent === ExpenseEntry) {
      runningTotal -= amount;
      totalExpense += amount;
    }
    entries.push(<EntryComponent {...child.props} {...entryProps} />)
  }

  const amountColStyle = { width: 80 };
  return (
    <table className="cell">
      <colgroup>
        <col style={{ width: 150 }} />
        <col style={amountColStyle} />
        <col style={amountColStyle} />
        <col style={amountColStyle} />
      </colgroup>
      <thead>
        <tr>
          <th>รายการ</th>
          <th>รายรับ</th>
          <th>รายจ่าย</th>
          <th>รวม</th>
        </tr>
      </thead>
      <tbody>
        {entries}
        <tr>
          <td colspan="4">
            <hr />
          </td>
        </tr>
        <TotalEntry income={totalIncome} expense={totalExpense} {...entryProps} />
      </tbody>
    </table>
  );
}

export default AccountTable;
