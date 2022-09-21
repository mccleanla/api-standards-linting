# HTTP 406 Not Acceptable

---
creation_date: 2022-03-08
decision_date: 2022-03-08
status: accepted
---

## Context
A 406 Not Acceptable error is returned when the consumer makes a request with a value in a content negotiation header that the producer can't handle. For example the consumer might request a version, a media type or a language etc. that the producer does not support. Declaring a 406 as a response makes it clear to the consumer why their request failed. 

## Decision
Add a rule that resources that can provide a response body must declare a response for an HTTP 406 Not Acceptable.