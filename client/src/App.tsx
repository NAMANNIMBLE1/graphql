import { useQuery } from "@apollo/client/react"
import { GET_USERS } from "./graphql/query/users";


function App() {
  const { loading, data, error } = useQuery(GET_USERS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  console.log(data);

  return (
    <div>
      <h1>Everything is running perfectly 🚀</h1>

      {data.users.map((user: any) => (
        <div key={user._id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;