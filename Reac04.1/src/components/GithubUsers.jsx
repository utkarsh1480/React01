import React, { useEffect, useState } from "react";

function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [since, setSince] = useState(0); // for pagination
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://api.github.com/users?per_page=6&since=${since}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();

      setUsers((prev) => [...prev, ...data]); // append users
      setSince(data[data.length - 1].id); // update cursor
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub Users</h1>

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Users */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "150px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              width="80"
              style={{ borderRadius: "50%" }}
            />
            <p>{user.login}</p>
          </div>
        ))}
      </div>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Load More */}
      <button
        onClick={fetchUsers}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Load More
      </button>
    </div>
  );
}

export default GithubUsers;