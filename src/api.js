const BASE_URL = "http://localhost:8000"; // replace later

export async function getAuditLogs() {
    const response = await fetch(`${BASE_URL}/api/audit`, {
        headers: {
            "X-API-Key": "your-api-key-here"
        }
    });

    const data = await response.json();
    return data;
}
