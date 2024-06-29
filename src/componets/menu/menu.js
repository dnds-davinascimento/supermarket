'use client';
import { useState } from 'react';
import styles from "./menu.module.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import MenuItem from "./menuIten";
import { FaChartBar, FaCog } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlineCash } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import { MdMenu } from "react-icons/md";

export default function Menu_Toogle() {

  const router = useRouter();

  function sair() {
    localStorage.removeItem("token");
    sessionStorage.clear();
    localStorage.clear();
    router.push("/login");
  }

  const [listacadastroVisivel, setListacadastroVisivel] = useState(false);
  const [listaestoqueVisivel, setListaestoqueVisivel] = useState(false);
  const [listavendasVisivel, setListavendasVisivel] = useState(false);
  const [listafinaceiroVisivel, setListafinaceiroVisivel] = useState(false);
  const [listadashboardsVisivel, setListadashboardsVisivel] = useState(false);
  const [listaLogisticaVisivel, setListaLogisticaVisivel] = useState(false);

  const toggleListacadastro = () => {
    setListacadastroVisivel(!listacadastroVisivel);
  };

  const toggleListaestoque = () => {
    setListaestoqueVisivel(!listaestoqueVisivel);
  };
  const toggleListavendas = () => {
    setListavendasVisivel(!listavendasVisivel);
  };
  const toggleListafinaceiros = () => {
    setListafinaceiroVisivel(!listafinaceiroVisivel);
  };
  const toggleLogistica = () => {
    setListaLogisticaVisivel(!listaLogisticaVisivel);
  };
  const toggleListadashboards = () => {
    setListadashboardsVisivel(!listadashboardsVisivel);
  };
  const [menuVisivel, setMenuVisivel] = useState(false);

  const toggleMenuVisivel = () => {
    setMenuVisivel(!menuVisivel);
  };
  return (
    <>
      <div
        className={`${styles.menu_toogle} ${
          menuVisivel ? styles.hidden : styles.visible
        }`}
        onClick={toggleMenuVisivel}
      >
        <div>
          <MdMenu size={50} color="000" />
        </div>
      </div>

      {/* {!menuVisivel && (  
        )}
     */}
      <div
        className={`${styles.container_geral_novo} ${
          menuVisivel ? styles.visiblemenu : styles.hidden
        }`}
      >
        <div className={styles.conteiner_logo}>
 {/*  <Image
            src="/icon.png"
            alt="Picture of the author"
            width={50}
            height={50}
          /> */}

          <h1>Market</h1>
          <div>
            <FaArrowLeft size={30} color="fff" onClick={toggleMenuVisivel} />
          </div>
        </div>
        <div className={styles.conteiner_menu}>
          <div className={styles.conteiner_nav}>
            <div>
              <div className={styles.conteiner_li}>
                <FaChartBar size={35} color="fff" />
                Explorar{" "}
                <div
                  className={styles.button_nav}
                  onClick={toggleListadashboards}
                >
                  {listadashboardsVisivel ? (
                    <IoIosArrowUp size={25} color="fff" />
                  ) : (
                    <IoIosArrowDown size={25} color="fff" />
                  )}
                </div>
              </div>
              {listadashboardsVisivel ? (
                <div>
                  <div className={styles.itens_de_menu}>
                    <div>
                      <a className={styles.itens_de_menu_a} href="/painel">
                        Ver Produtos
                      </a>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className={styles.conteiner_li}>
                <FaChartBar size={35} color="fff" />
                Compras{" "}
                <div
                  className={styles.button_nav}
                  onClick={toggleListadashboards}
                >
                  {listadashboardsVisivel ? (
                    <IoIosArrowUp size={25} color="fff" />
                  ) : (
                    <IoIosArrowDown size={25} color="fff" />
                  )}
                </div>
              </div>
              {listadashboardsVisivel ? (
                <div>
                  <div className={styles.itens_de_menu}>
                    <div>
                      <a className={styles.itens_de_menu_a} href="/painel">
                        Minhas Compras
                      </a>
                    </div>
                  </div>
                </div>
              ) : null}
             {/*  <div className={styles.conteiner_ul}>
                <div className={styles.conteiner_li}>
                  <BsPencilSquare size={35} color="fff" />
                  Categorias
                  <div
                    className={styles.button_nav}
                    onClick={toggleListacadastro}
                  >
                    {listacadastroVisivel ? (
                      <IoIosArrowUp size={25} color="fff" />
                    ) : (
                      <IoIosArrowDown size={25} color="fff" />
                    )}
                  </div>
                </div>

                {listacadastroVisivel ? (
                  <div>
                    <div className={styles.itens_de_menu}>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/fornecedores"
                        >
                          Fornecedores
                        </a>
                      </div>

                      <div>
                        <a className={styles.itens_de_menu_a} href="/loja">
                          Lojas
                        </a>
                      </div>
                      <div>
                        <a className={styles.itens_de_menu_a} href="/cliente">
                          Clientes
                        </a>
                      </div>
                      <div>
                        <a className={styles.itens_de_menu_a} href="/produto">
                          Produtos
                        </a>
                      </div>
                      <div>
                        <a className={styles.itens_de_menu_a} href="/usuarios">
                          Usuários
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className={styles.conteiner_li}>
                  <AiOutlineInbox size={35} color="fff" />
                  Estoque
                  <div
                    className={styles.button_nav}
                    onClick={toggleListaestoque}
                  >
                    {listaestoqueVisivel ? (
                      <IoIosArrowUp size={25} color="fff" />
                    ) : (
                      <IoIosArrowDown size={25} color="fff" />
                    )}
                  </div>
                </div>
                {listaestoqueVisivel ? (
                  <div>
                    <div className={styles.itens_de_menu}>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/inventario"
                        >
                          Inventário
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/listas_de_produtos_para_req"
                        >
                          Produtos para requisição
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/req_estoque"
                        >
                          Requisições de estoque
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/lista_de_transferencia"
                        >
                          Lista de transferência
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className={styles.conteiner_li}>
                  <LiaCashRegisterSolid size={35} color="fff" />
                  Vendas{" "}
                  <div
                    className={styles.button_nav}
                    onClick={toggleListavendas}
                  >
                    {listavendasVisivel ? (
                      <IoIosArrowUp size={25} color="fff" />
                    ) : (
                      <IoIosArrowDown size={25} color="fff" />
                    )}
                  </div>
                </div>
                {listavendasVisivel ? (
                  <div>
                    <div className={styles.itens_de_menu}>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/meuterminal"
                        >
                          Terminal
                        </a>
                      </div>
                      <div>
                        <a className={styles.itens_de_menu_a} href="/vendas">
                          Vendas
                        </a>
                      </div>

                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/nfe_emitidas"
                        >
                          NFE Emitidas
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/nfc_e_emitidas"
                        >
                          NFC-E Emitidas
                        </a>
                      </div>
                      <div>
                        <a className={styles.itens_de_menu_a} href="/orcamento">
                          Orçamentos
                        </a>
                      </div>
                      <div>
                        <a className={styles.itens_de_menu_a} href="/entregas">
                          Entregas
                        </a>
                      </div>
                      <div>
                        <a className={styles.itens_de_menu_a} href="/sessoes">
                          Sessões
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/sessoes_loja"
                        >
                          Sessão por loja
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className={styles.conteiner_li}>
                  <HiOutlineCash size={35} color="fff" />
                  Financeiro
                  <div
                    className={styles.button_nav}
                    onClick={toggleListafinaceiros}
                  >
                    {listafinaceiroVisivel ? (
                      <IoIosArrowUp size={25} color="fff" />
                    ) : (
                      <IoIosArrowDown size={25} color="fff" />
                    )}
                  </div>
                </div>
                {listafinaceiroVisivel ? (
                  <div>
                    <div className={styles.itens_de_menu}>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/contas_a_receber"
                        >
                          Contas a receber
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/contas_pagar"
                        >
                          Contas a pagar
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/despesas_fixas"
                        >
                          Despesas fixas
                        </a>
                      </div>

                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/despesasvariaveis"
                        >
                          Despesas variáveis
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/contas_funcionarios"
                        >
                          Conta funcionários
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className={styles.conteiner_li}>
                  <TbTruckDelivery size={35} color="fff" />
                  Logistica
                  <div className={styles.button_nav} onClick={toggleLogistica}>
                    {listaLogisticaVisivel ? (
                      <IoIosArrowUp size={25} color="fff" />
                    ) : (
                      <IoIosArrowDown size={25} color="fff" />
                    )}
                  </div>
                </div>
                {listaLogisticaVisivel ? (
                  <div>
                    <div className={styles.itens_de_menu}>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/entregas"
                        >
                          Entregas
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/transporte_listagem_logistica"
                        >
                          Transporte
                        </a>
                      </div>
                      <div>
                        <a
                          className={styles.itens_de_menu_a}
                          href="/"
                        >
                          Rotas
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className={styles.conteiner_li}>
                  <MenuItem
                    icon={<GoGear size={30} color="#fff" text="PAINEL" />}
                  />
                </div>
                <div className={styles.conteiner_li}>
                  <MenuItem
                    icon={<RxExit size={30} color="#fff" />}
                    onClick={sair}
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* {menuVisivel && (
      )} */}
    </>
  );
}
