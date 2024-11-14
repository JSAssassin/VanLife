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

export async function getHostVan(id) {
    const res = await fetch(`/api/host/vans/${id}`);
    if (!res.ok) {
        throw new FetchError('Failed to fetch host van', res.status, res.statusText);
    }
    const data = await res.json();
    if (!data || !data.vans) {
        throw new Error(`Host van with ID "${id}" not found`);
    }
    return data.vans;
}

export async function getHostVans() {
    const res = await fetch('/api/host/vans');
    if (!res.ok) {
        throw new FetchError('Failed to fetch host vans', res.status, res.statusText);
    }
    const data = await res.json();
    return data.vans;
}
