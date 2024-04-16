pipeline {
    agent any
    environment {
        // Define environment variables such as JFrog and OpenShift credentials
        JFROG_USER = credentials('jfrog-username')
        JFROG_URL = 'https://jfrog.example.com/artifactory'
        JFROG_PASSWORD = credentials('jfrog-password')
        DOCKER_REGISTRY = 'your-docker-registry-url'
        ANGULAR_PROJECT = 'your-angular-project-name'
        DOCKER_IMAGE_NAME = 'your-docker-image-name'
        OPENSHIFT_SERVER = 'your-openshift-server-url'
        OPENSHIFT_TOKEN = credentials('openshift-token')
        ARGOCD_SERVER = 'your-argocd-server-url'
        ARGOCD_TOKEN = credentials('argocd-token')
        DOCKER_IMAGE_TAG = 'latest'
        NODE_ENV = 'production'
        BRANCH_NAME = "${env.BRANCH_NAME}"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}/${env.BRANCH_NAME}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                sh "docker login -u ${JFROG_USERNAME} -p ${JFROG_PASSWORD} ${DOCKER_REGISTRY}"
                script {
                    docker.push("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}/${env.BRANCH_NAME}")
                }
            }
        }
        stage('Deploy to OpenShift Dev') {
            when {
                branch 'development'
            }
            steps {
                script {
                    deployToOpenShift('development')
                }
            }
        }
        stage('Deploy to OpenShift QA') {
            when {
                branch 'qa'
            }
            steps {
                script {
                    deployToOpenShift('qa')
                }
            }
        }
        stage('Deploy to OpenShift Production') {
            when {
                branch 'master'
            }
            steps {
                script {
                    deployToOpenShift('production')
                }
            }
        }
        //stage('Sync with ArgoCD') {
            //steps {
             //   script {
                    // Code to trigger ArgoCD sync
               // }
          //  }
        //}
    }    
    def deployToOpenShift(environment) {
        openshift.withCluster() {
            openshift.withProject(env.OPENSHIFT_PROJECT) {
                openshift.deploy("your-app-name-${environment}") {
                    container {
                        image("${JFROG_REPO}:${env.BRANCH_NAME}")
                    }
                }
            }
        }
    }
}
