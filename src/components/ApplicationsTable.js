import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import useApplications from "./hooks/useApplications";
import useModal from "./hooks/useModal";
import React, { useEffect, useState } from "react";
import {
  APPLICATION_TABLE_HEADERS,
  APPLICATION_STATUS_OPTIONS,
} from "./constants";
export const ApplicationsTable = ({ applications }) => {
  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          {APPLICATION_TABLE_HEADERS.map((header) => (
            <th key={header.key}>
              {header.label}
              {header.sortable && (
                <span>
                  {applications.sortAsc ? (
                    <GoSortAsc
                      className="ms-1"
                      size={16}
                      color="white"
                      onClick={applications.toggleSort}
                    />
                  ) : (
                    <GoSortDesc
                      className="ms-1"
                      size={16}
                      color="white"
                      onClick={applications.toggleSort}
                    />
                  )}
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {applications.sortedApplications.map((app) => (
          <tr key={app.id}>
            <td>{app.company}</td>
            <td>{app.position}</td>
            <td>{app.date}</td>
            <td>
              {applications.statusId && applications.statusId === app.id ? (
                <select
                  className="form-select form-select-sm"
                  defaultValue={app.status}
                  onChange={(e) => {
                    app.status = e.target.value;
                    applications.updateApplication(app.id, {
                      status: e.target.value,
                    });
                    applications.setStatusId(null);
                  }}
                >
                  {APPLICATION_STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              ) : (
                <span>{app.status}</span>
              )}
            </td>
            <td>
              <MdModeEditOutline
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => applications.setStatusId(app.id)}
              />
            </td>
            <td>
              <FaTrashAlt
                size={18}
                style={{ cursor: "pointer" }}
                onClick={() => applications.deleteApplication(app.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
