import axios from "axios";

//Fetch login data for auth
export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });

  if (res.status !== 200) {
    throw new Error("Unable to login.");
  }

  const data = await res.data;
  return data;
};

//Send signup data
export const signupUser = async (name: string, email: string, password: string) => {
  const res = await axios.post("/user/signup", { name, email, password });

  if (res.status !== 201) {
    throw new Error("Unable to signup.");
  }

  const data = await res.data;
  return data;
};

//Authenticate user data
export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");

  if (res.status !== 200) {
    throw new Error("Unable to authenticate.");
  }

  const data = await res.data;
  return data;
};

//Send new chat data
export const sendChatRequest = async (message: string) => {
  const res = await axios.post("/chat/new", { message });

  if (res.status !== 200) {
    throw new Error("Unable to send chat.");
  }

  const data = await res.data;
  return data;
};

//Fetch chat data
export const getUserChats = async () => {
  const res = await axios.get("/chat/all-chats");

  if (res.status !== 200) {
    throw new Error("Unable to send chat.");
  }

  const data = await res.data;
  return data;
};

//Delete chat data
export const deleteUserChats = async () => {
  const res = await axios.delete("/chat/delete");

  if (res.status !== 200) {
    throw new Error("Unable to delete chat.");
  }

  const data = await res.data;
  return data;
};

//Fetch user data for logout
export const logoutUser = async () => {
  const res = await axios.get("/user/logout");

  if (res.status !== 200) {
    throw new Error("Unable to logout.");
  }

  const data = await res.data;
  return data;
};