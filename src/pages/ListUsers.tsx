import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/fetchUsers";
import { User } from "../api/createUser";

const ListUsers = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user: User) => (
          <div style={{ border: "1px solid red" }}>
            <p key={user.id}>{user.name}</p>
            <span key={user.id}>{user.email}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;
