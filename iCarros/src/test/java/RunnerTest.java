import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        glue = "br.com.icarros.stepdefs",
        monochrome = true,
        plugin = "html:target/selenium-reports"

)
public class RunnerTest {


}
