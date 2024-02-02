function Title() {
  return (
    <h1 className="cell" style={{ padding: 20 }}>
      บัญชีรายรับรายจ่าย {new Date().toLocaleDateString("th", { day: "2-digit", month: "2-digit", year: "numeric" })}
    </h1>
  );
}

export default Title;
