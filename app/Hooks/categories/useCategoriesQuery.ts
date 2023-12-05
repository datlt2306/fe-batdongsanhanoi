import { useQuery } from "@tanstack/react-query";
import { getAllCategories, getOneCategories } from "../../api/categories";

export const useCategoryQuery = (id: string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["CATERORY_ID", id],
    queryFn: async () =>
      id ? await getOneCategories(id) : await getAllCategories(),
  });
  return { data, ...rest };
};
