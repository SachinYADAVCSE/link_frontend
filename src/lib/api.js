const BASE_URL = "http://localhost:4000/api";

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
