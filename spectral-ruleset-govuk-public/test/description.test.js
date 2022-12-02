const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('description', () => {
  test('fails when description is absent', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('description/absent-description.yaml')

    const results = resultsForCode(await spectral.run(document), 'description')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The info object must contain a description')
  })

  test('passes when description is present', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('description/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'description')

    expect(results).toHaveLength(0)
  })
})
