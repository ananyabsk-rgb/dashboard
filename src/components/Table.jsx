function Table() {
    return (
        <div style={styles.container}>
            <h3>Recent Access Events</h3>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>User</th>
                        <th>Type</th>
                        <th>Area</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>9:41</td>
                        <td>John Doe</td>
                        <td>Access Granted</td>
                        <td>Main Door</td>
                        <td style={{ color: "green" }}>Success</td>
                    </tr>
                    <tr>
                        <td>9:35</td>
                        <td>Mike</td>
                        <td>Access Denied</td>
                        <td>Gym</td>
                        <td style={{ color: "red" }}>Denied</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        background: "white",
        padding: "20px",
        borderRadius: "10px"
    },
    table: {
        width: "100%",
        marginTop: "15px",
        borderCollapse: "collapse"
    }
};

export default Table;