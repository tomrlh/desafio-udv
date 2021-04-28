import React, { useState, useEffect, createContext } from "react";
import { Funcionario } from "types/Funcionario";

interface FuncionarioContextData {
  funcionarios: Funcionario[];
  setFuncionarios: Function;
  addFuncionario: Function;
  atualizarFuncionario: Function;
  removeFuncionario: Function;
  selectedFuncionario: Funcionario;
  setSelectedFuncionario: Function;
}

export const FuncionarioContext = createContext<FuncionarioContextData>(
  {} as FuncionarioContextData
);

const FuncionarioProvider = (props: { children: React.ReactNode }) => {
  const [funcionarios, setFuncionariosArray] = useState<Funcionario[]>(
    {} as Funcionario[]
  );
  const [selectedFuncionario, setSelectedFuncionarioObject] = useState<
    Funcionario
  >({} as Funcionario);

  // saves in the localStorage
  const setFuncionarios = (funcionarios: Funcionario[]) => {
    setFuncionariosArray(funcionarios);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
  };

  const setSelectedFuncionario = (funcionario: Funcionario) => {
    setSelectedFuncionarioObject(funcionario);
    localStorage.setItem("selectedFuncionario", JSON.stringify(funcionario));
  };

  const addFuncionario = (newFuncionario: Funcionario) => {
    funcionarios.push(newFuncionario);
    setFuncionarios([...funcionarios]);
  };

  const atualizarFuncionario = (updatedFuncionario: Funcionario) => {
    let newFuncionarios = funcionarios.map(funcionario => {
      if (funcionario.id === updatedFuncionario.id) {
        return updatedFuncionario;
      }
      return funcionario;
    });
    setFuncionarios([...newFuncionarios]);
  };

  const removeFuncionario = (funcionarioToRemove: Funcionario) => {
    let funcionariosUpdated = funcionarios.filter(
      funcionario => funcionario.id !== funcionarioToRemove.id
    );
    setFuncionarios([...funcionariosUpdated]);
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedFuncionarios = localStorage.getItem("funcionarios");
      const storagedSelectedFuncionario = localStorage.getItem(
        "selectedFuncionario"
      );
      if (storagedFuncionarios) {
        setFuncionariosArray(JSON.parse(storagedFuncionarios));
      }
      if (storagedSelectedFuncionario) {
        setFuncionariosArray(JSON.parse(storagedSelectedFuncionario));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <FuncionarioContext.Provider
      value={{
        funcionarios,
        setFuncionarios,
        selectedFuncionario,
        setSelectedFuncionario,
        addFuncionario,
        atualizarFuncionario,
        removeFuncionario
      }}
    >
      {props.children}
    </FuncionarioContext.Provider>
  );
};

export default FuncionarioProvider;
