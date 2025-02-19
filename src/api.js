import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where
} from "firebase/firestore/lite"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfyVTpTW_WxZQtbkgHPvsLQ-yxeSq8odU",
  authDomain: "vanlife-cde02.firebaseapp.com",
  projectId: "vanlife-cde02",
  storageBucket: "vanlife-cde02.firebasestorage.app",
  messagingSenderId: "344995974577",
  appId: "1:344995974577:web:c24cd41497abd520378190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore db
const db = getFirestore(app)

const vansCollectionRef = collection(db, 'vans')

class FetchError extends Error {
    constructor(message, status, statusText) {
        super(message);
        this.name = 'FetchError';
        this.status = status;
        this.statusText = statusText;
    }
}

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans;
}

// export async function getVans() {
//     const res = await fetch('/api/vans');
//     if (!res.ok) {
//         throw new FetchError('Failed to fetch vans', res.status, res.statusText);
//     }
//     const data = await res.json();
//     if (!data || !data.vans) {
//         throw new Error('Failed to fetch vans');
//     }
//     return data.vans;
// }

export async function getVan(id) {
    const docRef = doc(db, 'vans', id)
    const snapshot = await getDoc(docRef)
    return {
        id,
        ...snapshot.data(),
    }
}

// export async function getVan(id) {
//     const res = await fetch(`/api/vans/${id}`);
//     if (!res.ok) {
//         throw new FetchError('Failed to fetch van', res.status, res.statusText);
//     }
//     const data = await res.json();
//     if (!data || !data.vans) {
//         throw new Error(`Van with ID "${id}" not found`);
//     }
//     return data.vans;
// }

export async function getHostVans({hostId}) {
    const q = query(vansCollectionRef, where("hostId", "==", hostId))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans;
}

// export async function getHostVans({hostId}) {
//     const res = await fetch(`/api/host/${hostId}/vans`);
//     if (!res.ok) {
//         throw new FetchError('Failed to fetch host vans', res.status, res.statusText);
//     }
//     const data = await res.json();
//     if (!data || !data.vans) {
//         throw new Error('Failed to fetch host vans');
//     }
//     return data.vans;
// }

// export async function getHostVan({hostId, vanId}) {
//     const res = await fetch(`/api/host/${hostId}/vans/${vanId}`);
//     if (!res.ok) {
//         throw new FetchError('Failed to fetch host van', res.status, res.statusText);
//     }
//     const data = await res.json();
//     if (!data || !data.vans) {
//         throw new Error(`Host van with ID "${vanId}" not found`);
//     }
//     return data.vans;
// }

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
