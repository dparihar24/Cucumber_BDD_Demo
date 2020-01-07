Feature: weather api functionality validation   

Scenario: verify the weather api response 
Given user hits weather "http://restapi.demoqa.com/utilities/weather/city" api		
When fetches weather data for specific city "delhi"		
Then validates the api response