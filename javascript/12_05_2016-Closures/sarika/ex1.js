(function(){
    function Total(){
        var self = this;
        self.addition = 0;
        self.substract = 0;
        self.product = 0;
        self.dividend = 0;
        function Mathematics(a,b){
            var _math = this;
            _math.sum = function(){
                return (a + b);
            }
            _math.difference = function(){
                return (a - b);
            }
            _math.multiplication = function(){
                return (a * b);
            }
            _math.division = function(){
                return (a / b);
            }
        }
        var calculation = new Mathematics(55,45);
        self.addition = calculation.sum();
        self.substract = calculation.difference();
        self.product = calculation.multiplication();
        self.dividend = calculation.division();

    }
    var output = new Total();
    console.log(output);
})();