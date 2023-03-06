const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('unsupported-media-type', () => {
  async function isNotRequired (method) {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument(`unsupported-media-type/absent-${method}.yaml`)

    const results = resultsForCode(await spectral.run(document), 'unsupported-media-type')

    expect(results).toHaveLength(0)
  }

  async function isRequired (method) {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument(`unsupported-media-type/absent-${method}.yaml`)

    const results = resultsForCode(await spectral.run(document), 'unsupported-media-type')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('Resources that consume a request body must declare a response for an HTTP 415 Unsupported Media Type')
  }

  describe('fails when 415 is not present', () => {
    ['PUT', 'POST', 'PATCH'].forEach(async (method) => {
      test(`on ${method}`, async () => {
        await isRequired(method.toLowerCase())
      })
    })
  })

  describe('passes when 415 is not present', () => {
    ['GET', 'HEAD', 'OPTIONS', 'TRACE'].forEach(async (method) => {
      test(`on ${method}`, async () => {
        await isNotRequired(method.toLowerCase())
      })
    })
  })

  test('passes when 415 is present', async () => {
    const spectral = await setupSpectral('ruleset-high.yaml')
    const document = retrieveDocument('unsupported-media-type/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'unsupported-media-type')

    expect(results).toHaveLength(0)
  })
})
