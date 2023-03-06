const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('not-acceptable', () => {
  async function isNotRequired (method) {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument(`not-acceptable/absent-${method}.yaml`)

    const results = resultsForCode(await spectral.run(document), 'not-acceptable')

    expect(results).toHaveLength(0)
  }

  async function isRequired (method) {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument(`not-acceptable/absent-${method}.yaml`)

    const results = resultsForCode(await spectral.run(document), 'not-acceptable')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('Resources that can provide a response body must declare a response for an HTTP 406 Not Acceptable')
  }

  describe('fails when 406 is not present', () => {
    ['GET', 'PUT', 'POST', 'PATCH'].forEach(async (method) => {
      test(`on ${method}`, async () => {
        await isRequired(method.toLowerCase())
      })
    })
  })

  describe('passes when 406 is not present', () => {
    ['HEAD', 'OPTIONS', 'TRACE'].forEach(async (method) => {
      test(`on ${method}`, async () => {
        await isNotRequired(method.toLowerCase())
      })
    })
  })

  test('passes when 406 is present', async () => {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument('not-acceptable/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'not-acceptable')

    expect(results).toHaveLength(0)
  })
})
