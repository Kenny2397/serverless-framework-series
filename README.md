
# serverless-framework-series

A step-by-step, hands-on guide to implementing the serverless framework from zero to hero with practical examples.


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kennyluquet/)



![Logo](https://camo.githubusercontent.com/47fc268f696afbfaf449142b409f40b983b7db6e3ab2ac13cd6d047aa1eab703/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6173736574732e6769746875622e7365727665726c6573732f726561646d652d7365727665726c6573732d6672616d65776f726b2e676966)







    
## Usage

Navigate into a branch to specific implementation.


## Blogs list

- Desarrollando Aplicaciones Escalables con Arquitectura Hexagonal, Serverless Framework, TypeScript y AWS

https://medium.com/@kenny.luque.t/c31c8e3cbac6

## Estrctura del proyecto

```bash

├── src
│   ├── functions
│   │   └── getSurvey
│   └── core
│       ├── app
│       │   ├── schemas
│       │   └── usecases
│       ├── domain
│       │   ├── models
│       │   └── services
│       │       ├── repositories
│       └── infrastructure
│           ├── adapters
│           ├── ports
│           ├── repositories
│           └── utils
├── test
│   ├── functions
│   │   └── getSurvey.test.ts
│   └── core
├── serverless.yml
└── package.json

```