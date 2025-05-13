# Employee Management System

A full-stack web application for managing employee data and operations, built with Node.js and React.

## Project Overview

The Employee Management System is a comprehensive web application designed to streamline employee data management. It provides a user-friendly interface for HR personnel and managers to handle employee information, attendance, performance reviews, and more.

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- RESTful API architecture

### Frontend
- React
- Bootstrap
- React Router
- Axios for API calls

### DevOps & Deployment
- Docker for containerization
- Kubernetes for orchestration
- GitHub Actions for CI/CD pipelines
- Minikube for local Kubernetes development

## Project Structure

```
/
├── app/
│   ├── backend/          # Node.js Express backend
│   │   ├── models/       # Mongoose data models
│   │   ├── server.js     # Express app entry point
│   │   ├── package.json  # Backend dependencies
│   │   └── Dockerfile    # Backend container configuration
│   │
│   └── frontend/         # React frontend
│       ├── src/          # React components and logic
│       ├── public/       # Static assets
│       ├── package.json  # Frontend dependencies
│       └── Dockerfile    # Frontend container configuration
│
├── kubernetes/           # Kubernetes configuration files
│   ├── namespace.yaml    # Namespace definition
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── backend-service.yaml
│   └── frontend-service.yaml
│
└── .github/workflows/    # GitHub Actions workflows
    ├── ci-cd.yml         # CI/CD pipeline configuration
    └── deploy.yml        # Deployment workflow
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker (for containerized development)
- Minikube (for local Kubernetes development)

### Installation & Setup

#### Without Docker (Development Mode)

1. **Clone the repository**
   ```
   git clone https://github.com/EshaAamir-SE/employment-management-system.git
   cd employment-management-system
   ```

2. **Set up the backend**
   ```
   cd app/backend
   npm install
   ```

3. **Set up the frontend**
   ```
   cd ../frontend
   npm install
   ```

4. **Run the backend**
   ```
   cd ../backend
   npm run dev
   ```
   The backend will start on http://localhost:5000

5. **Run the frontend**
   ```
   cd ../frontend
   npm start
   ```
   The React development server will start on http://localhost:3000

### Running with Docker and Kubernetes

1. **Start Minikube**
   ```
   minikube start --driver=docker
   ```

2. **Build Docker images**
   ```
   eval $(minikube docker-env)              # Linux/Mac
   minikube docker-env | Invoke-Expression  # Windows PowerShell
   
   docker build -t employee-backend:latest ./app/backend
   docker build -t employee-frontend:latest ./app/frontend
   ```

3. **Deploy to Kubernetes**
   ```
   kubectl apply -f kubernetes/namespace.yaml
   kubectl apply -f kubernetes/backend-deployment.yaml -n emp-management
   kubectl apply -f kubernetes/frontend-deployment.yaml -n emp-management
   kubectl apply -f kubernetes/backend-service.yaml -n emp-management
   kubectl apply -f kubernetes/frontend-service.yaml -n emp-management
   ```

4. **Access the application**
   ```
   minikube service frontend-service -n emp-management
   ```

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The workflow:
1. Builds Docker images for backend and frontend
2. Pushes images to Docker Hub
3. Deploys to Kubernetes

## License

This project is licensed under the ISC License.

## Contributors

- Esha Aamir 