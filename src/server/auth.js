"use server";

import { API_URL } from "../../constant";

const login = async (formData) => {
  try {
    const username = formData.get("username");
  const password = formData.get("password");
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
  });
  const data = await res.json();
  
  if(!res.ok){
    return{error: data.error || "Login failed"};
  }

  return { success: true, token: data.token };
  
  }catch (error) {
    return { error: error.message || "An error occurred during login" };
  }
};

export { login };
