describe('API Taste Dive tests', () => {
    let searches = require('../fixtures/dataSearch.json')

    searches.forEach((search) => {
        it(`Scenario ${search.q} as q, ${search.type} as type and ${search.limit} as limit`, () => {
            cy.tasteDiveSearch(search.q, search.type, search.limit).then(response => {
                cy.log(JSON.stringify(response))
                expect(response.body.Similar.Info[0].Name).equal(search.q)
                expect(response.body.Similar.Results).lengthOf(search.limit)
            })
        })    
    })
})