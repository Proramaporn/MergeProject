# Merge Project

This project implements a custom `merge()` function in TypeScript that merges three integer arrays into one sorted array (ascending).  
The project includes full unit tests using Jest.

---

## 🧰 Dependencies

Installed automatically via `npm install`:

| Package | Purpose |
|--------|---------|
| typescript | Type checking + compilation |
| jest | Test runner |
| ts-jest | TypeScript transformer for Jest |
| @types/jest | Jest type definitions |

---

## ✅ Prerequisites

Your system must have:

```
Node.js >= 14
npm >= 6
```

Check installation:

```
node -v
npm -v
```

---

## 💻 Setup Environment

### 1. Clone the repository

```
git clone https://github.com/Proramaporn/MergeProject.git
cd merge-project
```

### 2. Install dependencies

```
npm install
```

### 3. Compile TypeScript

```
npm run build
```

This generates compiled JavaScript in:

```
dist/
```

---

## 🧪 Run Unit Tests

### Run tests:

```
npm test
```

---

## 📁 Project Structure

```
merge-project/
│
├── src/
│   └── merge.ts
│   └── index.ts
│
├── tests/
│   └── merge.test.ts
│
├── dist/           # Output after build
├── package.json
├── tsconfig.json
└── README.md
```
