"use client";

import React from "react";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="menu">
      <Image
        src="https://img.freepik.com/vetores-gratis/uma-cabeca-de-um-homem_1308-33466.jpg?w=740&t=st=1719024784~exp=1719025384~hmac=dfbee7f25b3ee0f57f22cf5f88a0c3b9860ed6f9edef3b182f251e3ed47bfeb8"
        alt="Ícone perfil"
        width={100}
        height={100}
      />
      <h2>João Silva</h2>
      <h4>Programador Front-End</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <ul>
        <li>
          <button type="button">Sobre mim</button>
        </li>
        <li>
          <button type="button">Projetos</button>
        </li>
        <li>
          <button type="button">Educação</button>
        </li>
        <li>
          <button type="button">Contato</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
