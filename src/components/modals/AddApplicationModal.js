import React from "react";
import useModal from "../hooks/useModal";
import { APPLICATION_STATUS_OPTIONS } from "../constants";
import { CiCirclePlus } from "react-icons/ci";

export const AddApplicationModal = ({ applications, applicationModal }) => {
  return (
    <>
      {applicationModal.isOpen && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Application</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => applicationModal.close()}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      value={applicationModal.payload?.company || ""}
                      onChange={(e) =>
                        applicationModal.setPayload({
                          ...applicationModal.payload,
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
                      value={applicationModal.payload?.position || ""}
                      onChange={(e) =>
                        applicationModal.setPayload({
                          ...applicationModal.payload,
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
                      value={applicationModal.payload?.date || ""}
                      onChange={(e) =>
                        applicationModal.setPayload({
                          ...applicationModal.payload,
                          date: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select form-select-sm"
                      value={applicationModal.payload?.status || "Applied"}
                      onChange={(e) =>
                        applicationModal.setPayload({
                          ...applicationModal.payload,
                          status: e.target.value,
                        })
                      }
                    >
                      {APPLICATION_STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => applicationModal.close()}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={
                    !applicationModal.payload?.company?.trim() ||
                    !applicationModal.payload?.position?.trim() ||
                    !applicationModal.payload?.date ||
                    !applicationModal.payload?.status
                  }
                  onClick={() => {
                    applications.addApplication(applicationModal.payload);
                    applicationModal.close();
                  }}
                >
                  Save Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
