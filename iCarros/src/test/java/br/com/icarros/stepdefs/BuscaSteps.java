package br.com.icarros.stepdefs;

import br.com.icarros.pages.buscaPage;
import br.com.icarros.pages.listaCarrosPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.hamcrest.CoreMatchers.containsString;

public class BuscaSteps {

    String url;
    WebDriver driver;

    @Before
    public void inicializar(){
        url = "https://www.icarros.com.br/principal/index.jsp";
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\bpsan\\Documents\\Projetos\\iterasysItau\\iterasysItau-frontend\\iCarros\\driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

        System.out.println("Inicializando browser");
    }

    @After
    public void finalizar(){
        driver.quit();

        System.out.println("Finalizando browser");
    }

    @Dado("^que entro no site iCarros$")
    public void que_entro_no_site_iCarros() throws Throwable {
        driver.get(url);

        buscaPage buscarVeiculoUsado = new buscaPage(driver);
        buscarVeiculoUsado.validaFrasePagina();

        System.out.println("Dado que entro no site iCarros");
    }

    @Dado("^procuro um \"([^\"]*)\" \"([^\"]*)\" usado$")
    public void informo_marca_e_modelo(String marca, String modelo) throws Throwable {
        buscaPage buscarVeiculoUsado = new buscaPage(driver);

        buscarVeiculoUsado.desmarcaCheckboxZeroKm();
        buscarVeiculoUsado.marcaCheckboxUsados();
        buscarVeiculoUsado.preencherMarca(marca);
        buscarVeiculoUsado.preencherModelo(modelo);

        System.out.println("E informo " +marca+ " " +modelo );
    }

    @Dado("^procuro um \"([^\"]*)\" \"([^\"]*)\" novo de até \"([^\"]*)\" mil$")
    public void procuro_um_novo(String marca, String modelo, String valor) throws Throwable {
        buscaPage buscarVeiculoUsado = new buscaPage(driver);

        buscarVeiculoUsado.marcaCheckboxZeroKm();
        buscarVeiculoUsado.desmarcaCheckboxUsados();
        buscarVeiculoUsado.preencherMarca(marca);
        buscarVeiculoUsado.preencherModelo(modelo);
        buscarVeiculoUsado.informarValorMax(valor);

        System.out.println("E informo " +marca+ " " +modelo+ "novo de até" +valor);
    }

    @Quando("^realizo uma busca$")
    public void realizo_uma_busca() throws Throwable {
        buscaPage buscarVeiculoUsado = new buscaPage(driver);

        buscarVeiculoUsado.clicarBuscar();

        System.out.println("Quando realizo uma busca");
    }

    @Então("^a mensagem \"([^\"]*)\" é exibida$")
    public void a_mensagem_é_exibida(String msg) throws Throwable {
        String carroEncontrado = driver.findElement(By.className("titulo")).getText();
        Assert.assertThat(carroEncontrado, containsString(msg));

        System.out.println("Então a mensagem "+msg+ " é exibida");
    }

    @Então("^é exibido uma lista de veículos$")
    public void uma_é_exibido_uma_lista_de_veículos() throws Throwable {
        listaCarrosPage listaVeiculosUsados = new listaCarrosPage(driver);

        listaVeiculosUsados.encontrarListaCarros();

        System.out.println("Então é exibido uma lista de veículos");
    }

    @Então("^é exibido o modelo e valor dos dois primeiros veículos$")
    public void é_exibido_o_modelo_e_valor_dos_dois_primeiros_veículos() throws Throwable {

        //WebElement h2 = driver.findElement(By.cssSelector("h2[class='esquerda titulo_anuncio']"));
        //WebElement aLink = driver.findElement(withTagName("a").above(By.cssSelector("div[class='badges-container']")));
       // System.out.println(aLink.getText());

        List<WebElement> divCarro = driver.findElements(By.cssSelector("h2[class='esquerda titulo_anuncio']"));
        for (WebElement element : divCarro) {
            System.out.println(element.getText());
            System.out.println("-----------------");
        }
    }

}
