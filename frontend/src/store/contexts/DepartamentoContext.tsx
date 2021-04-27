import React, { useState, useEffect, createContext } from "react";
import { Departamento } from "types/Departamento";

interface DepartamentoContextData {
  departamentos: Departamento[];
  setDepartamentos: Function;
  addDepartamento: Function;
  atualizarDepartamento: Function;
  removeDepartamento: Function;
  selectedDepartamento: Departamento;
  setSelectedDepartamento: Function;
}

export const DepartamentoContext = createContext<DepartamentoContextData>(
  {} as DepartamentoContextData
);

const DepartamentoProvider = (props: { children: React.ReactNode }) => {
  const [departamentos, setDepartamentosArray] = useState<Departamento[]>(
    {} as Departamento[]
  );
  const [selectedDepartamento, setSelectedDepartamentoObject] = useState<
    Departamento
  >({} as Departamento);

  // saves in the localStorage
  const setDepartamentos = (departamentos: Departamento[]) => {
    setDepartamentosArray(departamentos);
    localStorage.setItem("departamentos", JSON.stringify(departamentos));
  };

  const setSelectedDepartamento = (departamento: Departamento) => {
    setSelectedDepartamentoObject(departamento);
    localStorage.setItem("selectedDepartamento", JSON.stringify(departamento));
  };

  const addDepartamento = (newDepartamento: Departamento) => {
    console.log("NEW", newDepartamento);
    departamentos.push(newDepartamento);
    setDepartamentos([...departamentos]);
  };

  const atualizarDepartamento = (updatedDepartamento: Departamento) => {
    let newDepartamentos = departamentos.map(departamento => {
      if (departamento.id === updatedDepartamento.id) {
        return updatedDepartamento;
      }
      return departamento;
    });
    setDepartamentos([...newDepartamentos]);
  };

  const removeDepartamento = (departamentoToRemove: Departamento) => {
    let departamentosUpdated = departamentos.filter(
      departamento => departamento.id !== departamentoToRemove.id
    );
    setDepartamentos([...departamentosUpdated]);
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedDepartamentos = localStorage.getItem("departamentos");
      const storagedSelectedDepartamento = localStorage.getItem(
        "selectedDepartamento"
      );
      if (storagedDepartamentos) {
        setDepartamentosArray(JSON.parse(storagedDepartamentos));
      }
      if (storagedSelectedDepartamento) {
        setDepartamentosArray(JSON.parse(storagedSelectedDepartamento));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <DepartamentoContext.Provider
      value={{
        departamentos,
        setDepartamentos,
        selectedDepartamento,
        setSelectedDepartamento,
        addDepartamento,
        atualizarDepartamento,
        removeDepartamento
      }}
    >
      {props.children}
    </DepartamentoContext.Provider>
  );
};

export default DepartamentoProvider;
