'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "../../componets/API/API";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Form_admin.module.css";
function Form_admin() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [contato, setContato] = useState("");
  const [error, setError] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [validCep, setValidCep] = useState("");
  const [codigoCidade, setCodigoCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [descricaoCidade, setDescricaoCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    
    // http://localhost:4000
    axios
      .post(`${API_URL}/client`, {
        nome,
        email,
        contato,
        endereco: {
          bairro,
          cep,
          codigoCidade,
          estado,
          logradouro,
          numero,
          complemento,
          descricaoCidade,
        },
        password,
        confirmpassword,
        
      })
      .then((res) => {
      

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cadastro criado com Sucesso!",
          showConfirmButton: false,
          timer: 3000,
        });

        setTimeout(() => {
          router.push("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        

        const errorMessage = err?.response?.data?.msg;

        Swal.fire({
          position: "center",
          icon: "warning",
          title: errorMessage,
          showConfirmButton: false,
          timer: 3000,
        });
        router.push("/cadastro");
      });
  }

  useEffect(() => {
    async function getFornecedor() {
      try {
        const cepRegex = /^[0-9]{8}$/; // regex to match 8 digits
        if (cepRegex.test(cep)) {
          // check if cep matches regex
          const config = {
            headers: {
              "x-api-key": "e44b2e1f4ff6dad71a1ee985dd557a98",
              Authorization: "Bearer ", // replace token with your actual token value
            },
          };
          const response = await axios.get(
            `https://api.plugnotas.com.br/cep/${cep}`,
            config
          );

          const endereco = response.data;

          setEstado(endereco.uf);
          setCep(endereco.cep);
          setBairro(endereco.bairro);
          setComplemento(endereco.complemento);
          setCodigoCidade(endereco.ibge);
          setLogradouro(endereco.logradouro);
          setDescricaoCidade(endereco.municipio);
        } else {
          setEstado("");
          setBairro("");
          setComplemento("");
          setCodigoCidade("");
          setLogradouro("");
          setDescricaoCidade("");
        }
      } catch (error) {
        console.error(error);
        setValidCep(error);
      }
    }
    getFornecedor();
    setValidCep("");
  }, [cep, setCep]);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setValidEmail(newEmail === "" || emailRegex.test(newEmail));
  };

  const isFormValid = () => {
    return (
      nome &&
      email &&
      password &&
      confirmpassword &&
      contato &&
      cep &&
      bairro &&
      logradouro &&
      codigoCidade &&
      numero &&
      descricaoCidade &&
      estado
    );
  };

  return (
    <div className={styles.main}>
      <form className={styles.Form} onSubmit={handleLogin}>
        <div className={styles.conteiner}>
          <fieldset className={styles.fieldset_componet}>
            <span>Cadastre-se</span>
            <div className={styles.content}>
              <div
                className={`${styles.itens_andress} ${styles.grid_container}`}
              >
                <div className={styles.input_content}>
                  <label htmlFor="nome">Nome</label>
                  <div className={styles.background_input}>
                    <input
                      type="nome"
                      name="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Digite o seu nome"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.input_content}>
                  <label htmlFor="email">Email</label>
                  <div className={styles.background_input}>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Digite o seu e-mail"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                  {!validEmail && email !== "" && (
                    <p style={{ color: "red" }}>
                      Por favor, insira um e-mail válido.
                    </p>
                  )}
                </div>

                <div className={styles.input_content}>
                  <label htmlFor="password">Senha</label>
                  <div className={styles.background_input}>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Digite a sua senha"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.input_content}>
                  <label htmlFor="confirmpassword">Confirme a senha</label>
                  <div className={styles.background_input}>
                    <input
                      type="password"
                      name="confirmpassword"
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      placeholder="Digite a sua senha novamente"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.input_content}>
                  <label htmlFor="contato">Contato</label>
                  <div className={styles.background_input}>
                    <input
                      type="contato"
                      name="contato"
                      value={contato}
                      onChange={(e) => setContato(e.target.value)}
                      placeholder="Digite o seu número de contato"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>

                <div className={styles.input_content}>
                  <label htmlFor="cep">Cep</label>
                  <div className={styles.background_input}>
                    <input
                      type="text"
                      id="cep"
                      value={cep}
                      onChange={(event) => setCep(event.target.value)}
                      placeholder="Digite o seu cep"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                  {validCep && (
                    <p style={{ color: "red" }}>
                      Por favor, insira um cep válido.
                    </p>
                  )}
                </div>

                <div className={styles.input_content}>
                  <label htmlFor="bairro">Bairro</label>
                  <div className={styles.background_input}>
                    <input
                      type="text"
                      id="bairro"
                      value={bairro}
                      onChange={(event) => setBairro(event.target.value)}
                      placeholder="Digite"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>
                <div className={styles.input_content}>
                  <label htmlFor="logradouro">Logradouro</label>
                  <div className={styles.background_input}>
                    <input
                      type="text"
                      id="logradouro"
                      value={logradouro}
                      onChange={(event) => setLogradouro(event.target.value)}
                      placeholder="Digite o seu logradouro"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>
                <div className={styles.input_content}>
                  <label htmlFor="codigoCidade">Codigo Cidade</label>
                  <div className={styles.background_input}>
                    <input
                      type="text"
                      id="codigoCidade"
                      value={codigoCidade}
                      onChange={(event) => setCodigoCidade(event.target.value)}
                      placeholder="Digite o seu código da cidade"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>
                <div className={styles.input_content}>
                  <label htmlFor="complemento">Complemento</label>
                  <div className={styles.background_input}>
                    <input
                      type="text"
                      id="complemento"
                      value={complemento}
                      onChange={(event) => setComplemento(event.target.value)}
                      placeholder="Digite o seu complemento"
                      className={styles.meuInput}
                    />
                  </div>
                </div>
                <div className={styles.input_content}>
                  <label htmlFor="numero">Número</label>
                  <div className={styles.background_input}>
                    <input
                      type="text"
                      id="numero"
                      value={numero}
                      onChange={(event) => setNumero(event.target.value)}
                      placeholder="Digite o seu número"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>
                <div className={styles.input_content}>
                  <label htmlFor="descricaoCidade">Cidade</label>
                  <div className={styles.background_input}>
                    <input
                      type="text"
                      id="descricaoCidade"
                      value={descricaoCidade}
                      onChange={(event) =>
                        setDescricaoCidade(event.target.value)
                      }
                      placeholder="Digite a sua cidade"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>
                <div className={styles.input_content}>
                  <label htmlFor="estado">Estado</label>
                  <div className={styles.background_input}>
                    <input
                      type="text"
                      id="estado"
                      value={estado}
                      onChange={(event) => setEstado(event.target.value)}
                      placeholder="Digite o seu estado"
                      className={styles.meuInput}
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                className={styles.btn}
                type="submit"
                disabled={!isFormValid()}
              >
                Cadastrar
              </button>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default Form_admin;
