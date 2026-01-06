import { CiCirclePlus } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
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
            <th></th>
            <th></th>
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
              <td>
                <MdModeEditOutline size={20} style={{ cursor: "pointer" }} />
              </td>
              <td>
                <FaTrashAlt size={18} style={{ cursor: "pointer" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openAddApplication && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Application</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setOpenAddApplication(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date Applied</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select">
                      <option>Applied</option>
                      <option>Interview</option>
                      <option>Offered</option>
                      <option>Rejected</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setOpenAddApplication(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setOpenAddApplication(false)}
                >
                  Save Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
