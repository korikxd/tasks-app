# tasks-app

A simple application built with Node.js and Typescript. It serves as an example of how to manage tasks effectively using a few Javascript and TypeScript features. Includes functionalities to add, delete, complete and retrieve tasks.

## 💻 Developing

```bash
# 1.- Clone the repo
git clone https://github.com/korikxd/tasks-app.git

# 2.- Install required dependencies
npm install

# 3.- Run your server locally
npm run start

```

## 📌 Folders Overview

- `models`=> Contains the interface of the entity that's being used in this project, in this example we're only declaring a Task entity.
- `services` => Contains all the basic CRUD operations requested to being used by the Task entity.
- `utils` => Contains utilities such as the handler errors method related to the Task entity.

## ⚙ Tech Stacks

- Nodejs v20.14.12 (LTS)
- Typescript v5.5.4 (LTS)
