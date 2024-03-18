pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'Git', url: 'https://github.com/umangSth/devOps_Assignment_3.git'
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
                    docker.withDockerRegistry([url:'https://registry.hub.docker.com', credentialsId: 'Docker_hub']) {
                        docker.image('C0882758_Assignment_4:latest').push()
                    }
                }
            }
        }
        
        stage('Logout from Docker Hub') {
            steps {
                script {
                    docker.logout()
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
