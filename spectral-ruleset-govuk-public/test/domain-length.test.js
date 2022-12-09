const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('domain name', () => {
  test('fails when the domain name is less than 3 characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/length/invalid-too-short.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name-length')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The domain name must be between 3 and 63 characters long.')
  })

  test('fails when the domain name is more than 63 characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/length/invalid-too-long.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name-length')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The domain name must be between 3 and 63 characters long.')
  })

  test('passes when the domain contains the 3 to 63 characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name-length')

    expect(results).toHaveLength(0)
  })

  test('passes when the domain has multiple labels and each label contains 3 to 63 characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/length/valid-multiple-labels.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name-length')

    expect(results).toHaveLength(0)
  })

  test('fails when the domain has multiple labels and the second label contains more than 63 characters', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('domain/length/invalid-multiple-labels.yaml')

    const results = resultsForCode(await spectral.run(document), 'domain-name-length')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The domain name must be between 3 and 63 characters long.')
  })
})
