import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div style={styles.sidebar}>
            <h2 style={styles.title}>GateKeypers</h2>

            <div style={styles.menu}>
                {/* Clickable */}
                <Link to="/" style={styles.link}>Dashboard</Link>
                <Link to="/users" style={styles.link}>Users</Link>

                {/* Static */}
                <p style={styles.item}>Visitors</p>
                <p style={styles.item}>Staff</p>
                <p style={styles.item}>NFC Credentials</p>
                <p style={styles.item}>Audit Logs</p>
                <p style={styles.item}>Alerts</p>
                <p style={styles.item}>Devices</p>
                <p style={styles.item}>Settings</p>
            </div>
        </div>
    );
}

const styles = {
    sidebar: {
        width: "250px",
        height: "100vh",
        background: "#0b1a2b",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
    },

    title: {
        marginBottom: "40px",
        fontSize: "24px",
        fontWeight: "bold",
    },

    menu: {
        display: "flex",
        flexDirection: "column",
        gap: "22px", // controls spacing between items
        alignItems: "center",
    },

    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
    },

    item: {
        fontSize: "18px",
        cursor: "default",
    }
};

export default Sidebar;
