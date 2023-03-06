const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('license', () => {
  test('fails when the license identifier is not Apache 2.0', async () => {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument('license/strict/invalid.yaml')

    const results = resultsForCode(await spectral.run(document), 'license-strict')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The licence should be Apache 2.0')
  })

  test('passes when license identifier is one of the recommended OS licenses', async () => {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument('license/strict/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'license-strict')

    expect(results).toHaveLength(0)
  })

  test('fails when the license url is incorrect', async () => {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument('license/strict/invalid.yaml')

    const results = resultsForCode(await spectral.run(document), 'license-url')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The licence url should link to the correct Apache 2.0 site.')
  })

  test('passes when license url is correct', async () => {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument('license/strict/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'license-url')

    expect(results).toHaveLength(0)
  })
})
