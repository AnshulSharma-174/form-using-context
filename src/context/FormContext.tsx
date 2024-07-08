import React, { ChangeEvent, Children, ReactNode, createContext, useState } from 'react'

interface FormContextProps {
  firstName: string,
  lastName: string,
  age: string,
  dob: string,
  handleFirstName: (e:ChangeEvent<HTMLInputElement>) => void,
  handleLastName: (e:ChangeEvent<HTMLInputElement>) => void,
  handleAge: (e:ChangeEvent<HTMLInputElement>) => void,
  handleDob: (e:ChangeEvent<HTMLInputElement>) => void
}
const FormContext = createContext<FormContextProps | undefined>(undefined)
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [dob, setDob] = useState('')

  const handleFirstName = (e:ChangeEvent<HTMLInputElement>) =>{
    setFirstName(e.target.value)
  }
  const handleLastName = (e:ChangeEvent<HTMLInputElement>) =>{
    setLastName(e.target.value)
  }
  const handleAge = (e:ChangeEvent<HTMLInputElement>) =>{
    setAge(e.target.value)
  }
  const handleDob = (e:ChangeEvent<HTMLInputElement>) =>{
    setDob(e.target.value)
  }
  return (

    <FormContext.Provider
      value={{
        firstName,
        lastName,
        age,
        dob,
        handleFirstName,
        handleLastName,
        handleAge,
        handleDob
      }}
    >
      {children}

    </FormContext.Provider>

  )
};

export const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a FormProvider');
  }
  return context;
};
