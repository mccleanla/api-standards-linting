const { retrieveDocument, setupSpectral, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('contact', () => {
  test('fails when contact is absent', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('contact/absent-contact.yaml')

    const results = resultsForCode(await spectral.run(document), 'contact')

    expect(results).toHaveLength(1)
    expect(results[0].message).toEqual('The info object must contain either a contact email or contact url')
  })

  test('passes when description is present', async () => {
    const spectral = await setupSpectral('ruleset.yaml')
    const document = retrieveDocument('contact/valid.yaml')

    const results = resultsForCode(await spectral.run(document), 'contact')

    expect(results).toHaveLength(0)
  })
})
