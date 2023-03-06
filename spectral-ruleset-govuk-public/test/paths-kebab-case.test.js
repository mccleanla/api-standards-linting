const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('Paths kebab case', () => {
  test('fails when the path is not kebab case', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('paths-kebab-case/invalid.yaml')

    const results = resultsForCode(await spectral.run(document), 'paths-kebab-case')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('Paths should use kebab case.')
  })

  test('passes when the path is kebab case', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('paths-kebab-case/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'paths-kebab-case')

    expect(results).toHaveLength(0)
  })
})
