# My Project

This is a simple static website project built using **Nunjucks** as the templating engine and **Gulp** as the task runner.  
The project automates template compilation, watches for changes, and provides a live preview in the browser using **BrowserSync**.

---

## Templating Engine

- **Nunjucks**: Used for creating modular HTML templates.  
- Templates are located in the `src/templates/` folder and compiled into HTML in the `dist/` folder.

---

## Task Runner / Bundler

- **Gulp**: Used to automate tasks such as:  
  - Compiling Nunjucks templates  
  - Watching HTML, CSS, and JS files for changes  
  - Running a live server with BrowserSync  

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/project-name.git
cd project-name
Install dependencies:
    npm install
running the project:
     gulp
build for production:
     gulp nunjucks
