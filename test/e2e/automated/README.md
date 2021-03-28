# Automated End-to-end Tests

This contains the original boilerplate tests, which are end-to-end tests. These tests are fully automated and test the system directly by making REST API calls with axios.

These tests function exactly the same as a normal user would, by making real REST API calls to the software. As a result, they are fine for testing internal system components like authorization and user handling. However, they are inappropriate for testing sophisticated endpoints that involve complex operations. For example, interacting with a blockchain, pinging other network systems, or writing data to a secondary database.

There is some redundancy between these tests and the unit tests. The focus is on *how* the tests are executed. The unit tests call the libraries directly (internally). These e2e tests use the REST API (externally).
