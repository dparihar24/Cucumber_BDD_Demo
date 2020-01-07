$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GET_METHOD/getMethod.feature");
formatter.feature({
  "line": 1,
  "name": "weather api functionality validation",
  "description": "",
  "id": "weather-api-functionality-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify the weather api response",
  "description": "",
  "id": "weather-api-functionality-validation;verify-the-weather-api-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user hits weather \"http://restapi.demoqa.com/utilities/weather/city\" api",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "fetches weather data for specific city \"delhi\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "validates the api response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://restapi.demoqa.com/utilities/weather/city",
      "offset": 19
    }
  ],
  "location": "Steps.getTheWeatherAPI(String)"
});
formatter.result({
  "duration": 459856300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delhi",
      "offset": 40
    }
  ],
  "location": "Steps.hitTheGetMethod(String)"
});
formatter.result({
  "duration": 2165340500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.responseValidation()"
});
formatter.result({
  "duration": 20009600,
  "status": "passed"
});
formatter.uri("GET_METHOD/pagination_validation.feature");
formatter.feature({
  "line": 1,
  "name": "Pagination validation on employee information page",
  "description": "",
  "id": "pagination-validation-on-employee-information-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify if user is able to get information on specific page",
  "description": "",
  "id": "pagination-validation-on-employee-information-page;verify-if-user-is-able-to-get-information-on-specific-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "customer hits users api \"https://reqres.in/api/users\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "fetches fetches data for specific page 2",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "validates the page number in response is 2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://reqres.in/api/users",
      "offset": 25
    }
  ],
  "location": "Steps.customer_hits_users_api(String)"
});
formatter.result({
  "duration": 86300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "Steps.fetches_fetches_data_for_specific_page(int)"
});
formatter.result({
  "duration": 981513900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "Steps.validates_the_page_number_in_response(int)"
});
formatter.result({
  "duration": 19717900,
  "status": "passed"
});
});