const BASE_URL = "https://linkbackend-production-51ce.up.railway.app/api";

export default async function api(path, options = {}) {
  const token = localStorage.getItem("token");
  console.log(token, "This is from the API.JS");

  if (token) {

    const res = await fetch(`${BASE_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(options.headers || {})
      },
      ...options
    });

    if (!res.ok) {
      throw new Error("API error");
    }
    return res.json();
  }

}
