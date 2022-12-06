# API Standards Linting

Linting tooling to automate the verification of APIs against a set of accepted standards, such as [API technical and data standards](https://www.gov.uk/guidance/gds-api-technical-and-data-standards).

This repo aims to cover any standards expected of public APIs produced by UK government.

## What is API linting?

API linting tools check programmatically that OpenAPI documents follow a set of rules, for example that each request you define should document what a successful response looks like.

This tool uses [Spectral Rulesets](https://meta.stoplight.io/docs/spectral/674b27b261c3c-overview), which validates OpenAPI files. We have added our own rules to the [existing Spectral rules](https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules).  

