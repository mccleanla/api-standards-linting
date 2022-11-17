const { retrieveDocument, setupSpectral, getErrors, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('X- headers', () => {
  test('fails when request headers starts with X-', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('x-header/invalid-request.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('Headers should not use the X- prefix')
  })

  test('passes when request headers do not start with X-', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('x-header/valid-request.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(0)
  })

  test('fails when response headers start with X-', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('x-header/invalid-response.yaml')

    const results = resultsForCode(await spectral.run(document), 'no-x-response-headers')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('Headers should not use the X- prefix')
  })

  test('passes when response headers do not start with X-', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('x-header/valid-response.yaml')

    const results = resultsForCode(await spectral.run(document), 'no-x-response-headers')

    expect(results).toHaveLength(0)
  })
})
