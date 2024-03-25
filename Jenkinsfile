pipeline {
    agent any
    environment {
        IMAGE_TAG="latest"
        REPOSITORY_URI= "https://hub.docker.com/repository/docker/hollz/test/general"
    }

    stages {
       
        stage('Logging into AWS ECR') {
            steps {
                    
                script {sh "docker login --username hollz --password P@ssw0rd"
                }
            }
        }
        stage('Cloning git') {
            steps {
                script {
                    checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/***********/CI-CD-PIPELINE.git']])
                }
            }
        }
        
        stage ('Building Image') {
            steps {
                script {
                    dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
                }
            }
        }
        stage ('Pushing to ECR') {
            steps {
                script{
                    docker.withRegistry('https://****************.dkr.ecr.us-east-2.amazonaws.com', 'ecr:us-east-2:aws-credentials') {                    
                    dockerImage.push("${env.BUILD_NUMBER}")
                    dockerImage.push("latest")
                    }
                }
            }
        }
        stage ('Updating the Deployment File') {
            environment {
                GIT_REPO_NAME = "CI-CD-PIPELINE"
                GIT_USER_NAME = "****************"
            }
            steps {
                withCredentials([string(credentialsId: 'github', variable: 'GITHUB_TOKEN')]){
                    sh '''
                    
                        git pull https://github.com/****************/CI-CD-PIPELINE.git
                        git config  user.email "****************.com"
                        git config  user.name "****************"
                        BUILD_NUMBER=${BUILD_NUMBER}
                        sed -i "s/replaceImageTag/${BUILD_NUMBER}/g" ArgoCD/deployments.yml
                        git add ArgoCD/deployments.yml
                        git commit -m "updated the image ${BUILD_NUMBER}"
                        git push @github.com/${GIT_USER_NAME}/${GIT_REPO_NAME">@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME">@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME">https://${GITHUB_TOKEN}@github.com/${GIT_USER_NAME}/${GIT_REPO_NAME} HEAD:main
                        
                       
                    '''
                }
            }
        }
    }

}
