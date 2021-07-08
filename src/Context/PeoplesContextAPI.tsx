import { IPeopleData } from 'libs/IPeopleData';
import { createContext, useState, ReactNode } from 'react';
import { Intitialvalue } from './DefaultData';

interface IPeoplesContextProps{
  peopleActive: IPeopleData,
  getRandomPeople: () => void;
}

export const PeopleContextAPI = createContext({} as IPeoplesContextProps);

interface ContextProps{
  children: ReactNode
}

export function PeopleContextProvider({children}: ContextProps){

  const [peopleActive, setPeopleActive] = useState<IPeopleData>(Intitialvalue);

  async function getRandomPeople(){
    /* 
      Codigo a ser feito...
    */
  }

  return(
    <PeopleContextAPI.Provider
      value={{
        peopleActive,
        getRandomPeople
      }}
    >
      {children}
    </PeopleContextAPI.Provider>
  )
}