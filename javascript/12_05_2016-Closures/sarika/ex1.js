(function(){
    function total(){
        var self = this;
        self.addition = 0;
        self.substract = 0;
        self.product = 0;
        self.dividend = 0;
        function Mathematics(a,b){
            var _math = this;
            _math.sum = function(a,b){
                return (a + b);
            }
            _math.difference = function(a,b){
                return (a - b);
            }
            _math.multiplication = function(a,b){
                return (a * b);
            }
            _math.division = function(a,b){
                return (a / b);
            }
        }
        var calculation = new Mathematics();
        self.addition = calculation.sum(55,45);
        self.substract = calculation.difference(55,45);
        self.product = calculation.multiplication(55,45);
        self.dividend = calculation.division(55,45);

    }
    var output = new total();
    console.log(output);
})();