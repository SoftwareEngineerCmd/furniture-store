import { useQuery } from "@tanstack/react-query";
import { GET_USER_QUERY_KEY } from "../constants/query-keys";
import { userAuthApi } from "../user-auth.api";

export const useGetUser = () => {
  return useQuery({
    queryKey: [GET_USER_QUERY_KEY],
    queryFn: async () => {
      const { data } = await userAuthApi.getUserAuth();
      return data;
    },
    enabled: !!localStorage.getItem("token"), // optional: only fetch if token exists
  });
};
