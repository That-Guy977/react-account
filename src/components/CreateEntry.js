import { useState } from "react";

function CreateEntry({ handleCreateEntry }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [titleError, setTitleError] = useState("");
  const [amountError, setAmountError] = useState("");
  const numberRegex = /^[+-]?\d*(?:\.\d{0,2})?$/;
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setTitleError("");
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    if (event.target.value.match(numberRegex)) {
      setAmountError("");
    } else {
      setAmountError("กรุณากรอกเป็นจำนวน");
    }
  };
  const handleCreate = (event) => {
    event.preventDefault();
    if (title && amount && amount.match(numberRegex)) {
      handleCreateEntry({ title, amount: Number(amount) });
      alert("เพิ่มรายการสำเร้จ");
      setTitle("");
      setAmount("");
    } else {
      if (!title) setTitleError("กรุณากรอกชื่อรายการ");
      if (!amount) setAmountError("กรุณากรอกจำนวนเงิน");
      else if (!amount.match(numberRegex)) setAmountError("กรุณากรอกเป็นจำนวน");
    }
  };
  return (
    <div className="cell" style={{ height: "fit-content" }}>
      <div style={{ margin: 0, fontWeight: "bold" }}>รายการใหม่</div>
      <form>
        <label htmlFor="entry-title">ชื่อรายการ</label>
        <input id="entry-title" type="text" value={title} onChange={handleTitleChange} placeholder="ชื่อรายการ" />
        <div className="entry-error">{titleError}</div>
        <label htmlFor="entry-amount">จำนวนเงิน</label>
        <input id="entry-amount" type="text" value={amount} onChange={handleAmountChange} placeholder="จำนวนเงิน" />
        <div className="entry-error">{amountError}</div>
        <button class="entry-create" onClick={handleCreate}>เพื่มรายการ</button>
      </form>
    </div>
  );
}

export default CreateEntry;
