const { retrieveDocument, setupSpectral, getErrors } = require('@jamietanna/spectral-test-harness')

describe('Complete documents pass', () => {
  test('when Swagger', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('complete/valid-2.0.0.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(0)
  })

  test('when OpenAPI 3.0.0', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('complete/valid-3.0.0.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(0)
  })

  test('when OpenAPI 3.1.0', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('complete/valid-3.1.0.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(0)
  })
})
