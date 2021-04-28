import React, { useState, useEffect, createContext } from "react";
import { Cargo } from "types/Cargo";

interface CargoContextData {
  cargos: Cargo[];
  setCargos: Function;
  addCargo: Function;
  atualizarCargo: Function;
  removeCargo: Function;
  selectedCargo: Cargo;
  setSelectedCargo: Function;
}

export const CargoContext = createContext<CargoContextData>(
  {} as CargoContextData
);

const CargoProvider = (props: { children: React.ReactNode }) => {
  const [cargos, setCargosArray] = useState<Cargo[]>({} as Cargo[]);
  const [selectedCargo, setSelectedCargoObject] = useState<Cargo>({} as Cargo);

  // saves in the localStorage
  const setCargos = (cargos: Cargo[]) => {
    setCargosArray(cargos);
    localStorage.setItem("cargos", JSON.stringify(cargos));
  };

  const setSelectedCargo = (cargo: Cargo) => {
    setSelectedCargoObject(cargo);
    localStorage.setItem("selectedCargo", JSON.stringify(cargo));
  };

  const addCargo = (newCargo: Cargo) => {
    cargos.push(newCargo);
    setCargos([...cargos]);
  };

  const atualizarCargo = (updatedCargo: Cargo) => {
    let newCargos = cargos.map(cargo => {
      if (cargo.id === updatedCargo.id) {
        return updatedCargo;
      }
      return cargo;
    });
    setCargos([...newCargos]);
  };

  const removeCargo = (cargoToRemove: Cargo) => {
    let cargosUpdated = cargos.filter(cargo => cargo.id !== cargoToRemove.id);
    setCargos([...cargosUpdated]);
  };

  useEffect(() => {
    const loadStoragedData = () => {
      const storagedCargos = localStorage.getItem("cargos");
      const storagedSelectedCargo = localStorage.getItem("selectedCargo");
      if (storagedCargos) {
        setCargosArray(JSON.parse(storagedCargos));
      }
      if (storagedSelectedCargo) {
        setCargosArray(JSON.parse(storagedSelectedCargo));
      }
    };
    loadStoragedData();
  }, []);

  return (
    <CargoContext.Provider
      value={{
        cargos,
        setCargos,
        selectedCargo,
        setSelectedCargo,
        addCargo,
        atualizarCargo,
        removeCargo
      }}
    >
      {props.children}
    </CargoContext.Provider>
  );
};

export default CargoProvider;
