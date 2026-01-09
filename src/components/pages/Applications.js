// Import custom hook for managing applications state and actions
import useApplications from "../hooks/useApplications";
import useModal from "../hooks/useModal";

// Import modals and UI components
import { AddApplicationModal } from "../modals/AddApplicationModal";
import { ApplicationsTable } from "../ApplicationsTable";
import { ApplicationsSearch } from "../ApplicationsSearch";
import { PageHeader } from "../PageHeader";
import { PlusIcon } from "../PlusIcon";

/**
 * ApplicationsPage
 * ----------------
 * Main page component for managing job applications.
 *
 * Responsibilities:
 * - Fetch and manage applications state via `useApplications` hook
 * - Render page header, add application modal, search, and table components
 * - Display loading state while data is being fetched
 */
export const ApplicationsPage = () => {
  // Initialize applications state and actions from custom hook
  const applications = useApplications();

  const applicationModal = useModal(false, {
    company: "",
    position: "",
    date: "",
    status: "Applied",
  });

  // Render loading message while fetching applications
  if (applications.loading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      {/* Header section: page title and "Add Application" button */}
      <div className="d-flex align-items-center mb-3">
        <div className="d-flex align-items-center">
          {/* Page title */}
          <PageHeader title="Applications" />
          {/* Plus icon to open "Add Application" modal */}
          <PlusIcon
            onClick={() =>
              applicationModal.open({
                company: "",
                position: "",
                date: "",
                status: "Applied",
              })
            }
          />
          {/* Add Application Modal */}
          <AddApplicationModal
            applications={applications}
            applicationModal={applicationModal}
          />
        </div>

        {/* Search input for filtering applications */}
        <ApplicationsSearch applications={applications} />
      </div>

      {/* Table displaying all applications */}
      <ApplicationsTable applications={applications} />
    </div>
  );
};
