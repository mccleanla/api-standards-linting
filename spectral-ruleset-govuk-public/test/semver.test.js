const { retrieveDocument, setupSpectral, getErrors, resultsForCode } = require('@jamietanna/spectral-test-harness')

describe('semver', () => {
    test('fails when not a number', async () => {
        const spectral = await setupSpectral('ruleset.yaml')
        const document = retrieveDocument('semver/invalid-letters.yaml')

        const results = resultsForCode(await spectral.run(document), 'semver')

        expect(results).toHaveLength(1)
        expect(results[0]['message']).toEqual('Version should use semantic versioning. abc is not a valid version.')
    })

    test('fails when empty', async () => {
        const spectral = await setupSpectral('ruleset.yaml')
        const document = retrieveDocument('semver/invalid-empty.yaml')

        const results = resultsForCode(await spectral.run(document), 'semver')

        expect(results).toHaveLength(1)
    })

    test('fails when there is a major and minor version but no patch', async () => {
        const spectral = await setupSpectral('ruleset.yaml')
        const document = retrieveDocument('semver/invalid-no-patch.yaml')

        const results = resultsForCode(await spectral.run(document), 'semver')

        expect(results).toHaveLength(1)
    })

    test('passes when numbers have multiple digits', async () => {
        const spectral = await setupSpectral('ruleset.yaml')
        const document = retrieveDocument('semver/valid-complex-number.yaml')

        const results = resultsForCode(await spectral.run(document), 'semver')

        expect(results).toHaveLength(0)
    })
})
