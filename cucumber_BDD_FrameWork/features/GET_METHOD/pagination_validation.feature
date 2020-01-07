Feature: Pagination validation on employee information page

Scenario: verify if user is able to get information on specific page 
Given customer hits users api "https://reqres.in/api/users"	
When fetches fetches data for specific page 2		
Then validates the page number in response is 2