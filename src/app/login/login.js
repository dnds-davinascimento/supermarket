'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "../../componets/API/API";
import jwt from "jsonwebtoken";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import styles from "./login_componet.module.css";
import ModalComponent from "../../componets/Modal/Modal_feth";
import Link from "next/link";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);
    setIsModalOpen(true);

    axios
      .post(`${API_URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        const decoded = jwt.decode(token);

        const userId = decoded.id;
        const isAdmin = decoded.isAdmin;

        localStorage.setItem("token", token);
        sessionStorage.setItem("userId", userId);
        sessionStorage.setItem("isAdmin", isAdmin);

        // Navega o usuário para a rota autenticada
        router.push("/");
      })
      .catch((err) => {
        
        console.log(err)
        // Exibe a mensagem de erro vinda do backend em um alert
        alert(err.response.data.msg);
        window.location.reload();
      });
  }
  return (
    <div className={styles.container_geral}>
      <div className={styles.esquerda}>
        <form className={styles.form} onSubmit={handleLogin}>
          <h1>Bem vindo ao Sincronizze</h1>
          <p>Faça o login para ter acesso a plataforma</p>
          <div className={styles.container_inputs}>
            <div className={styles.input_label}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.input_label}>
              <div className={styles.label_esqueceu_senha}>
                <label>Senha</label>
                <p>Esqueceu a senha?</p>
              </div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <input className={styles.btn_enviar} type="submit" value="Entrar" />
          <div className={styles.cadastrar}>
            <p>
              Ainda não possue uma conta? <Link href="/cadastro">Cadastre-se!</Link>
            </p>
          </div>
        </form>
        {isModalOpen && (
          <ModalComponent isOpen={isModalOpen}>
            {loading ? (
              <ClipLoader css={override} color={"#fff"} size={30} />
            ) : (
              "Entrar"
            )}
          </ModalComponent>
        )}
      </div>
    </div>
  );
}

export default LoginBox;
