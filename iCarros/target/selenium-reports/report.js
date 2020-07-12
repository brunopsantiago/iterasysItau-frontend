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
  "duration": 6778842900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#  Cenario: Buscar lista de veículos"
    },
    {
      "line": 5,
      "value": "#    Dado que entro no site iCarros"
    },
    {
      "line": 6,
      "value": "#    E procuro um \"Toyota\" \"Corolla\" usado"
    },
    {
      "line": 7,
      "value": "#    Quando realizo uma busca"
    },
    {
      "line": 8,
      "value": "#    Então a mensagem \"Toyota Corolla usados\" é exibida"
    },
    {
      "line": 9,
      "value": "#    E é exibido uma lista de veículos"
    },
    {
      "line": 11,
      "value": "#  Cenario: Retornar veiculos até 100 mil"
    },
    {
      "line": 12,
      "value": "#    Dado que entro no site iCarros"
    },
    {
      "line": 13,
      "value": "#    E procuro um \"Volkswagen\" \"Polo\" novo de até \"100\" mil"
    },
    {
      "line": 14,
      "value": "#    Quando realizo uma busca"
    },
    {
      "line": 15,
      "value": "#    Então a mensagem \"Volkswagen Polo 0km\" é exibida"
    },
    {
      "line": 16,
      "value": "#   E é exibido uma lista de veículos"
    }
  ],
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
  "name": "procuro um \"Ford\" \"Fusion\" usado",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "realizo uma busca",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "a mensagem \"Ford Fusion usados\" é exibida",
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
  "duration": 1876913900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 12
    },
    {
      "val": "Fusion",
      "offset": 19
    }
  ],
  "location": "BuscaSteps.informo_marca_e_modelo(String,String)"
});
formatter.result({
  "duration": 2733468400,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.realizo_uma_busca()"
});
formatter.result({
  "duration": 469439500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford Fusion usados",
      "offset": 12
    }
  ],
  "location": "BuscaSteps.a_mensagem_é_exibida(String)"
});
formatter.result({
  "duration": 630054700,
  "status": "passed"
});
formatter.match({
  "location": "BuscaSteps.é_exibido_o_modelo_e_valor_dos_dois_primeiros_veículos()"
});
formatter.result({
  "duration": 20056307300,
  "error_message": "java.lang.IllegalArgumentException: Argument is of an illegal type: org.openqa.selenium.By$ByTagName\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:85)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:79)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:79)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:514)\r\n\tat org.openqa.selenium.support.locators.RelativeLocator$RelativeBy.findElements(RelativeLocator.java:176)\r\n\tat org.openqa.selenium.By.findElement(By.java:132)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat br.com.icarros.stepdefs.BuscaSteps.é_exibido_o_modelo_e_valor_dos_dois_primeiros_veículos(BuscaSteps.java:111)\r\n\tat ✽.E é exibido o modelo e valor dos dois primeiros veículos(Busca.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 698574600,
  "status": "passed"
});
});