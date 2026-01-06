import { CiCirclePlus } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import React, { useEffect, useState } from "react";
export const Applications = () => {
  const [openAddApplication, setOpenAddApplication] = useState(false);
  const [applicationsList, setApplicationsList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [editStatus, setEditStatus] = useState(false);
  const [editStatusId, setEditStatusId] = useState(null);
  const [newApplication, setNewApplication] = useState({
    company: "",
    position: "",
    date: "",
    status: "Applied",
  });

  const getAllApplications = () => {
    // Simulate an axios call with a delay
    const data = [
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

    setTimeout(() => {
      setOriginalList(data);
      setApplicationsList(data);
    }, 500);
  };

  useEffect(() => {
    getAllApplications();
  }, []);

  useEffect(() => {
    const sortedApplications = [...applicationsList].sort((a, b) => {
      if (sortAsc) {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setApplicationsList(sortedApplications);
  }, [sortAsc]);

  const handleClickAddApplication = () => {
    setOpenAddApplication(true);
  };

  const deleteApplication = (application) => {
    setApplicationsList(
      applicationsList.filter((app) => app.id !== application.id)
    );
    setOriginalList(originalList.filter((app) => app.id !== application.id));
    setEditStatusId(null);
  };

  const editApplicationStatus = (application) => {
    setEditStatus(true);
    setEditStatusId(application.id);
  };

  const searchOnTable = (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    // If the input is cleared, show the original list
    if (!searchTerm) {
      setApplicationsList(originalList);
      return;
    }

    setApplicationsList(
      originalList.filter(
        (app) =>
          app.company.toLowerCase().includes(searchTerm) ||
          app.position.toLowerCase().includes(searchTerm) ||
          app.status.toLowerCase().includes(searchTerm)
      )
    );
  };

  const addApplication = (application) => {
    const newApp = {
      id: applicationsList.length
        ? Math.max(...applicationsList.map((app) => app.id)) + 1
        : 1,
      ...application,
    };
    const updatedList = [...applicationsList, newApp];
    setApplicationsList(updatedList);
    setOriginalList(updatedList);
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
            onChange={(e) => searchOnTable(e)}
          />
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>
              Date Applied
              {sortAsc ? (
                <GoSortAsc
                  className="ms-1"
                  size={16}
                  color="white"
                  onClick={() => setSortAsc(false)}
                />
              ) : (
                <GoSortDesc
                  className="ms-1"
                  size={16}
                  color="white"
                  onClick={() => setSortAsc(true)}
                />
              )}
            </th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applicationsList.map((app) => (
            <tr key={app.id}>
              <td>{app.company}</td>
              <td>{app.position}</td>
              <td>{app.date}</td>
              <td>
                {editStatus && editStatusId === app.id ? (
                  <select
                    className="form-select form-select-sm" // Added form-select-sm for smaller height
                    defaultValue={app.status}
                    onChange={(e) => {
                      app.status = e.target.value;
                      setApplicationsList([...applicationsList]);
                      setOriginalList([...applicationsList]);
                      setEditStatus(false);
                    }}
                  >
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offered</option>
                    <option>Rejected</option>
                  </select>
                ) : (
                  <span>{app.status}</span>
                )}
              </td>
              <td>
                <MdModeEditOutline
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => editApplicationStatus(app)}
                />
              </td>
              <td>
                <FaTrashAlt
                  size={18}
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteApplication(app)}
                />
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
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) =>
                        setNewApplication({
                          ...newApplication,
                          company: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) =>
                        setNewApplication({
                          ...newApplication,
                          position: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date Applied</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={(e) =>
                        setNewApplication({
                          ...newApplication,
                          date: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select form-select-sm"
                      onChange={(e) =>
                        setNewApplication({
                          ...newApplication,
                          status: e.target.value,
                        })
                      }
                    >
                      {" "}
                      {/* Added form-select-sm for smaller height */}
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
                  onClick={() => {
                    setOpenAddApplication(false);
                    addApplication(newApplication);
                  }}
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
