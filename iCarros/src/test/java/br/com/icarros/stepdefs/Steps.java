package br.com.icarros.stepdefs;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.logging.Logger;

import static org.hamcrest.CoreMatchers.containsString;



public class Steps {

    String url;
    WebDriver driver;

    Logger log;

    @Before
    public void inicializar(){
        url = "https://www.icarros.com.br/principal/index.jsp";
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\bpsan\\Documents\\Projetos\\iterasysItau\\iterasysItau-frontend\\iCarros\\driver\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @After
    public void finalizar(){
        driver.quit();
    }

    @Dado("^que entro no site iCarros$")
    public void que_entro_no_site_iCarros() throws Throwable {
        driver.get(url);
        driver.findElement(By.id("sltMake"));
        //log.info("Dado que entro no site iCarros");
    }

    @Dado("^informo marca \"([^\"]*)\" e modelo \"([^\"]*)\"$")
    public void informo_marca_e_modelo(String marca, String modelo) throws Throwable {
        driver.findElement(By.linkText("Marca"));
        driver.findElement((By.xpath("//*[@id=\"buscaForm\"]/div[2]/div[1]/div/div/div/div/button"))).click();
        driver.findElement(By.className("form-control")).sendKeys((Keys.chord(marca)));
        driver.findElement(By.className("form-control")).sendKeys(Keys.ENTER);
        driver.findElement(By.linkText("Modelo"));
        driver.findElement(By.xpath("//*[@id=\"buscaForm\"]/div[2]/div[2]/div/div/div/div/div/div/input")).sendKeys((Keys.chord(modelo)));
        driver.findElement(By.xpath("//*[@id=\"buscaForm\"]/div[2]/div[2]/div/div/div/div/div/div/input")).sendKeys(Keys.ENTER);

        //log.info("E informo uma marca X");
    }

    @Quando("^realizo uma busca$")
    public void realizo_uma_busca() throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"buscaForm\"]/div[4]/div[2]/button")).click();
    }

    @Então("^é exibido uma lista de veículos$")
    public void uma_é_exibido_uma_lista_de_veículos() throws Throwable {
        String carroEncontrado = driver.findElement(By.className("titulo")).getText();

        Assert.assertThat(carroEncontrado, containsString("Toyota Corolla em Barueri - SP"));

    }


}
