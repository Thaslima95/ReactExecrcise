import React from "react";

function Todo() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = fetch(
      "https://64d461f2b592423e469410ba.mockapi.io/api/v1/todo"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => setUsers(response.data));
  }, []);
  return (
    <div>
      Todo
      {console.log(users)}
    </div>
  );
}

export default Todo;
