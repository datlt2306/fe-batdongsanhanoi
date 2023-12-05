import { getAllProjects, getOneProject } from "@/app/api/projects";
import { useQuery } from "@tanstack/react-query";

export const useProjectQuery = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["PROJECT_ID", id],
    queryFn: async () =>
      id ? await getOneProject(id) : await getAllProjects(),
  });
  return { data, ...rest };
};
