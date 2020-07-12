$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Busca.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Busca de veiculos",
  "description": "",
  "id": "busca-de-veiculos",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 6844181500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Buscar lista de veículos",
  "description": "",
  "id": "busca-de-veiculos;buscar-lista-de-veículos",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 5,
  "name": "que entro no site iCarros",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "procuro um \"Toyota\" \"Corolla\" usado",
  "keyword": "E "
});
formatter.step({
  "line": 7,
  "name": "realizo uma busca",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "a mensagem \"Toyota Corolla usados\" é exibida",
  "keyword": "Então "
});
formatter.step({
  "line": 9,
  "name": "é exibido uma lista de veículos",
  "keyword": "E "
});
formatter.match({
  "location": "BuscaSteps.que_entro_no_site_iCarros()"
});
formatter.result({
  "duration": 1786452700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 12
    },
    {
      "val": "Corolla",
      "offset": 21
    }
  ],
  "location": "BuscaSteps.informo_marca_e_modelo(String,String)"
});
formatter.result({
  "duration": 2516570200,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.realizo_uma_busca()"
});
formatter.result({
  "duration": 546453300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota Corolla usados",
      "offset": 12
    }
  ],
  "location": "BuscaSteps.a_mensagem_é_exibida(String)"
});
formatter.result({
  "duration": 705289400,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.uma_é_exibido_uma_lista_de_veículos()"
});
formatter.result({
  "duration": 1073507700,
  "status": "passed"
});
formatter.after({
  "duration": 779063700,
  "status": "passed"
});
formatter.before({
  "duration": 5351333800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Retornar veiculos até 100 mil",
  "description": "",
  "id": "busca-de-veiculos;retornar-veiculos-até-100-mil",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 12,
  "name": "que entro no site iCarros",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "procuro um \"Jeep\" \"Renegade\" novo de até \"100\" mil",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "realizo uma busca",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "a mensagem \"Jeep Renegade 0km\" é exibida",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "é exibido uma lista de veículos",
  "keyword": "E "
});
formatter.match({
  "location": "BuscaSteps.que_entro_no_site_iCarros()"
});
formatter.result({
  "duration": 3026060900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 12
    },
    {
      "val": "Renegade",
      "offset": 19
    },
    {
      "val": "100",
      "offset": 42
    }
  ],
  "location": "BuscaSteps.procuro_um_novo(String,String,String)"
});
formatter.result({
  "duration": 1259403900,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.realizo_uma_busca()"
});
formatter.result({
  "duration": 628863800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep Renegade 0km",
      "offset": 12
    }
  ],
  "location": "BuscaSteps.a_mensagem_é_exibida(String)"
});
formatter.result({
  "duration": 665415300,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.uma_é_exibido_uma_lista_de_veículos()"
});
formatter.result({
  "duration": 1129232300,
  "status": "passed"
});
formatter.after({
  "duration": 742890100,
  "status": "passed"
});
formatter.before({
  "duration": 5350089800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validar modelo e valor dos dois primeiros veículos da lista",
  "description": "",
  "id": "busca-de-veiculos;validar-modelo-e-valor-dos-dois-primeiros-veículos-da-lista",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 19,
  "name": "que entro no site iCarros",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "procuro um \"Citroen\" \"DS4\" usado",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "realizo uma busca",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "a mensagem \"Citroën DS4 usados\" é exibida",
  "keyword": "Então "
});
formatter.step({
  "line": 23,
  "name": "é exibido o modelo e valor dos dois primeiros veículos",
  "keyword": "E "
});
formatter.match({
  "location": "BuscaSteps.que_entro_no_site_iCarros()"
});
formatter.result({
  "duration": 2255909800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Citroen",
      "offset": 12
    },
    {
      "val": "DS4",
      "offset": 22
    }
  ],
  "location": "BuscaSteps.informo_marca_e_modelo(String,String)"
});
formatter.result({
  "duration": 1823740600,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.realizo_uma_busca()"
});
formatter.result({
  "duration": 1003622900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Citroën DS4 usados",
      "offset": 12
    }
  ],
  "location": "BuscaSteps.a_mensagem_é_exibida(String)"
});
formatter.result({
  "duration": 130843300,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.é_exibido_o_modelo_e_valor_dos_dois_primeiros_veículos()"
});
formatter.result({
  "duration": 186254800,
  "status": "passed"
});
formatter.after({
  "duration": 808384900,
  "status": "passed"
});
});