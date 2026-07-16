# 🤝 Contributing

Thank you for your interest in contributing to Backend Starter Kit!

Whether you're fixing a bug, improving documentation, or adding a new feature, your contributions are welcome.

---

# 🚀 Getting Started

## 1. Fork the Repository

Click the **Fork** button on GitHub.

---

## 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/backend-starter-kit.git
```

Move into the project

```bash
cd backend-starter-kit
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment

Copy the example environment file.

```bash
cp .env.example .env
```

Update the environment variables if needed.

---

## 5. Start Development

```bash
npm run dev
```

or

```bash
docker compose -f docker-compose.dev.yml up --build
```

---

# 🌱 Creating a Branch

Always create a feature branch.

Example

```bash
git checkout -b feature/add-authentication
```

Bug fixes

```bash
git checkout -b fix/database-connection
```

Documentation

```bash
git checkout -b docs/update-readme
```

---

# 💻 Coding Guidelines

Please follow these guidelines.

- Write clean and readable code.
- Follow the existing project structure.
- Keep controllers lightweight.
- Place business logic inside services.
- Keep repositories responsible only for database operations.
- Use TypeScript types wherever possible.
- Validate requests using Zod.
- Use the logger instead of `console.log()`.

---

# 🎨 Formatting

Before committing, run:

```bash
npm run format
```

---

# 🔍 Linting

Run

```bash
npm run lint
```

Fix issues

```bash
npm run lint:fix
```

---

# 🏗 Build

Before opening a Pull Request, ensure the project builds successfully.

```bash
npm run build
```

---

# 📝 Commit Messages

Use meaningful commit messages.

Examples

```
feat: add user authentication

fix: resolve MongoDB connection issue

docs: update README

refactor: simplify logger configuration

chore: update dependencies
```

---

# 🚀 Pull Requests

Before submitting a Pull Request, make sure:

- The project builds successfully.
- Linting passes.
- Formatting is correct.
- Documentation is updated if necessary.
- Your changes don't break existing functionality.

---

# ❤️ Thank You

Every contribution helps improve this project and supports developers using this starter kit.

Happy Coding! 🚀
