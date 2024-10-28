import { API_AUTH_REGISTER } from "../../api/constants.js";

class UserRegistration {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async register() {
    try {
      const response = await fetch(API_AUTH_REGISTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: this.name, email: this.email, password: this.password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors[0].message || 'Failed to register');
      }

      alert('Registration successful!');
      window.location.href = '/auth/login/';
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  }
}

export function onRegister(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  const newUser = new UserRegistration(name, email, password);
  newUser.register();
}
