pipeline {
    agent any 
    environment {
        DOCKERHUB = credentials('Docker_hub')
    }
    stages {
        stage('gitclone') {
            steps {
                git 'https://github.com/umangSth/devOps_Assignment_3.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t umangsth/C0882758_Assignment_4:latest .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'Docker_hub', passwordVariable: 'DOCKERHUB_PSW', usernameVariable: 'DOCKERHUB_USR')]) {
                    sh 'echo $DOCKERHUB_PSW | docker login -u $DOCKERHUB_USR --password-stdin'
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                sh 'docker push umangsth/C0882758_Assignment_4:latest'
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
        always {
            sh 'docker logout'
        }
    }
}
