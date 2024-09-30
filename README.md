# Blogging Platform - Microservices Architecture

## Overview

This project implements a microservices architecture for a blogging platform using Docker and Docker Compose. It consists of three key microservices:

1. **pgAdmin**: A web-based interface for database administrators to manage the PostgreSQL database.
2. **PostgreSQL**: A scalable database service that stores blog posts, user data, and transaction logs.
3. **Blog Application (Flask)**: A web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts.

Each service runs in its own Docker container and is managed through Docker Compose for scalability and modularity.

---

## Architecture

- **pgAdmin**: Runs on port `5050`, used for managing and querying the PostgreSQL database.
- **PostgreSQL**: Runs on port `5432`, acting as the central storage for blog posts.
- **Flask Blog Application**: Runs on port `8000`, provides API endpoints for interacting with the blog platform.

---

## Features

- **CRUD Operations**: The blog application allows you to create, read, update, and delete blog posts.
- **Database Management**: Manage and interact with the PostgreSQL database using pgAdmin.
- **Dockerized Microservices**: Each component (pgAdmin, PostgreSQL, Flask app) is containerized and can be scaled independently.

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (must be installed)
- [Docker Compose](https://docs.docker.com/compose/install/) (must be installed)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (for cloning the repository)

---

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
