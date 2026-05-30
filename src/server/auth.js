"use server";

import { API_URL } from "../../constant";

export const login = async (prevState, formData) => { // ✅ export const
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.message || data.error || "Login failed" };
    }

    return { success: true, token: data.token };

  } catch (err) {
    return { error: "Something went wrong" };
  }
};