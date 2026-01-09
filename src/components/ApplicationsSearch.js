export const ApplicationsSearch = ({ applications }) => {
  return (
    <div className="ms-auto">
      <input
        type="text"
        className="form-control"
        style={{ width: "20rem", maxWidth: "600px" }}
        placeholder="Search by company, position or status..."
        onChange={(e) => applications.searchOnTable(e)}
      />
    </div>
  );
};
