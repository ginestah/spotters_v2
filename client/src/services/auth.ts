import api from "./api-config"

export async function loginUser(loginData: object): Promise<void>{
  try {
    const resp = await api.post("/auth/login", { authentication: loginData })
    localStorage.setItem("authToken", resp.data.token)
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  } catch (e) {
    throw e
  }
}

export async function registerUser(registerData: object): Promise<object>{
  try {
    const resp = await api.post("/users/", { user: registerData });
    localStorage.setItem("authToken", resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
    return resp.data.user
  } catch (e) {
    throw e
  }
}