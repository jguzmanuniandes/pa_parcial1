describe('HU1 - Flujo de login exitoso', function () {
	it('Ingresar a Todoist y realizar un login exitoso', function () {
		cy.visit('https://todoist.com/users/showlogin')
		cy.wait(2000)
		cy.get('form').find('input[name="email"]').click().type("e.duartes@uniandes.edu.co")
		cy.get('form').find('input[name="password"]').click().type("12345678*")
		cy.wait(2000)
		cy.screenshot();
		cy.get('form').contains('Log').click()
		cy.wait(3000)
		cy.get('div[id="left_menu"]').click().should('to.exist')
		cy.screenshot();
	})
})

describe('Todoist Flujos de pruebas', function () {


	  it('HU2 - Flujo Creación de tarea con botón de la barra', function() {
		cy.wait(3000)
		cy.get('#quick_add_task_holder').click()
		cy.wait(2000)
		cy.get('.DraftEditor-root').find('br').type(" ", {force: true})
		let texto1 = "HU2 "+userID_Alpha();
		cy.wait(5000)
		cy.get('span[data-text="true"]')
			.type(texto1, {force: true}).wait(5000)
		cy.screenshot();
		cy.get('button[type="submit"]').click()
		cy.screenshot();
	})


	it('HU3 - Creación de tarea con botón inferior dashboard', function () {
		cy.wait(3000)
		cy.get("button[class='plus_add_button']").click()
		cy.get('.DraftEditor-root').find('br').type(" ", { force: true })
		cy.wait(5000)
		let texto = "HU3 "+userID_Alpha();
		cy.get('span[data-text="true"]')
			.type(texto, { force: true }).wait(3000)
		cy.screenshot();
		cy.get('button[type="submit"]').click()
		cy.get("button[class='cancel']").click()
		cy.screenshot();
	})

	it('HU4 - Flujo realizar búsqueda tareas “HU”:', function () {
		cy.get('input[class="quick_find__input"]').click().type("HU")
		cy.wait(5000)
		cy.screenshot();
		cy.get('span[class="ist_complete_content"]').contains(/^HU*/)
		cy.get('input[class="quick_find__input"]').click().clear()
		cy.screenshot();
	})

	it('HU5 - Flujo Crear proyecto', function () {
		cy.get('button[data-track="navigation|projects_quick_add"]').click()
		cy.wait(1000)
		let texto5 = "HU5 - Proyecto "+userID_Alpha();
		cy.get('input[id="edit_project_modal_field_name"]').type(texto5)
		cy.screenshot();
		cy.get('button[type="submit"]').click()
		cy.get('ul[id="projects_list"]').contains("texto5")
		cy.screenshot();
	})


	it('HU6 - flujo ver tareas del día', function () {
		cy.get('li[data-track="navigation|today"]').click()
		cy.wait(4000)
		cy.screenshot();
		cy.get('div[id="editor"]').contains("Hoy")
		cy.screenshot();
	})
	it('HU7 - Revisar Bandeja de entrada', function() {
		cy.get('li[data-track="navigation|inbox"]').click()
		cy.wait(5000)
		cy.screenshot();
		cy.get('div[id="editor"]').contains(/^Bandeja*/)
		cy.screenshot();
    })



})

//Crear texto random
function userID_Alpha() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for (var i = 0; i < 10; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}