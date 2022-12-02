const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('https', () => {
  test('fails when http', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('https/oas3/invalid-http.yaml')

    const results = resultsForCode(await spectral.run(document), 'oas3-always-use-https')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('Servers must use the HTTPS protocol except when using localhost')
  })

  test('passes when http with localhost', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('https/oas3/valid-localhost.yaml')

    const results = resultsForCode(await spectral.run(document), 'oas3-always-use-https')

    expect(results).toHaveLength(0)
  })

  test('passes when https', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('https/oas3/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'oas3-always-use-https')

    expect(results).toHaveLength(0)
  })
})
