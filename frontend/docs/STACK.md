# Project Stack

This document distinguishes the technologies already present in the frontend from technologies that are planned or may be considered later. It will be updated as the project evolves.

## Current frontend stack

### React

React is a JavaScript library for building user interfaces from reusable components. It is the foundation for the portfolio's interactive, component-based frontend.

### TypeScript

TypeScript adds static types to JavaScript. It is being used to make the React code easier to understand, refactor, and maintain as the project grows.

### Vite

Vite is the frontend development server and build tool. It provides a fast local development workflow and produces the optimized frontend build.

### Tailwind CSS v4

Tailwind CSS is a utility-first CSS framework. Version 4 is configured for this project and will support consistent, flexible styling directly alongside the React components.

### shadcn/ui

shadcn/ui is a collection of configurable component patterns that are added directly to the codebase rather than used as a black-box runtime library. It provides a starting point for accessible, customizable interface components while keeping the project in control of their code.

### Base UI

Base UI provides accessible, unstyled UI primitives. The current shadcn-style button uses its button primitive, allowing the project to combine accessible behavior with custom Tailwind styling.

### Magic UI

Magic UI is a registry of polished visual and interactive React components. A Magic UI-derived card component is present in the codebase for possible future use; no Magic UI effect is currently part of the rendered portfolio page.

## Planned backend stack

The following technologies are planned for a future backend. They are not implemented in this repository at this time.

### Node.js

Node.js is a JavaScript runtime that may run the server-side portion of the application.

### Express

Express is a lightweight web framework for Node.js. It may be used to define backend routes and API behavior.

### Prisma

Prisma is an ORM and database toolkit. It may provide type-safe database access and schema management for backend data.

### PostgreSQL

PostgreSQL is a relational database system. It may store application data if the portfolio needs backend-managed data or functionality.

## Planned or future additions

These are possible additions, not currently implemented project features.

### Testing

Testing tools and practices may be added to verify important application behavior and help maintain the project over time.

### Docker

Docker may be considered to make local development or deployment environments more consistent.

### Deployment

A hosting and deployment approach will be selected later, once the application's needs and final structure are clearer.
