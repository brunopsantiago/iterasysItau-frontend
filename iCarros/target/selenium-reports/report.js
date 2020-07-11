$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("busca.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": ": Busca de veiculos",
  "description": "",
  "id": ":-busca-de-veiculos",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 6855193900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Buscar lista de veículos",
  "description": "",
  "id": ":-busca-de-veiculos;buscar-lista-de-veículos",
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
  "name": "informo marca \"Toyota\" e modelo \"Corolla\"",
  "keyword": "E "
});
formatter.step({
  "line": 7,
  "name": "realizo uma busca",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "é exibido uma lista de veículos",
  "keyword": "Então "
});
formatter.match({
  "location": "Steps.que_entro_no_site_iCarros()"
});
formatter.result({
  "duration": 2345271500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 15
    },
    {
      "val": "Corolla",
      "offset": 33
    }
  ],
  "location": "Steps.informo_marca_e_modelo(String,String)"
});
formatter.result({
  "duration": 1219203800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.realizo_uma_busca()"
});
formatter.result({
  "duration": 1187938900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.uma_é_exibido_uma_lista_de_veículos()"
});
formatter.result({
  "duration": 146027800,
  "status": "passed"
});
formatter.after({
  "duration": 1363071200,
  "status": "passed"
});
});