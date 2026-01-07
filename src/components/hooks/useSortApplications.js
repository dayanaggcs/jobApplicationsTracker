import { useState, useMemo } from "react";

// Custom hook for managing applications sorting
const useSortApplications = (applications) => {
  const [sortAsc, setSortAsc] = useState(true);

  // Sort applications based on date and current sort order
  const sortedApplications = useMemo(() => {
    if (!applications || applications.length === 0) return [];

    return [...applications].sort((a, b) => {
      if (sortAsc) {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
  }, [applications, sortAsc]);

  const toggleSort = () => setSortAsc(!sortAsc);

  return {
    sortAsc,
    setSortAsc,
    toggleSort,
    sortedApplications,
  };
};

export default useSortApplications;
