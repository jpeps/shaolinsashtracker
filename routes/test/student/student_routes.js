var expect  = require("chai").expect
var request = require("request")

describe('student api', () => {
    
    describe('show all', () => {
        var url = "http://localhost:3000/students"
        
        it('returns status 200', function(done) {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200)
                done()
            })
        })
    })
})
