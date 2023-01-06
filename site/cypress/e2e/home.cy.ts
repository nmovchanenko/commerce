describe("home page", () => {
  it("displays all 3 products on the home page", () => {
    cy.visit("/")
    cy.$("product-tag")
      .eq(0)
      .within(() => {
        cy.$("product-name").should("contain", "Star Wars")
        cy.$("product-price").should("contain", "$25.00 USD")
      })
  })
})