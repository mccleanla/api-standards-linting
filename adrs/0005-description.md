# APIs must have a description

---
creation_date: 2022-12-02
decision_date: 2022-12-02
status: accepted
---

## Context
A description helps people understand what the API can be used for and is useful for making your API more discoverable.
The [gov.uk API standards](https://www.gov.uk/guidance/gds-api-technical-and-data-standards) recommends putting your API on the cross-government API catalogue,
and `description` is one of the required fields in our [proposed metadata model](https://github.com/co-cddo/federated-api-model/blob/main/schemas/v1alpha/api-metadata.json)
for the catalogue. Having the description field present could also be helpful in generating catalogue entries from OpenAPI documents in the future.

## Decision
Add a rule that the info object must contain a description.
