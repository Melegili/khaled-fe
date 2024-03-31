pipeline {
    agent any
    environment {
        IMAGE_REPO_NAME="khaled-fe"
        IMAGE_TAG="latest"
        REPOSITORY_URI= "https://github.com/Melegili/khaled-fe.git"
    }

    stages {
       
        stage('Logging into AWS ECR') {
            steps {
                    
                script {sh "docker login -u hollz -pdckr_pat_MzuXXKgzGV6qXv9q1YvjR16XCD4"
                }
            }
        }
        stage('Cloning git') {
            steps {
                script {
                    checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Melegili/khaled-fe.git']])
                }
            }
        }
        
        stage ('Building Image') {
            steps {
                script {
                    sh "docker build -f Dockerfile.dockerfile . -t hollz/test:poc" 
                }
            }
        }
        stage ('Pushing to ECR') {
            steps {
                script{
                    sh "docker push hollz/test:poc" 
                    }
                }
            }
    }

}
