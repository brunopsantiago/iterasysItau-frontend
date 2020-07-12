package br.com.icarros.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class listaCarrosPage {

    WebDriver driver;

    By anuncios = By.id("anunciosForm");
    By carroEncontrado = By.cssSelector("li[class='anuncio anuncio_1ª_prioridade']");

    public listaCarrosPage(WebDriver driver){

        this.driver = driver;
    }

    public void encontrarListaCarros (){
        driver.findElement(anuncios);

        List<WebElement> divCarro = driver.findElements(carroEncontrado);
        System.out.println("----- Lista -----");
        for (WebElement element : divCarro) {
            System.out.println(element.getText());
            System.out.println("-----------------");
        }
    }

}
