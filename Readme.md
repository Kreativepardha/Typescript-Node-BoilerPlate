### 📜 Commit Message Rules Guide

This document explains how to write structured commit messages using **commitlint** and the **Conventional Commits** standard.

---

## 🔹 **Commit Message Format**

A valid commit message must follow this format:

```plaintext
<type>: <description>
```

### ✅ **Examples**

```
feat: Add login authentication
fix: Resolve database connection issue
docs: Update README with API details
```

---

## 🔹 **Allowed Commit Types**

Each commit must start with a **valid type**:

| Type       | Meaning                                                |
| ---------- | ------------------------------------------------------ |
| `feat`     | A new feature                                          |
| `fix`      | A bug fix                                              |
| `docs`     | Documentation changes (README, comments, etc.)         |
| `style`    | Code formatting (spaces, indentation, no logic change) |
| `refactor` | Code restructuring (no bug fixes or features)          |
| `perf`     | Performance improvements                               |
| `test`     | Adding/modifying tests                                 |
| `build`    | Changes in build tools, dependencies, etc.             |
| `ci`       | CI/CD pipeline changes                                 |
| `chore`    | Maintenance (e.g., updating dependencies)              |
| `revert`   | Reverting a previous commit                            |

🚫 **Invalid Commits (Blocked)**

```
update: Improve performance  ❌ (not an allowed type)
change: Refactor login logic  ❌ (not an allowed type)
```

---

## 🔹 **Subject Formatting Rules**

✅ **Do**:  
✔ Use **sentence case** (capitalize first word, lowercase rest)  
✔ Keep the message **short and clear** (max 72 characters)

🚫 **Don't**:  
❌ Use **lowercase** for the first letter (`feat: improve performance`)  
❌ Use **all caps** (`feat: IMPROVE PERFORMANCE`)  
❌ End with a **period** (`fix: Resolve cache issue.`)

---

## 🔹 **Why Follow These Rules?**

✔ Makes commit history **consistent & readable**  
✔ Helps in **automated versioning & changelogs**  
✔ Enforces **best practices** for team collaboration

---

By following these rules, your commits will be **clean, structured, and useful**! 🚀

## TESTS

| Test Type | What to Test? | Tools Used |
| --- | --- | --- |
| **Unit Tests** | Middlewares, Models, Utils | Jest |
| **Integration Tests** | APIs, Services, DB Queries | Supertest, Jest |
| **Database Tests** | Prisma Queries, Constraints, Relations | Jest, Prisma |
| **Utility Tests** | Helper Functions, Validators, Formatters | Jest |
| **Fixtures** | Mock Data for Users, Tasks, etc. | Plain TS Files |

---

## # **🚀 Rate Limiter Documentation**  

### **📌 Overview**  
- Implements **Token Bucket Rate Limiting** in an **Express.js API**.  
- Uses **Redis** to manage request limits across **multiple API instances**.  
- **Prevents API abuse** while allowing short request bursts.  
- **Separate login rate limiter** to prevent brute-force attacks.  

---

### **📦 Setup & Installation**  

1️⃣ **Install dependencies**  
```sh
npm install
```

2️⃣ **Start Redis using Docker Compose**  
```sh
docker-compose up -d
```
> **Note:** Redis is required for rate limiting.

3️⃣ **Start the Express Server**  
```sh
npm run dev
```

---------------------------------------------------------------------
### **🛠️ Rate Limiter Configuration**  
#### **Global API Rate Limiter**  
- **Limits requests per IP** (default: **100 per minute**).  
- **Tokens refill over time** (2 tokens per second).  

#### **Login Rate Limiter (Stricter)**  
- Allows **5 login attempts per minute**.  
- Prevents **brute-force attacks**.  

### **✅ Summary**  
✔ **Global Rate Limiter** → Limits API requests per minute.  
✔ **Login Rate Limiter** → Prevents excessive login attempts.  
✔ **Redis Integration** → Ensures rate limiting across distributed instances.  
✔ **Docker Support** → Easy Redis setup with `docker-compose`.  
-------------------------------------------------------------------------