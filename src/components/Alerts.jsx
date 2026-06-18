function Alerts() {
    return (
        <div style={styles.container}>
            <h3>Recent Alerts</h3>

            <p>⚠️ Tailgate detected - Main Door</p>
            <p>⚠️ Access denied - Gym</p>
            <p>⚠️ Device offline</p>
        </div>
    );
}

const styles = {
    container: {
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
    }
};

export default Alerts;