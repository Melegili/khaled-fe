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
                    sh "dockerImage = sudo docker build -f Dockerfile.dockerfile ." 
                }
            }
        }
        stage ('Pushing to ECR') {
            steps {
                script{
                    sh "dockerPush = sudo docker push hollz/test:test" 
                    }
                }
            }
        stage ('Updating the Deployment File') {
            environment {
                GIT_REPO_NAME = "khaled-fe"
                GIT_USER_NAME = "Melegili"
            }
            steps {
                withCredentials([string(credentialsId: 'github', variable: 'GITHUB_TOKEN')]){
                    sh '''
                    
                        git pull https://github.com/Melegili/khaled-fe.git
                        git config  user.email "mohamed_elegili@outlook.com"
                        git config  user.name "Melegili"
                        BUILD_NUMBER=${BUILD_NUMBER}
                        sed -i "s/replaceImageTag/${BUILD_NUMBER}/g" khaled-fe/deployments.yml
                        git add khaled-fe/deployments.yml
                        git commit -m "updated the image ${BUILD_NUMBER}"
                        git push @github.com/${GIT_USER_NAME}/${GIT_REPO_NAME">@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME">@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME">https://${GITHUB_TOKEN}@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME} HEAD:main
                        
                       
                    '''
                }
            }
        }
    }

}
