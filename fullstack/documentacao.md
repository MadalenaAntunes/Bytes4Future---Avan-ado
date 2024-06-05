# Contador

## Requisitos
- Tem de ser possível ver o número - 1
- Tem de ser possível incrementar - 2
- Tem de ser possível decrementar - 3

### API
- GET: "/api/counter" - 1
    res = {number: number}

- POST: "/api/counter/increment" - 2
    res = {number: number}

- POST: "/api/counter/decrement" - 3
    res = {number: number}

### FrontEnd
- QUANDO INICIAR A APP
    Fazemos um pedido - GET 1

- Paragraph
    Onde mostra o number

- Button +
    Fazer pedido - Post 2

- Button -
    Fazer pedido - Post 3