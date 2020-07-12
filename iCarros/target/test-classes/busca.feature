#language: pt

Funcionalidade: Busca de veiculos
#  Cenario: Buscar lista de veículos
#    Dado que entro no site iCarros
#    E procuro um "Toyota" "Corolla" usado
#    Quando realizo uma busca
#    Então a mensagem "Toyota Corolla usados" é exibida
#    E é exibido uma lista de veículos

#  Cenario: Retornar veiculos até 100 mil
#    Dado que entro no site iCarros
#    E procuro um "Volkswagen" "Polo" novo de até "100" mil
#    Quando realizo uma busca
#    Então a mensagem "Volkswagen Polo 0km" é exibida
 #   E é exibido uma lista de veículos

  Cenario: Validar modelo e valor dos dois primeiros veículos da lista
    Dado que entro no site iCarros
    E procuro um "Ford" "Fusion" usado
    Quando realizo uma busca
    Então a mensagem "Ford Fusion usados" é exibida
    E é exibido o modelo e valor dos dois primeiros veículos