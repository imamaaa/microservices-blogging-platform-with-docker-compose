# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY ./app /app
COPY ./frontend /app/frontend 

# Install necessary Python packages, including Flask-CORS
RUN pip install flask psycopg2-binary Flask-CORS

# Expose port 8000 to the outside world
EXPOSE 8000

# Run app.py when the container launches
CMD ["python", "app.py"]
