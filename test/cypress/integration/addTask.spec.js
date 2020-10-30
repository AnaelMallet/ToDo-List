describe("addTask", function() {
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

    it("addingWithoutName", function() {
        var description = "il faut dormir"
        cy.get('button[class="addButton"]').click()
        cy.get('div[class="createPopup"]').should("be.visible")
        cy.get('textarea[class="taskDescriptionInput"]').type(description)
        cy.get('button[class="validateButton"]').click()
        cy.get('div[class="createPopup"]').should("be.visible")
    })

    it("addingWithoutDescription", function() {
        var name = "dormir"
        cy.get('button[class="addButton"]').click()
        cy.get('div[class="createPopup"]').should("be.visible")
        cy.get('input[class="taskNameInput"]').type(name)
        cy.get('button[class="validateButton"]').click()
        cy.get('div[class="createPopup"]').should("not.be.visible")
        cy.reload()
        cy.get('div[class="taskCard"]').should("be.visible")
        cy.get('h1[class="taskName"]').should("contain.text", name)
        cy.get('p[class="taskDescription"]').should("not.contain.text")
        cy.get('span[class="taskUndone"]').should("be.visible")
        cy.get('span[class="taskDone"]').should("not.be.visible")
    })
})