const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('OperationId', () => {
  test('fails when operationId is not present', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('operation-id/invalid.yaml')

    const results = resultsForCode(await spectral.run(document), 'operation-id')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('Every endpoint must have a unique operationId specified.')
  })

  test('passes when operationId is present', async () => {
    const spectral = await setupSpectral('ruleset-medium.yaml')
    const document = retrieveDocument('operation-id/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'operation-id')

    expect(results).toHaveLength(0)
  })
})
