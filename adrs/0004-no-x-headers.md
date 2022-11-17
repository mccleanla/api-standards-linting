# Header names should not begin with X-

---
creation_date: 2022-11-16
decision_date: 2022-11-16
status: accepted
---

## Context
X- was originally used as a prefix for experimental HTTP headers, however it led to unstandardised headers being used in production. Therefore [rfc6648](https://datatracker.ietf.org/doc/html/rfc6648) deprecates this convention. Other rulesets have added rules to disallow X- headers, for example the [Italian government's ruleset](https://github.com/italia/api-oas-checker/blob/master/rules/headers.yml) and [APIs You Won't Hate](https://github.com/apisyouwonthate/style-guide/blob/main/src/ruleset.ts). 

## Decision
Add rules that headers in requests and responses shouldn't start with X-.
