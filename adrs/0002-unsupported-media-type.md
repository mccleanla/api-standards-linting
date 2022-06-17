# HTTP 415 Unsupported media type

---
creation_date: 2022-03-08
decision_date: 2022-03-08
status: accepted
---

## Context
A 415 Unsupported Media Type error is returned when the consumer makes a request with a payload in a format that is not supported by the provider. Declaring a 415 as a response makes it clear to the consumer why their request failed.

## Decision
Add a rule that resources that consume a request body must declare a response for an HTTP 415 Unsupported Media Type.