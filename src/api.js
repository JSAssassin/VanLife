class FetchError extends Error {
    constructor(message, status, statusText) {
        super(message);
        this.name = 'FetchError';
        this.status = status;
        this.statusText = statusText;
    }
}

export async function getVans() {
    const res = await fetch('/api/vans');
    if (!res.ok) {
        throw new FetchError('Failed to fetch vans', res.status, res.statusText);
    }
    const data = await res.json();
    if (!data || !data.vans) {
        throw new Error('Failed to fetch vans');
    }
    return data.vans;
}

export async function getVan(id) {
    const res = await fetch(`/api/vans/${id}`);
    if (!res.ok) {
        throw new FetchError('Failed to fetch van', res.status, res.statusText);
    }
    const data = await res.json();
    if (!data || !data.vans) {
        throw new Error(`Van with ID "${id}" not found`);
    }
    return data.vans;
}

export async function getHostVan({hostId, vanId}) {
    const res = await fetch(`/api/host/${hostId}/vans/${vanId}`);
    if (!res.ok) {
        throw new FetchError('Failed to fetch host van', res.status, res.statusText);
    }
    const data = await res.json();
    if (!data || !data.vans) {
        throw new Error(`Host van with ID "${vanId}" not found`);
    }
    return data.vans;
}

export async function getHostVans({hostId}) {
    const res = await fetch(`/api/host/${hostId}/vans`);
    if (!res.ok) {
        throw new FetchError('Failed to fetch host vans', res.status, res.statusText);
    }
    const data = await res.json();
    if (!data || !data.vans) {
        throw new Error('Failed to fetch host vans');
    }
    return data.vans;
}

export async function loginUser(creds) {
    const res = await fetch('/api/login', {
        method: "post",
        body: JSON.stringify(creds),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json();
    if (!res.ok) {
        throw new FetchError(data.message, res.status, res.statusText);
    }
    return data;
}
