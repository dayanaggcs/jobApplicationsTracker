import { CiCirclePlus } from "react-icons/ci";
import React, { useState } from "react";
export const Applications = () => {
  const [openAddApplication, setOpenAddApplication] = useState(false);

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

  const handleClickAddApplication = () => {
    setOpenAddApplication(true);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center mb-3">
        <div className="d-flex align-items-center">
          <h3 className="mb-0">Applications</h3>
          <CiCirclePlus
            className="ms-2"
            size={28}
            onClick={handleClickAddApplication}
          />
        </div>
        <div className="ms-auto">
          <input
            type="text"
            className="form-control"
            style={{ width: "20rem", maxWidth: "600px" }}
            placeholder="Search by company, position or status..."
          />
        </div>
      </div>
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
                <span>{app.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
