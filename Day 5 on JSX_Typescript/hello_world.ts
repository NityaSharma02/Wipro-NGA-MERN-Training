// This is a typescript file that prints "Hello, World!" to the console with the help of a function

function greet(name: string): string {
    return `Hello, ${name}`;
}

const message: string = greet("World");
console.log(message);


// IN CLI
// # initialize a project (optional)
// npm init -y

// # install TypeScript and node types for better dev experience
// npm install --save-dev typescript @types/node

// # create tsconfig (accept defaults or edit later)
// npx tsc --init