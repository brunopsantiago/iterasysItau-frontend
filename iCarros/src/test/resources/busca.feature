#language: pt

Funcionalidade: : Busca de veiculos
  Cenario: Buscar lista de veículos
    Dado que entro no site iCarros
    E informo marca "Toyota" e modelo "Corolla"
    Quando realizo uma busca
    Então é exibido uma lista de veículos
