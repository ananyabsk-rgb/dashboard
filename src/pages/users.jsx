import { useState } from "react";

function Users() {
    const [users, setUsers] = useState([
        { id: 1, name: "John", email: "john@mail.com", role: "Admin" },
        { id: 2, name: "Sara", email: "sara@mail.com", role: "User" },
    ]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [editId, setEditId] = useState(null);

    // EDIT
    const handleEdit = (user) => {
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
        setEditId(user.id);
    };

    // ADD / UPDATE
    const handleAddUser = () => {
        if (!name || !email || !role) return;

        if (editId) {
            setUsers(users.map((u) =>
                u.id === editId ? { ...u, name, email, role } : u
            ));
            setEditId(null);
        } else {
            setUsers([
                ...users,
                { id: Date.now(), name, email, role }
            ]);
        }
        if (!isValidEmail(email)) {
            alert("Invalid email format");
            return;
        }

        const isDuplicate = users.some(
            (user) =>
                user.email.toLowerCase() === email.toLowerCase() &&
                user.id !== editId // allow same user when editing
        );

        if (isDuplicate) {
            alert("User with this email already exists");
            return;
        }

        setName("");
        setEmail("");
        setRole("");
    };

    // DELETE
    const handleDelete = (id) => {
        setUsers(users.filter((u) => u.id !== id));
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };



    return (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1>Users</h1>

            <div style={{ margin: "10px 0" }}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />

                <button onClick={handleAddUser}>
                    {editId ? "Update User" : "Add User"}
                </button>
            </div>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                {editId && (
                                    <button onClick={() => {
                                        setEditId(null);
                                        setName("");
                                        setEmail("");
                                        setRole("");
                                    }}>
                                        Cancel
                                    </button>
                                )}
                                <button onClick={() => handleEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;