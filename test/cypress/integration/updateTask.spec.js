describe("updateTask", function() {
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

    it("updateName", function() {
        cy.get('button[class="updateButton"]').click()
        cy.get('div[class="updatePopup"]').should('be.visible')
        cy.get('input[class="taskNameInput"]').type(" testing")
        cy.get('button[class="validateButton"]').click()
        cy.get('div[class="updatePopup"]').should('not.be.visible')
        cy.reload()
        cy.get('h1[class="taskName"]').should('contain.text', "Cypress testing")
    })

    it("updateDescription", function() {
        cy.get('button[class="updateButton"]').click()
        cy.get('div[class="updatePopup"]').should('be.visible')
        cy.get('textarea[class="taskDescriptionInput"]').type(" testing")
        cy.get('button[class="validateButton"]').click()
        cy.get('div[class="updatePopup"]').should('not.be.visible')
        cy.reload()
        cy.get('p[class="taskDescription"]').should('contain.text', "Découvrir cypress testing")
    })

    it("updateState", function() {
        cy.get('button[class="updateButton"]').click()
        cy.get('div[class="updatePopup"]').should('be.visible')
        cy.get('label[class="taskStateTextTrue"]').click()
        cy.get('button[class="validateButton"]').click()
        cy.get('div[class="updatePopup"]').should('not.be.visible')
        cy.reload()
        cy.get('span[class="taskUndone"]').should("not.be.visible")
        cy.get('span[class="taskDone"]').should("be.visible")
    })
})