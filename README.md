Frontend -- Middle-end -- Backend

- We need an intermediate layer between the client and the microservices
- Using this middle-end, when the client sends a request we will be able to make decisions which microservices 
should actually respond to the request.
- We can do message validation, response tranformation, rate limiting.
- We try to prepare an Api Gateway that acts as the middle-end