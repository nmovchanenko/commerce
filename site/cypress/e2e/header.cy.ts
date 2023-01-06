describe("Header", () => {
    it("links to the correct pages", () => {
        cy.visit("/")
        cy.$('logo').click()
        cy.location("pathname").should("eq", "/")
    })
})