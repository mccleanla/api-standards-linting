# Spectral ruleset for public UK government APIs

A set of API linting rules that correspond with API linting rules as prescribed across public UK government APIs.

## Usage

### Via NPM

This package is published as a package on NPM, under [@govuk-data-standards/spectral-ruleset-govuk-public](https://www.npmjs.com/package/@govuk-data-standards/spectral-ruleset-govuk-public).

It can be used as an NPM package using the following `package.json`:

```json
{
  "devDependencies": {
    "@stoplight/spectral-cli": "^6.2.0",
    "@govuk-data-standards/spectral-ruleset-govuk-public": "^0.1.0"
  },
  "scripts": {
    "lint:oas": "spectral lint '*/openapi.yml'"
  }
}
```

Then, when using the following `.spectral.yaml`:

```yaml
extends:
  - '@govuk-data-standards/spectral-ruleset-govuk-public'
formats:
  - "oas3.1"
```

You can run:

```
npm run lint:oas
```

### Via HTTPS URL

This ruleset can also be used via the HTTPS URL in the ruleset, for instance:

Then, when using the following `.spectral.yaml`:

```yaml
extends:
  - https://raw.githubusercontent.com/co-cddo/api-standards-linting/spectral-ruleset-govuk-public-v0.3.0/spectral-ruleset-govuk-public/ruleset.yaml
formats:
  - "oas3.1"
```
