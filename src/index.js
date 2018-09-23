class SmartCalculator {
    constructor(initialValue) {
      // your implementation
        this.currentExpression = [initialValue];
        this.operators = ['^', '*', '/', '-', '+'];
    }

    valueOf() {
        return this.getCurrentResult();
    }

    getCurrentResult(){
        let expression = this.currentExpression.slice(0);
        for(let i = 0; i < this.operators.length; i++){
            let index = this.findIndex(expression, this.operators[i]);
            while(index >= 0){
                expression.splice(index - 1, 3, this.makeOperation(expression[index - 1],
                    expression[index + 1],
                    this.operators[i]));
                index = this.findIndex(expression, this.operators[i]);
            }
        }
        return expression[0];
    }

    findIndex (expression, operator){
        if (operator === '^'){
            return expression.lastIndexOf(operator);
        }
        else{
            return expression.indexOf(operator);
        }
    }

    makeOperation(a, b, operator){
        switch(operator){
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            case '^':
                return Math.pow(a, b);
        }
    }

    add(number) {
      // your implementation
        this.currentExpression.push('+');
        this.currentExpression.push(number);
        return this;
    }

    subtract(number) {
      // your implementation
        this.currentExpression.push('-');
        this.currentExpression.push(number);
        return this;
    }

    multiply(number) {
      // your implementation
        this.currentExpression.push('*');
        this.currentExpression.push(number);
        return this;
    }

    devide(number) {
      // your implementation
        this.currentExpression.push('/');
        this.currentExpression.push(number);
        return this;
    }

    pow(number) {
      // your implementation
        this.currentExpression.push('^');
        this.currentExpression.push(number);
        return this;
    }


}

module.exports = SmartCalculator;
