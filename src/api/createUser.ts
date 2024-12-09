export interface User {
  id: number;
  name: string;
  email: string;
}

export const createUser = async (user: User) => {
  const response = await fetch("https://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
