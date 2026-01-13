# 📝 Task Manager App

A modern, efficient task management application built with React and Vite. This application allows users to organize their daily tasks with ease, offering features like task creation, filtering, and pagination.

## 📸 Application Output

![Task Management Output](public/task_management_output.png)

---

## ✨ Features

- **Create & Manage Tasks**: Add, edit, and delete tasks to keep track of your todolist.
- **Search & Filter**: Quickly find tasks with a search bar and filter them by status or priority.
- **Pagination**: Navigate through your task list efficiently with built-in pagination.
- **Interactive UI**: A responsive and dynamic user interface with modal support for detailed task views.
- **Persistent State**: Search queries and task states are maintained for a seamless user experience.

---

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: CSS (Responsive & Modern)
- **Language**: JavaScript (ES6+)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd my-react-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will launch at `http://localhost:5173` (or the port shown in your terminal).

---

## 📂 Project Structure

```text
my-react-app/
│
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Task.jsx        # Individual task item
│   │   ├── TaskForm.jsx    # Form to add/edit tasks
│   │   ├── TaskList.jsx    # Main list view with pagination & search
│   │   └── TaskModal.jsx   # Modal for task details
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Entry point
│
├── public/                 # Static assets
└── package.json            # Project dependencies and scripts
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.
