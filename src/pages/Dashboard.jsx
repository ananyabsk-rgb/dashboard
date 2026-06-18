import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/** Replace with real session / auth user when available */
const LOGGED_IN_USER = {
    name: "Admin",
    avatarUrl: "https://i.pravatar.cc/80?img=5",
};

const THEME_STORAGE_KEY = "dashboard-theme";

function readInitialDark() {
    try {
        return localStorage.getItem(THEME_STORAGE_KEY) !== "light";
    } catch {
        return true;
    }
}

const themes = {
    dark: {
        pageBg: "#020617",
        pageText: "#ffffff",
        cardBg: "#1e293b",
        cardText: "#ffffff",
        mutedText: "#94a3b8",
        avatarBorder: "#334155",
        toggleBg: "#1e293b",
        toggleBorder: "#334155",
        toggleHover: "#334155",
        tableBorder: "#334155",
    },
    light: {
        pageBg: "#f1f5f9",
        pageText: "#0f172a",
        cardBg: "#ffffff",
        cardText: "#0f172a",
        mutedText: "#64748b",
        avatarBorder: "#cbd5e1",
        toggleBg: "#e2e8f0",
        toggleBorder: "#cbd5e1",
        toggleHover: "#cbd5e1",
        tableBorder: "#e2e8f0",
    },
};

function Dashboard() {
    const [isDark, setIsDark] = useState(readInitialDark);
    const [themeToggleHover, setThemeToggleHover] = useState(false);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        try {
            localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
        } catch {
            /* ignore */
        }
    }, [isDark]);

    const t = themes[isDark ? "dark" : "light"];

    useEffect(() => {
        // Safe mock data
        setEvents([
            {
                log_id: "1",
                event_time: new Date().toISOString(),
                entity_type: "resident",
                event_type: "access_granted",
                area: "entrance",
                access_method: "rfid",
            },
            {
                log_id: "2",
                event_time: new Date().toISOString(),
                entity_type: "visitor",
                event_type: "tailgate",
                area: "main gate",
                access_method: "camera",
            },
        ]);
    }, []);

    const cardStyle = {
        background: t.cardBg,
        color: t.cardText,
        padding: "20px",
        borderRadius: "10px",
        flex: 1,
        border: isDark ? "none" : "1px solid #e2e8f0",
        boxShadow: isDark ? "none" : "0 1px 3px rgba(15, 23, 42, 0.06)",
    };

    const boxStyle = {
        background: t.cardBg,
        color: t.cardText,
        padding: "20px",
        borderRadius: "10px",
        width: "100%",
        border: isDark ? "none" : "1px solid #e2e8f0",
        boxShadow: isDark ? "none" : "0 1px 3px rgba(15, 23, 42, 0.06)",
    };

    return (
        <div
            style={{
                margin: "-30px",
                padding: "50px",
                background: t.pageBg,
                minHeight: "100vh",
                color: t.pageText,
                transition: "background-color 0.2s ease, color 0.2s ease",
            }}
        >
            <header
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "20px",
                }}
            >
                <h1 style={{ fontSize: "28px", margin: 0 }}>Dashboard Overview</h1>
                <div style={{ flex: 1 }} />
                <button
                    type="button"
                    onClick={() => setIsDark((d) => !d)}
                    onMouseEnter={() => setThemeToggleHover(true)}
                    onMouseLeave={() => setThemeToggleHover(false)}
                    aria-pressed={isDark}
                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 14px",
                        borderRadius: "10px",
                        border: `1px solid ${t.toggleBorder}`,
                        background: themeToggleHover ? t.toggleHover : t.toggleBg,
                        color: t.cardText,
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: 500,
                    }}
                >
                    {isDark ? <Moon size={18} aria-hidden /> : <Sun size={18} aria-hidden />}
                    {isDark ? "Dark" : "Light"}
                </button>
                <div
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                    title={`Signed in as ${LOGGED_IN_USER.name}`}
                    aria-label={`Signed in as ${LOGGED_IN_USER.name}`}
                >
                    <img
                        src={LOGGED_IN_USER.avatarUrl}
                        alt={`${LOGGED_IN_USER.name} profile`}
                        width={40}
                        height={40}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: `2px solid ${t.avatarBorder}`,
                            boxShadow: isDark
                                ? "0 2px 8px rgba(0,0,0,0.35)"
                                : "0 2px 8px rgba(15, 23, 42, 0.12)",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "14px",
                            color: t.mutedText,
                            maxWidth: "140px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {LOGGED_IN_USER.name}
                    </span>
                </div>
            </header>

            {/* Top Cards */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
                <div style={cardStyle}>Total Residents: --</div>
                <div style={cardStyle}>Active Visitors: --</div>
                <div style={cardStyle}>Access Events: {events.length}</div>
                <div style={cardStyle}>Tailgate Alerts: --</div>
            </div>

            {/* Table Section */}
            <div style={{ display: "flex", gap: "20px" }}>
                <div style={boxStyle}>
                    <h2>Recent Access Events</h2>

                    <table
                        style={{
                            width: "100%",
                            marginTop: "20px",
                            borderCollapse: "collapse",
                            color: t.cardText,
                        }}
                    >
                        <thead>
                            <tr style={{ borderBottom: `2px solid ${t.tableBorder}` }}>
                                <th
                                    align="left"
                                    style={{ paddingBottom: "8px", color: t.mutedText, fontWeight: 600 }}
                                >
                                    Time
                                </th>
                                <th
                                    align="left"
                                    style={{ paddingBottom: "8px", color: t.mutedText, fontWeight: 600 }}
                                >
                                    Entity
                                </th>
                                <th
                                    align="left"
                                    style={{ paddingBottom: "8px", color: t.mutedText, fontWeight: 600 }}
                                >
                                    Type
                                </th>
                                <th
                                    align="left"
                                    style={{ paddingBottom: "8px", color: t.mutedText, fontWeight: 600 }}
                                >
                                    Area
                                </th>
                                <th
                                    align="left"
                                    style={{ paddingBottom: "8px", color: t.mutedText, fontWeight: 600 }}
                                >
                                    Method
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {events.map((e) => (
                                <tr
                                    key={e.log_id}
                                    style={{
                                        height: "40px",
                                        borderBottom: `1px solid ${t.tableBorder}`,
                                    }}
                                >
                                    <td>{new Date(e.event_time).toLocaleTimeString()}</td>
                                    <td>{e.entity_type}</td>
                                    <td>{e.event_type}</td>
                                    <td>{e.area}</td>
                                    <td>{e.access_method}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
