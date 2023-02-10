// const app = new Vue({
//     el: '.calculs',
//     data: {
//         operation: '',
//         currentNumber: '',
//         previousNumber: ''
//     },
//     methods: {
//     addNumber(number) {
//         this.currentNumber += number;
//         this.operation += number;
//     },
//     addOperator(operator) {
//         this.operation += ` ${operator} `;
//         this.previousNumber = this.currentNumber;
//         this.currentNumber = '';
//     },
//     calculate() {
//         this.currentNumber = eval(this.operation).toString();
//         this.operation = this.currentNumber;
//         this.previousNumber = '';
//     },
//     reset() {
//         this.operation = '';
//         this.currentNumber = '';
//         this.previousNumber = '';
//     }
//     }
// });

// const numbers = document.querySelectorAll('.number');
// const operators = document.querySelectorAll('.tools');
// const equal = document.querySelector('.egal');
// const reset = document.querySelector('.reset');

// numbers.forEach(number => {
//     number.addEventListener('click', () => {
//         app.addNumber(number.innerText);
//     });
// });

// operators.forEach(operator => {
//     operator.addEventListener('click', () => {
//         app.addOperator(operator.innerText);
//     });
// });

// equal.addEventListener('click', () => {
//     app.calculate();
//     console.log('test');
// });

// reset.addEventListener('click', () => {
//     app.reset();
// });



new Vue({
        el: '.tel',
        data: {
            operation: null,
            currentNumber: '',
            previousNumber: null,
            calculs: '',
            result: '',
            operatorClicked : false,

        },
        methods: {
        addnumber(num) {
            if (this.operatorClicked) {
                // this.calculs='';
                this.operatorClicked = false;
            }
            this.calculs += num;
        },
        ac() {
            this.calculs = '';
            this.result = '';
        },
        reset() {
            this.calculs = '';
        },
        pourcent() {
            this.result = `${parseFloat(this.calculs) / 100}`;
            this.calculs += "%";
        },
        sign() {
            this.calculs = this.calculs.charAt(0) === '-' ?
                this.calculs.slice(1) : `-${this.calculs}`;
        },
        point() {
            if (this.calculs.indexOf('.') === -1) {
                this.addnumber('.');
            }
        },
        setPrevious() {
            this.previous = parseFloat(this.calculs);
            // this.operation = this.operator;
            // this.calculs = '';
            // this.operatorClicked = true;
        },
        division() {
            this.operator = (a, b) => parseFloat(a) / parseFloat(b);
            this.calculs += "÷";
            this.setPrevious();
        },
        multiplication() {
            this.operator = (a, b) => parseFloat(a) * parseFloat(b);
            this.calculs += "x";
        },
        soustraction() {
            this.operator = (a, b) => parseFloat(a) - parseFloat(b);
            this.calculs += "-";
        },
        addition() {
            this.operator = (a, b) => parseFloat(a) + parseFloat(b);
            this.calculs += "+";
        },
        equal() {
            // this.result = this.operator(this.calculs, parseFloat(this.calculs));
            this.result = `${this.operator(this.previous, parseFloat(this.calculs))}`;
            console.log(result)
            },
    }
})