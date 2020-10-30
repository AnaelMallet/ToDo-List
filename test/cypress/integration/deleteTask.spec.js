describe("deleteTask", function() {
    it("normalAdding", function() {
        var name = "Cypress"
        var description = "Découvrir cypress"
        cy.visit("localhost:3000")
        cy.get('button[class="addButton"]').click()
        cy.get('div[class="createPopup"]').should("be.visible")
        cy.get('input[class="taskNameInput"]').type(name)
        cy.get('textarea[class="taskDescriptionInput"]').type(description)
        cy.get('button[class="validateButton"]').click()
        cy.get('div[class="createPopup"]').should("not.be.visible")
        cy.reload()
        cy.get('div[class="taskCard"]').should("be.visible")
        cy.get('h1[class="taskName"]').should("contain.text", name)
        cy.get('p[class="taskDescription"]').should("contain.text", description)
        cy.get('span[class="taskUndone"]').should("be.visible")
        cy.get('span[class="taskDone"]').should("not.be.visible")
    })

    it("normalDeleting", function() {
        cy.get('button[class="DeleteButton"]').click()
        cy.get('div[class="deletePopup"]').should('be.visible')
        cy.get('button[class="yesButton"]').click()
        cy.get('div[class="deletePopup"]').should('not.be.visible')
        cy.reload()
        cy.get('div[class="taskCard"]').should("not.be.visible")
    })
})