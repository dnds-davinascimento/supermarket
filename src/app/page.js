'use client';
import React from "react";
import {useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { PiShirtFoldedThin } from "react-icons/pi";
import defaultImage from "../../public/images.jpeg";
import { FaComputer } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { GiBananaBunch } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from 'next/navigation';


export default function Home() {
  function getToken() {
    if (typeof window === 'undefined') {
      return null;
    }
  
    const token = localStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');
  console.log(token,userId)
    if (!token || !userId) {
      return null;
    }
  
    return { token, userId };
  }
      
      const router = useRouter();
      
      useEffect(() => {
        console.log("chamo aqui")
        const tokenAndUserId = getToken();
      
        if (!tokenAndUserId) {
          router.push('/login');
        }
      }, []);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const categories = [
    { icon: <PiShirtFoldedThin size={50} />, name: "Moda e Acessórios" },
    { icon: <FaComputer size={50} />, name: "Eletrônicos e Tecnologia" },
    { icon: <FaHome size={50} />, name: "Casa e Decoração" },
    { icon: <GiBananaBunch size={50} />, name: "Alimentos e Bebidas" },
    // adicione o restante das categorias aqui
  ];
  const data = [
 
    {
      _id:"jjuhu767677y",
      estoque: 6,
      nome: "Melancia",
      preco_de_venda: 99.67,
      produto_verify: true,
      enderecamento: "A17",
      codigo_interno: 1245,
    },
    {
      _id:"jjuhu767677ojoi",
      estoque: 6,
      nome: "Banana",
      preco_de_venda: 99.67,
      produto_verify: true,
      enderecamento: "A17",
      codigo_interno: 1246,
    },
    {
      _id:"jjuhu767677ysdwdw",
      estoque: 6,
      nome: "Goiba",
      preco_de_venda: 99.67,
      produto_verify: true,
      enderecamento: "A17",
      codigo_interno: 1247,
    },
    {
      _id:"jjuhu767677ysdwdws",
      estoque: 6,
      nome: "Manga",
      preco_de_venda: 99.67,
      produto_verify: true,
      enderecamento: "A17",
      codigo_interno: 1247,
    }
  ];
  function calculateItemTotal(item) {
    const totalVenda = item.quantidade * item.precoSelecionado;
    const precoTotal = totalVenda - item.desconto;

    return precoTotal;
  }
  function calculateTotalPriceWithDiscount(items) {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      const totalvenda = items[i].quantidade * items[i].precoSelecionado;
      totalPrice += totalvenda - items[i].desconto;
    }
    return totalPrice;
  }
  function addToCart(item) {
    const index = cartItems.findIndex((i) => i._id === item._id);

    // Define o preço que será utilizado para o cálculo
    const precoSelecionado = item.preco_de_venda

    const precoTotal = precoSelecionado * 1;


    if (item.estoque < 0) {
      // Emite o alerta na tela informando que o estoque do produto é zero ou negativo
      alert("O produto não está disponível em estoque.");
    }

    if (index >= 0) {
      const updatedItems = [...cartItems];
      // Verifica se a quantidade atualizada excede o estoque disponível
      if (updatedItems[index].quantidade + 1 > item.estoque) {
        // Emite o alerta na tela informando que só existem aquela quantidade disponível no estoque
        alert(
          "Só existem " + item.estoque + " unidades disponíveis no estoque."
        );
      }
      updatedItems[index].quantidade += 1;
      updatedItems[index].precoTotal += precoTotal;
      setCartItems(updatedItems);
    } else {
      const newItem = {
        ...item,
        precoSelecionado: precoSelecionado,
        precoOriginal: precoSelecionado,
        quantidade: 1,
        itemNumber: cartItems.length + 1,
        precoTotal,
        desconto: 0, // adiciona a propriedade desconto com o valor inicial de 0
      };

      setCartItems([...cartItems, newItem]);
    }

    setTotalPrice(totalPrice + precoTotal);
  }
  function removeFromCart(item) {
    const index = cartItems.findIndex((i) => i._id === item._id);

    if (index !== -1) {
      const updatedItems = [...cartItems];
      const selectedItem = updatedItems[index];

      if (selectedItem.quantidade > 0) {
        selectedItem.quantidade -= 1;

        // Atualizar o desconto proporcionalmente à alteração na quantidade
        const discountValue = selectedItem.desconto || 0;
        selectedItem.desconto =
          (discountValue * (selectedItem.quantidade + 1)) /
          (selectedItem.quantidade || 1);

        // Atualizar o preço total com desconto
        const precoSelecionado = selectedItem.preco_de_venda

        if (!isNaN(precoSelecionado)) {
          const precoTotal = calculateItemTotal(updatedItems);
          selectedItem.precoTotal = precoTotal;
        } else {
          selectedItem.precoTotal = 0; // Definir como 0 se o precoSelecionado não for um número válido
        }

        if (selectedItem.quantidade === 0) {
          updatedItems.splice(index, 1);
        }

        setCartItems(updatedItems);
        setTotalPrice(calculateTotalPriceWithDiscount(updatedItems));

        // Calcular o desconto total dos itens restantes no carrinho
        let totalDiscount = 0;
        updatedItems.forEach((item) => {
          totalDiscount += item.desconto || 0;
        });
        
      }
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.conteiner_hero}>
        <div className={styles.background_image}></div>
        <div className={styles.content_search}>
          <div className={styles.search}>
            {/* input para pesquisar produtos */}
            <CiSearch size={30} />
            <input type="text" placeholder="Pesquisar produtos" />
          </div>
          {/* incone de cart + profile em divs diferentes */}
          <div className={styles.content_profile_cart}>
          <div className={styles.cartIcon}>
  <span className={styles.cartItemCount}>{cartItems.length}</span>
  <FiShoppingCart size={30} />
</div>

            <div>
              <CgProfile size={30} />
            </div>
          </div>
        </div>
      </div>

      {/* CARROCEL DE CATEGORIA COM ICONES */}

      <div className={styles.content_category}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <div className={styles.icon_category}>{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      {/* PRODUTOS EM DESTAQUE */}
      <div className={styles.container_produtos}>
  {data.map((item) => {
    const cartItem = cartItems.find(cartItem => cartItem._id === item._id);
    return (
      <div key={item._id} className={styles.card_produto}>
        
        <Link className={styles.link_componet} href={`/editar_produto?id=${item._id}`}>
  <div className={styles.image_info}>
    <div className="styles__Wrapper-sc-e71gih-0 XtcKQ card-image">
      <div className="src__Wrapper-sc-xr9q25-1 ebFfaU lazy-picture">
        <Image
          className={styles.imagePlaceholder}
          priority="high"
          src={/* "https://images-americanas.b2w.io/produtos/01/00/img3/74856330/9/7485633098_1GG.jpg" || */ defaultImage}
          alt={item.nome}
          width={128}
          height={128}
        />
      </div>
    </div>
  </div>
  <div className={styles.Container_info}>
    <div className={styles.product_info}>
      <h3 className={styles.product_name}>
        {item.nome}
      </h3>
    </div>
    <div className={styles.price_info}>
      <span>
        R$ 1.299,00
      </span>
      <div className={styles.discount}>
        <svg width="10" height="11" viewBox="0 0 10 11" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M.79 5.17a.462.462 0 10-.655.655l4.435 4.437a.462.462 0 00.69.04L9.727 5.83a.463.463 0 00-.654-.654l-3.68 3.682V1.024a.462.462 0 10-.924 0v7.83L.79 5.17z" fill="#fff"></path>
        </svg>
      </div>
    </div>
    <div className={styles.final_price_info}>
      <span>
        R$ 1.169,10
      </span>
      <span>
        -10%
      </span>
    </div>
  </div>
</Link>

        <div className={styles.add_cart}>
        <p onClick={() => removeFromCart(item)}>-</p>
      
    {cartItem && item._id === cartItem._id ? (
        <span>{cartItem.quantidade}</span>
      ) : (
        <span>0</span>
      )}

          
         
          <p onClick={() => addToCart(item)}>+</p>
        </div>
      </div>
    );
  })}
</div>

    </div>
  );
}
