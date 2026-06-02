# Contributing to DevEvent Tracker

Welcome to DevEvent Tracker. We appreciate your interest in contributing to this project. This repository is designed to be accessible and supportive for contributors who are new to open source, particularly those participating in the Social Summer of Code (SSOC) program.

Whether you are fixing a typo, resolving a bug, or implementing a new feature, your contributions help make this project more useful for everyone.

---

## Table of Contents
1. [Code of Conduct](#code-of-conduct)
2. [Social Summer of Code (SSOC) Guidelines](#social-summer-of-code-ssoc-guidelines)
3. [How Can I Contribute?](#how-can-i-contribute)
4. [Git Workflow and Pull Requests](#git-workflow-and-pull-requests)
5. [Semantic Commit Messages](#semantic-commit-messages)
6. [Need Help?](#need-help)

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](../CODE_OF_CONDUCT.md). Please report any unacceptable behavior to the project maintainers.

---

## Social Summer of Code (SSOC) Guidelines

If you are contributing as part of SSOC, please keep these guidelines in mind:
- **Claiming Issues**: Before working on any change, browse the active GitHub Issues. Comment on the issue to request assignment. Please do not start working on an issue until a maintainer has officially assigned it to you.
- **One Issue at a Time**: To ensure all participants have a fair opportunity, please only request to work on one issue at a time.
- **Inactive Claims**: If there is no activity (such as a linked Pull Request or an update comment) on an assigned issue within three days, the issue may be reassigned to another contributor.

---

## How Can I Contribute?

There are several ways you can participate:
* **Reporting Bugs**: If you find a bug, create an issue using the Bug Report template.
* **Suggesting Features**: If you have an idea to improve the application, submit a Feature Request.
* **Improving Documentation**: Updates to setup guides, explanations, or the README are always welcome and highly valued.
* **Writing Code**: Check out issues labeled "good first issue" or "help wanted."

For a comprehensive tour of the codebase and lists of current tasks, please read our [Project Architecture Guide](./PROJECT_GUIDE.md).

---

## Git Workflow and Pull Requests

Follow these steps to propose changes:

### 1. Fork the Repository
Click the Fork button at the top right of this repository's GitHub page to create a copy of the project under your own GitHub account.

### 2. Clone Your Fork
Clone your fork to your local machine:
```bash
git clone https://github.com/YOUR_USERNAME/DevEvent_Tracker.git
cd DevEvent_Tracker
```

### 3. Add the Original Repository as Upstream
Link your local repository to the main project to stay updated with changes:
```bash
git remote add upstream https://github.com/niharika-mente/DevEvent_Tracker.git
```

### 4. Create a Feature Branch
Create a new branch for your work. Use a descriptive prefix to help identify the purpose of the branch:
- `feature/your-feature-name` (for new features or improvements)
- `fix/bug-fix-name` (for bug fixes)
- `docs/doc-update-name` (for documentation changes)

```bash
git checkout -b feature/your-feature-name
```

### 5. Develop and Run Locally
Set up your environment and run the project locally. For detailed setup steps, please refer to the [Local Setup Guide](./SETUP_GUIDE.md). Make your changes, ensuring they align with existing formatting and style guidelines.

### 6. Commit Your Changes
Commit your changes using semantic commit messages (see conventions below).
```bash
git add .
git commit -m "feat: implement booking page navigation"
```

### 7. Sync with Upstream
Before pushing, pull the latest changes from the upstream main branch to avoid conflicts:
```bash
git checkout main
git pull upstream main
git checkout feature/your-feature-name
git merge main
```
Resolve any merge conflicts if they occur.

### 8. Push to Your Fork
Push your local branch to your GitHub fork:
```bash
git push origin feature/your-feature-name
```

### 9. Open a Pull Request
- Navigate to the original [DevEvent Tracker Repository](https://github.com/niharika-mente/DevEvent_Tracker) on GitHub.
- You will see a prompt to compare and open a Pull Request.
- Complete the Pull Request template, referencing the issue you resolved (for example, `Closes #12`).
- Wait for feedback from the maintainers and respond politely to any requests for changes.

---

## Semantic Commit Messages

Using clear, semantic commits makes the project history easier to navigate:

| Prefix | Purpose | Example |
|---|---|---|
| `feat` | A new feature | `feat: add share button to event page` |
| `fix` | A bug fix | `fix: resolve crash on null event description` |
| `docs` | Documentation changes only | `docs: clarify mongodb Atlas connection steps` |
| `style` | Layout formatting or spacing changes (no code logic changes) | `style: fix alignment of search bar` |
| `refactor` | Code reorganization (neither fixes a bug nor adds a feature) | `refactor: clean up database index schemas` |
| `test` | Adding missing tests or correcting existing tests | `test: add verification for event action filters` |

---

## Need Help?

If you run into issues or have questions:
- Comment on the GitHub issue assigned to you.
- Reach out in the designated SSOC community communication channels.
- Remember that every question is welcome. We are all here to learn and collaborate.
