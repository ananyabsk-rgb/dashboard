function Topbar() {
    return (
        <div style={styles.topbar}>
            <input placeholder="Search..." style={styles.search} />
            <div>🔔 👤</div>
        </div>
    );
}

const styles = {
    topbar: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px"
    },
    search: {
        padding: "8px",
        width: "200px"
    }
};

export default Topbar;