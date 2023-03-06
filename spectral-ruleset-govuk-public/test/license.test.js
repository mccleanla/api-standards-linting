const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('license', () => {
  test('fails when the license identifier is not one of the recommended OS licenses', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('license/invalid.yaml')

    const results = resultsForCode(await spectral.run(document), 'license')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The license should be a popular open source licence, for example: https://opensource.org/licenses/?categories=popular-strong-community')
  })

  test('passes when license identifier is one of the recommended OS licenses', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('license/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'license')

    expect(results).toHaveLength(0)
  })
})
