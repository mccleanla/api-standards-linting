const { retrieveDocument, setupSpectral, getErrors } = require('@jamietanna/spectral-test-harness')

describe('GOV UK Rules', () => {
  test('Complete OpenAPI 3.0.0 document passes', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('complete/valid-3.0.0.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(0)
  })

  test('Complete OpenAPI 3.1.0 document passes', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('complete/valid-3.1.0.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(0)
  })
})
