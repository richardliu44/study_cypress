describe('restapi-tests',function(){
    it('get-customers-count',function(){
        cy.request({
            method:'POST',
            url:`${Cypress.env('baseUrl')}/basic/openapi/v1/customer`,
            headers:{
                'appId': `${Cypress.env('appId')}`,
                'sign': `${Cypress.env('sign')}`,
                'timestamp': `${Cypress.env('timestamp')}`,
                'Content-Type': `${Cypress.env('Content-Type')}`
            }
        }).then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body).to.have.property('code','10000')
            expect(response.body).to.have.property('message','请求成功')
            cy.log(response.body)
            cy.log('response code is:',response.body.code)
            cy.log('response message is:',response.body.message)
            cy.log('id is:', response.body.data['customer'].id)
            cy.log(response.body.data['customer'].tenantId)
            cy.log(response.body.data['customer'].customerId)                    
        })
    })
})
//check response body, not full content like postman.
