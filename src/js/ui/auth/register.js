import { API_AUTH_REGISTER } from "../../api/constants";

export async function onRegister(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors[0].message || 'Failed to register');
    }

    alert('Registration successful!');
    window.location.href = '/auth/login/';
  } catch (error) {
    alert('Registration failed: ${error.message}');
  }
}
