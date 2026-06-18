function Card({ title, value }) {
    return (
        <div style={styles.card}>
            <p style={{ color: "#6b7280" }}>{title}</p>
            <h2>{value}</h2>
        </div>
    );
}

const styles = {
    card: {
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
    }
};

export default Card;