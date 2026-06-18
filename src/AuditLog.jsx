import { useEffect, useState } from "react";

function AuditLog() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        setLogs([
            { log_id: 1, event_type: "access_granted", area: "main_door" },
            { log_id: 2, event_type: "access_denied", area: "gym" },
            { log_id: 3, event_type: "tailgate", area: "parking" }
        ]);
    }, []);

    return (
        <div>
            <h2>Audit Logs</h2>
            <p>Logs count: {logs.length}</p>

            {logs.map((log) => (
                <div key={log.log_id}>
                    <p>{log.event_type} - {log.area}</p>
                </div>
            ))}
        </div>
    );
}

export default AuditLog;