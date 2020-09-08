const isBalanced = (parens) => {
    let stack = []
    let result = true;

    parens.split('').forEach(paren => {
        if (stack.length === 0 || paren === '(' || paren === '{' || paren === '[')
            stack.push(paren)
        switch (paren) {
            case ')':
                if (stack[stack.length - 1] === '(')
                    stack.pop()
                else {
                    result = false
                    return;
                }
                break;
            case '}':
                if (stack[stack.length - 1] === '{')
                    stack.pop()
                else {
                    result = false
                    return;
                }
                break;
            case ']':
                if (stack[stack.length - 1] === '[')
                    stack.pop()
                else {
                    result = false
                    return;
                }
                break;
        }
    });

    return (stack.length === 0 ? true : false) && result
}