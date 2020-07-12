package br.com.icarros.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class buscaPage {

    WebDriver driver;

    By h1Titulo = By.cssSelector("h1[class='hero__title hero__title--new']");

    By checkboxZeroKm = By.id("anunciosNovos");
    By checkboxUsados = By.id("anunciosUsados");

    By btnMarca = By.cssSelector("button[title='Marca']");
    By inputMarca = By.cssSelector("input[class='form-control']");

    By btnModelo = By.cssSelector("button[title='Modelo']");
    By inputModelo = By.xpath("//*[@id=\"buscaForm\"]/div[2]/div[2]/div/div/div/div/div/div/input");

    By valorMax = By.cssSelector("button[title='Preço máx.']");
    By inputValor = By.xpath("//*[@id=\"buscaForm\"]/div[3]/div[4]/div/div/div/div/div/div/input");

    By btnBuscar = By.cssSelector("button[class='button button--primary button--large button--block']");


    public buscaPage(WebDriver driver){
        this.driver = driver;
    }

    public void validaFrasePagina(){
        driver.findElement(h1Titulo);
    }

    public void marcaCheckboxZeroKm(){
        if (!driver.findElement(checkboxZeroKm).isSelected() )
        {
            driver.findElement(checkboxZeroKm).click();
        }
    }

    public void desmarcaCheckboxZeroKm(){
        if (driver.findElement(checkboxZeroKm).isSelected() )
        {
            driver.findElement(checkboxZeroKm).click();
        }
    }

    public void marcaCheckboxUsados(){
        if (!driver.findElement(checkboxUsados).isSelected() )
        {
            driver.findElement(checkboxUsados).click();
        }
    }

    public void desmarcaCheckboxUsados(){
        if (driver.findElement(checkboxUsados).isSelected() )
        {
            driver.findElement(checkboxUsados).click();
        }
    }

    public void preencherMarca(String marca) {
        driver.findElement(btnMarca).click();
        driver.findElement(inputMarca).sendKeys(Keys.chord(marca));
        driver.findElement(inputMarca).sendKeys(Keys.ENTER);
    }

    public void preencherModelo(String modelo) {
        //driver.findElement(btnModelo).click();
        driver.findElement(inputModelo).sendKeys(Keys.chord(modelo));
        driver.findElement(inputModelo).sendKeys(Keys.ENTER);
    }

    public void informarValorMax(String valor){
        driver.findElement(valorMax).click();
        driver.findElement(inputValor).sendKeys(Keys.chord(valor));
        driver.findElement(inputValor).sendKeys(Keys.ENTER);
    }

    public void clicarBuscar() {
        driver.findElement(btnBuscar).click();
    }

    public void buscarModeloUsado(String marca, String modelo){

    }
    public void buscarModeloZeroKm(){}


}
