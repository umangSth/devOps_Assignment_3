pipeline {
    agent any  // or specify an agent with Docker installed if available
    
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'Git', url: 'https://github.com/umangSth/devOps_Assignment_3'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('C0882758_Assignment_4:latest')
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withDockerRegistry([url:'https://registry.hub.docker.com', credentialsId: '5df2b1e7-ae31-4b60-b5d3-8ecc972315c8']) {
                        docker.image('C0882758_Assignment_4:latest').push()
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
