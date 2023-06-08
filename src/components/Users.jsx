
import { useFetch } from "./hooks/useFetch";

const Users = () => {
  
  const [users] = useFetch([], "https://jsonplaceholder.typicode.com/users")
console.log(users)
  return <div>Users</div>;
};

export default Users;
