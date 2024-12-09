// App.tsx
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const CreateUser: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleOk = async () => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Falha ao criar usuário");
      }

      const result = await response.json();
      alert(`Usuário criado com sucesso! ID: ${result.id}`);
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        label="Nome"
        placeholder="Digite seu nome"
      />
      <Input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        label="Email"
        placeholder="Digite seu email"
      />
      <Button onClick={handleOk}>Enviar</Button>
    </div>
  );
};

export default CreateUser;
