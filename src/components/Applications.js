export const Applications = () => {
  const applications = [
    {
      id: 1,
      company: "Tech Corp",
      position: "Senior Developer",
      date: "2026-01-05",
      status: "Applied",
    },
    {
      id: 2,
      company: "StartUp Inc",
      position: "Full Stack Developer",
      date: "2026-01-03",
      status: "Interview",
    },
    {
      id: 3,
      company: "Global Systems",
      position: "Software Engineer",
      date: "2025-12-28",
      status: "Rejected",
    },
  ];

  return (
    <div className="container mt-5">
      <h1>Applications</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Date Applied</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.company}</td>
              <td>{app.position}</td>
              <td>{app.date}</td>
              <td>
                <span
                  className={`badge badge-${
                    app.status === "Applied"
                      ? "primary"
                      : app.status === "Interview"
                      ? "success"
                      : "danger"
                  }`}
                >
                  {app.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
