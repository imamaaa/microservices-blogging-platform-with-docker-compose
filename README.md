# Blogging Platform - Microservices Architecture

[![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)  
[![Flask](https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)  
  

## Overview

This project implements a microservices architecture for a blogging platform using Docker and Docker Compose. It consists of three key microservices:

1. **pgAdmin**: A web-based interface for database administrators to manage the PostgreSQL database.
2. **PostgreSQL**: A scalable database service that stores blog posts, user data, and transaction logs.
3. **Flask Blog Application**: A web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts.

Each service runs in its own Docker container and is managed through Docker Compose for scalability and modularity.

---

## Architecture

- **pgAdmin**: Runs on port `5050`, used for managing and querying the PostgreSQL database.
- **PostgreSQL**: Runs on port `5432`, acting as the central storage for blog posts.
- **Flask Blog Application**: Runs on port `8000`, provides API endpoints for interacting with the blog platform.

---

## Features

- **Microservices-based** architecture for scalability & modularity.  
- **RESTful API** for CRUD operations on blog posts.  
- **PostgreSQL integration** for reliable data storage.  
- **pgAdmin** for database queries and schema management.  
- **Dockerized Deployment** using **Docker & Docker Compose**.  
- **Secure & Scalable** with independent services. 

---

## **Tech Stack**  
| Technology     | Purpose |
|---------------|---------|
| **Flask**     | Backend Web Framework (Python) |
| **PostgreSQL** | Database for storing blog data |
| **pgAdmin**   | UI for PostgreSQL Management |
| **Docker**    | Containerization |
| **Docker Compose** | Service Orchestration |

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (must be installed)
- [Docker Compose](https://docs.docker.com/compose/install/) (must be installed)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (for cloning the repository)

---
## Workflow  
1. **User** interacts with the **Flask Blog API** to **create, read, update, and delete** posts.  
2. **Flask App** communicates with **PostgreSQL** to **store and retrieve** blog data.  
3. **pgAdmin** is available for **database queries and management**.  
4. **All services** are **containerized** using **Docker** and managed with **Docker Compose**.  
---

## Getting Started  

### 1️. Clone the Repository  
```bash
git clone https://github.com/imamaaa/microservices-blogging-platform-with-docker-compose.git  
cd microservices-blogging-platform-with-docker-compose
```
### 2️. Run the Microservices using Docker Compose
```bash
docker-compose up --build -d
```
This starts all services in detached mode ('-d').
### 3️. Access the Services
- Blog API → http://localhost:8000
- pgAdmin → http://localhost:5050
- PostgreSQL → Runs internally on localhost:5432
---
## API Endpoints  

| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| GET    | `/posts`     | Get all posts        |
| GET    | `/posts/<id>` | Get post by ID       |
| POST   | `/posts`     | Create a new post    |
| PUT    | `/posts/<id>` | Update a post        |
| DELETE | `/posts/<id>` | Delete a post        |


## 📦 Deployment on Docker Hub

If you want to publish the Flask application as a Docker image:

1️. **Build the Docker image:**  
```bash
docker build -t YOUR_DOCKERHUB_USERNAME/blog-app .
```
2️. Push the image to Docker Hub:
```bash
docker push YOUR_DOCKERHUB_USERNAME/blog-app
```

