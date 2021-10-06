import {ProjectPost} from "../types";

export async function addProjectToFeed(data: ProjectPost) {
    const res = await fetch(`/api/add-project`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    if (res.ok) {
        return res.json();
    } else {
        const error = await res.json();
        throw new Error(`${res.status} ${error.error}`);
    }
}



