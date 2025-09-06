import { useGetUser } from "../common/api/hooks/useGetUser";

export const AdminPanel = () => {
  const { data } = useGetUser();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
};
