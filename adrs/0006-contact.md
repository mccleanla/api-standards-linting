# APIs must have a contact

---
creation_date: 2022-12-02
decision_date: 2022-12-02
status: accepted
---

## Context
A contact email or url allows people to contact the maintainers of the API and is useful for cataloguing purposes. 
The [gov.uk API standards](https://www.gov.uk/guidance/gds-api-technical-and-data-standards) recommends putting your API on the cross-government API catalogue, 
and `contact` is one of the required fields in our [proposed metadata model](https://github.com/co-cddo/federated-api-model/blob/main/schemas/v1alpha/api-metadata.json) 
for the catalogue. Having the contact field present could also be helpful in generating catalogue entries from OpenAPI documents in the future. 

## Decision
Add a rule that the info object must contain a contact object.
