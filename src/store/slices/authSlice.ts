interface Icredential {
  email: string;
  password: string;
}
export function saveCredentials({ email, password }: Icredential) {
  if (!email || !password) {
    return;
  }
  const credentials = {
    email: email,
    password: password,
  };
  localStorage.setItem("credentials", JSON.stringify(credentials));
}

export function getCredentials() {
  const storedData = localStorage.getItem("credentials");
  if (!storedData) {
    return null;
  }
  const credentials = JSON.parse(storedData);
  return credentials;
}

export function deleteCredentials() {
  localStorage.removeItem("credentials");
}
