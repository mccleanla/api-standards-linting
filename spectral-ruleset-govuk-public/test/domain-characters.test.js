const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('domain name', () => {
  test('fails when the domain name contains a special character', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/characters/invalid-special-character.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name-characters')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The domain name must contain only alphanumeric characters (0-9 and a-z) and the ‘-’ (dash) symbol.')
  })

  test('passes when the domain contains the correct characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name-characters')

    expect(results).toHaveLength(0)
  })

  test('passes when the domain has multiple labels and all labels contain the correct characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/characters/valid-multiple-labels.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name-characters')

    expect(results).toHaveLength(0)
  })
})
