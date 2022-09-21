const { retrieveDocument, setupSpectral, getErrors } = require('@jamietanna/spectral-test-harness')

describe('https', () => {
  test('fails when http', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('https/oas2/invalid-http.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('Servers must use the HTTPS protocol')
  })

  test('passes when https', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('https/oas2/valid.yaml')

    const results = getErrors(await spectral.run(document))

    expect(results).toHaveLength(0)
  })
})
