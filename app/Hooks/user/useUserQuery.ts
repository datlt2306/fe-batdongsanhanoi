import { inFoUser } from "@/app/api/auths";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["USER_ID"],
    queryFn: async () => await inFoUser(),
  });
  return { data, ...rest };
};
