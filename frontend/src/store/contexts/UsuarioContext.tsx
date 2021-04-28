import React, { useState, useEffect, createContext } from "react";
import { Usuario } from "types/Usuario";

interface UsuarioContextData {
  usuarios: Usuario[];
  setUsuarios: Function;
  addUsuario: Function;
  atualizarUsuario: Function;
  removeUsuario: Function;
  selectedUsuario: Usuario;
  setSelectedUsuario: Function;
}

export const UsuarioContext = createContext<UsuarioContextData>(
  {} as UsuarioContextData
);

const UsuarioProvider = (props: { children: React.ReactNode }) => {
  const [usuarios, setUsuariosArray] = useState<Usuario[]>({} as Usuario[]);
  const [selectedUsuario, setSelectedUsuarioObject] = useState<Usuario>(
    {} as Usuario
  );

  // saves in the localStorage
  const setUsuarios = (usuarios: Usuario[]) => {
    setUsuariosArray(usuarios);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  const setSelectedUsuario = (usuario: Usuario) => {
    setSelectedUsuarioObject(usuario);
    localStorage.setItem("selectedUsuario", JSON.stringify(usuario));
  };

  const addUsuario = (newUsuario: Usuario) => {
    console.log("NEW", newUsuario);
    usuarios.push(newUsuario);
    setUsuarios([...usuarios]);
  };

  const atualizarUsuario = (updatedUsuario: Usuario) => {
    let newUsuarios = usuarios.map(usuario => {
      if (usuario.id === updatedUsuario.id) {
        return updatedUsuario;
      }
      return usuario;
    });
    setUsuarios([...newUsuarios]);
  };

  const removeUsuario = (usuarioToRemove: Usuario) => {
    let usuariosUpdated = usuarios.filter(
      usuario => usuario.id !== usuarioToRemove.id
    );
    setUsuarios([...usuariosUpdated]);
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedUsuarios = localStorage.getItem("usuarios");
      const storagedSelectedUsuario = localStorage.getItem("selectedUsuario");
      if (storagedUsuarios) {
        setUsuariosArray(JSON.parse(storagedUsuarios));
      }
      if (storagedSelectedUsuario) {
        setUsuariosArray(JSON.parse(storagedSelectedUsuario));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        setUsuarios,
        selectedUsuario,
        setSelectedUsuario,
        addUsuario,
        atualizarUsuario,
        removeUsuario
      }}
    >
      {props.children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;
