const { retrieveDocument, setupSpectral, getErrors, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('semver', () => {
  describe('when not a numeric semver value', () => {
    test('it has severity error', async () => {
      const spectral = await setupSpectral('ruleset.yaml')
      const document = retrieveDocument('semver/invalid.yaml')

      const results = getErrors(resultsForCode(await spectral.run(document), 'semver'))

      expect(results).toHaveLength(1)
    })

    test('it has a helpful message', async () => {
      const spectral = await setupSpectral('ruleset.yaml')
      const document = retrieveDocument('semver/invalid.yaml')

      const results = getErrors(resultsForCode(await spectral.run(document), 'semver'))

      expect(results[0].message).toBe('Version can only contain numbers')
    })
  })

  describe('when empty', () => {
    test('it has severity error', async () => {
      const spectral = await setupSpectral('ruleset.yaml')
      const document = retrieveDocument('semver/empty.yaml')

      const results = getErrors(resultsForCode(await spectral.run(document), 'semver'))

      expect(results).toHaveLength(1)
    })

    test('it has a helpful message', async () => {
      const spectral = await setupSpectral('ruleset.yaml')
      const document = retrieveDocument('semver/empty.yaml')

      const results = getErrors(resultsForCode(await spectral.run(document), 'semver'))

      expect(results[0].message).toBe('Version can only contain numbers')
    })
  })

  describe('when null', () => {
    test('the rule is not triggered', async () => {
      const spectral = await setupSpectral('ruleset.yaml')
      const document = retrieveDocument('semver/null.yaml')

      const results = getErrors(resultsForCode(await spectral.run(document), 'semver'))

      expect(results).toHaveLength(0)
    })
  })

  describe('when a numerical version for YAML', () => {
    test('the rule does not error', async () => {
      const spectral = await setupSpectral('ruleset.yaml')
      const document = retrieveDocument('semver/number.yaml')

      const results = getErrors(resultsForCode(await spectral.run(document), 'semver'))

      expect(results).toHaveLength(0)
    })
  })

  describe('when a valid semver string', () => {
    test('the rule does not error', async () => {
      const spectral = await setupSpectral('ruleset.yaml')
      const document = retrieveDocument('semver/valid.yaml')

      const results = getErrors(resultsForCode(await spectral.run(document), 'semver'))

      expect(results).toHaveLength(0)
    })
  })
});
