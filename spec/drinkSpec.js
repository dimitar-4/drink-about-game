describe("My whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
        
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatCanIDrink(11)", function() {
            var result = whatCanIDrink(11)
            expect(result).toBe("Drink Toddy");
        });
        
        
        it("should return drink coke when called as whatCanIDrink(16)", function() {
            var result = whatCanIDrink(16)
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink whisky when called as whatCanIDrink(21)", function() {
            var result = whatCanIDrink(21)
            expect(result).toBe("Drink Whisky");
        }); 
        
        it("should return drink whisky when called as whatCanIDrink(32)", function() {
            var result = whatCanIDrink(32)
            expect(result).toBe("Drink Whisky");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(138)", function() {
            var result = whatCanIDrink(138)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatCanIDrink(16)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});