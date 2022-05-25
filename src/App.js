/* eslint-disable no-sequences */
import React from 'react';

function App ( props ) {

  const mudarNome = (event) => {
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  return(
    <>
      {criaComboBox()}
      <h1>Hello {props.nome}</h1>
      <input type="text" value={props.nome} onChange={mudarNome} />
    </>
  )
}

export default App;
