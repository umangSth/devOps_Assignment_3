pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your version control system (e.g., Git)
                git 'https://github.com/umangSth/devOps_Assignment_3'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build the Docker image using Dockerfile
                script {
                    docker.build('C0882758_Assignment_4:tag')
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                // Login to Docker Hub
                script {
                    docker.withRegistry('https://registry.hub.docker.com', '5df2b1e7-ae31-4b60-b5d3-8ecc972315c8') {
                        // Push the Docker image to Docker Hub
                        docker.image('C0882758_Assignment_4:tag').push('latest')
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo 'Docker image successfully built and pushed to Docker Hub!'
        }
        failure {
            echo 'Failed to build or push Docker image to Docker Hub'
        }
    }
}
