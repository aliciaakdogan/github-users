import UserCard from "./UserCard";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");

  async function getUsers() {
    if (search) {
      const response = await fetch(
        "https://api.github.com/search/users?q=" + search
      );
      const data = await response.json();
      console.log(data);
      setUsers(data.items);
    } else {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Min GitHub sök sida</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => getUsers()}>sök</button>
      </nav>
      {users
        ? users.map((user) => <UserCard key={user.id} user={user} />)
        : "loading..."}
    </div>
  );
}

export default App;
