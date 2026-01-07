import React, { useState, useEffect } from "react";
// Custom hook for managing job applications data
const useApplications = () => {
  // State for the filtered/current applications list
  const [applicationsList, setApplicationsList] = useState([]);
  // State for the original unfiltered data
  const [originalList, setOriginalList] = useState([]);
  // State to track loading status during data fetch
  const [loading, setLoading] = useState(false);

  const [editStatus, setEditStatus] = useState(false);
  const [editStatusId, setEditStatusId] = useState(null);

  // Fetch applications data (simulated with mock data and timeout)
  const fetchApplications = () => {
    setLoading(true);

    // Mock data for job applications
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

    // Simulate API delay
    setTimeout(() => {
      setOriginalList(data);
      setApplicationsList(data);
      setLoading(false);
    }, 500);
  };

  // Fetch applications on component mount
  useEffect(() => {
    fetchApplications();
  }, []);

  // Return hook values and refetch function for consumers
  return {
    applicationsList,
    originalList,
    loading,
    refetch: fetchApplications,
    setApplicationsList,
    // helper to add a new application and keep both lists in sync
    addApplication: (application) => {
      const newApp = {
        id: applicationsList.length
          ? Math.max(...applicationsList.map((app) => app.id)) + 1
          : 1,
        ...application,
      };
      const updatedList = [...applicationsList, newApp];
      setApplicationsList(updatedList);
      setOriginalList(updatedList);
    },
    deleteApplication: (applicationId) => {
      const updatedList = applicationsList.filter(
        (app) => app.id !== applicationId
      );
      setApplicationsList(updatedList);
      setOriginalList(updatedList);
    },
    // updateApplicationStatus: (applicationId, newStatus) => {
    //   const updatedList = applicationsList.map((app) =>
    //     app.id === applicationId ? { ...app, status: newStatus } : app
    //   );
    //   setApplicationsList(updatedList);
    //   setOriginalList(updatedList);
    // },
  };
};

export default useApplications;
