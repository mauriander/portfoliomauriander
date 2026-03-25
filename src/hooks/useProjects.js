import { useEffect, useState } from "react";
import {
  fetchProjects,
  getStaticProjects,
  isFirestoreProjectsConfigured,
} from "../services/projectsService";

function useProjects() {
  const [state, setState] = useState(() => ({
    projects: getStaticProjects(),
    isLoading: isFirestoreProjectsConfigured(),
    error: null,
    source: "static",
  }));

  useEffect(() => {
    if (!isFirestoreProjectsConfigured()) {
      return undefined;
    }

    const controller = new AbortController();

    async function loadProjects() {
      try {
        const result = await fetchProjects({ signal: controller.signal });
        setState({
          projects: result.projects,
          isLoading: false,
          error: null,
          source: result.source,
        });
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setState({
          projects: getStaticProjects(),
          isLoading: false,
          error,
          source: "static",
        });
      }
    }

    loadProjects();

    return () => controller.abort();
  }, []);

  return state;
}

export default useProjects;
