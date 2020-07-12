#language: pt

Funcionalidade: Busca de veiculos
  Cenario: Buscar lista de veículos
    Dado que entro no site iCarros
    E procuro um "Toyota" "Corolla" usado
    Quando realizo uma busca
    Então a mensagem "Toyota Corolla usados" é exibida
    E é exibido uma lista de veículos

  Cenario: Retornar veiculos até 100 mil
    Dado que entro no site iCarros
    E procuro um "Jeep" "Renegade" novo de até "100" mil
    Quando realizo uma busca
    Então a mensagem "Jeep Renegade 0km" é exibida
    E é exibido uma lista de veículos

  Cenario: Validar modelo e valor dos dois primeiros veículos da lista
    Dado que entro no site iCarros
    E procuro um "Citroen" "DS4" usado
    Quando realizo uma busca
    Então a mensagem "Citroën DS4 usados" é exibida
    E é exibido o modelo e valor dos dois primeiros veículos