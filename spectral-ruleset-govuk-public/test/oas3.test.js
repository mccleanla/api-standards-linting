const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('oas3', () => {
  test('fails when the oas version is lower than 3', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('oas3/2.0.0.yaml')

    const results = resultsForCode(await spectral.run(document), 'oas3-minimum')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('OpenAPI version must be 3 or higher')
  })

  test('passes when oas version is 3.1.0', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('oas3/3.1.0.yaml')

    const results = resultsForCode(await spectral.run(document), 'oas3-minimum')

    expect(results).toHaveLength(0)
  })

  test('oas3-minimum passes when oas version is 3.0.0', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('oas3/3.0.0.yaml')

    const results = resultsForCode(await spectral.run(document), 'oas3-minimum')

    expect(results).toHaveLength(0)
  })
})
