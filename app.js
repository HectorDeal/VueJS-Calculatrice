const app = new Vue({
    el: '.calculs',
    data: {
        operation: '',
        currentNumber: '',
        previousNumber: ''
    },
    methods: {
    addNumber(number) {
        this.currentNumber += number;
        this.operation += number;
    },
    addOperator(operator) {
        this.operation += ` ${operator} `;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    },
    calculate() {
        this.currentNumber = eval(this.operation).toString();
        this.operation = this.currentNumber;
        this.previousNumber = '';
    },
    reset() {
        this.operation = '';
        this.currentNumber = '';
        this.previousNumber = '';
    }
    }
});

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.tools');
const equal = document.querySelector('.egal');
const reset = document.querySelector('.reset');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        app.addNumber(number.innerText);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        app.addOperator(operator.innerText);
    });
});

equal.addEventListener('click', () => {
    app.calculate();
    console.log('test');
});

reset.addEventListener('click', () => {
    app.reset();
});
