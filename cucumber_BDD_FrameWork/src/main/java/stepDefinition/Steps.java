package stepDefinition;

import static org.junit.Assert.assertThat;
import org.hamcrest.Matchers;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class Steps {

	public Response response = null;
	String responseBody = "";
	JSONObject jsonObj = null;
	JSONParser parser = null;

	@Given("^user hits weather \"(.*)\" api$")
	public void getTheWeatherAPI(String baseUrl) throws Throwable {
		RestAssured.baseURI = baseUrl;
	}

	@When("^fetches weather data for specific city \"([^\"]*)\"$")
	public void hitTheGetMethod(String cityName) throws Throwable {
		RequestSpecification httpRequest = RestAssured.given();
		response = httpRequest.get("/" + cityName);

	}

	@Then("^validates the api response$")
	public void responseValidation() throws Throwable {
		System.out.println(response.getBody().asString());
	}

	@Given("^customer hits users api \"([^\"]*)\"$")
	public void customer_hits_users_api(String baseUrl) throws Throwable {
		RestAssured.baseURI = baseUrl;
	}

	@When("^fetches fetches data for specific page (\\d+)$")
	public void fetches_fetches_data_for_specific_page(int pageNo) throws Throwable {

		RequestSpecification httpRequest = RestAssured.given();
		response = httpRequest.get("?page=" + pageNo);
	}

	@Then("^validates the page number in response is (\\d+)$")
	public void validates_the_page_number_in_response(int expectedPageNo) throws Throwable {
		System.out.println(response.getBody().asString());

		responseBody = response.getBody().asString();
		parser = new JSONParser();
		jsonObj = (JSONObject) parser.parse(responseBody);
		assertThat("Check if response contains expected page number" + expectedPageNo,
				Integer.parseInt(jsonObj.get("page").toString()) == expectedPageNo, Matchers.equalTo(true));
	}

}
