Feature: defaultSQL : Test the default SQL Package
  Scenario: Run a query
      And FAKE query from string "SELECT * FROM driveruser limit 1" is run