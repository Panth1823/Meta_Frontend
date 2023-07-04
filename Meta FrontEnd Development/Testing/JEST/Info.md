JEST:
=> Jest is a JavaScript testing framework that is commonly used for testing React applications, but can also be used for testing any JavaScript code. It provides a simple and intuitive way to write unit tests and comes with built-in mocking capabilities.


Code coverage :

=> It is a metric used to measure how much of your code is being executed by your tests. It is expressed as a percentage and represents the amount of code that is covered by your tests. Code coverage can help you identify areas of your code that are not being tested and can help you ensure that your tests are thorough. In the context of Jest, code coverage can be generated using the --coverage flag when running your tests. This will generate a coverage report that shows which lines of code were executed by your tests and which lines were not.

Mocking:

=> It is a technique used in testing to replace a real object or function with a fake one. The purpose of mocking is to isolate the code being tested from its dependencies, so that the test can focus on the behavior of the code itself. In Jest, mocking is built-in and can be done using the jest.mock() function. This function allows you to replace a module with a mock implementation, or to create a mock function that can be used in place of a real function. Mocking can be especially useful when testing code that relies on external services or APIs, as it allows you to simulate those services without actually making real requests.