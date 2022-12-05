const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('domain name', () => {
  test('fails when the domain name is less than 3 characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/invalid-too-short.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The domain name must be between 3 and 63 characters long, and contain only alphanumeric characters (0-9 and a-z) and the ‘-’ (dash) symbol. It should also use dashes between words to make your domain easy to read - for example, vehicle-registration-number.api.gov.uk.')
  })

  test('fails when the domain name contains a special character', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/invalid-special-character.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The domain name must be between 3 and 63 characters long, and contain only alphanumeric characters (0-9 and a-z) and the ‘-’ (dash) symbol. It should also use dashes between words to make your domain easy to read - for example, vehicle-registration-number.api.gov.uk.')
  })

  test('passes when the domain contains the correct characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name')

    expect(results).toHaveLength(0)
  })
})
