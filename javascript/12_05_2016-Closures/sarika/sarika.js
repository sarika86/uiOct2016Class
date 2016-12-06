(function(){
    function total(){
        var self = this;
        self.addition = 0;
        self.substract = 0;
        self.product = 0;
        self.dividend = 0;
        function Mathematics(a,b){
            var _math = this;
            _math.sum = a + b;
            _math.difference = a - b;
            _math.multiplication = a  * b;
            _math.division = a / b;
        }
        var calculation = new Mathematics(45,35);
        self.addition = calculation.sum;
        self.substract = calculation.difference;
        self.product = calculation.multiplication;
        self.dividend = calculation.division;

    }
    var output = new total();
    console.log(output);
})();