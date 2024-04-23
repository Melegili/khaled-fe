pipeline {
    agent any
    environment {
        // Define environment variables such as JFrog and OpenShift credentials
        //JF_REGISTRY_USER = "$JF_REGISTRY_USER"
        //JFROG_URL = 'https://jfrog.example.com/artifactory'
        //JFROG_PASSWORD = "$JFROG_PASSWORD"
        //DOCKER_REGISTRY = 'https://hub.docker.com/repository/docker/hollz/test'
        //ANGULAR_PROJECT = 'your-angular-project-name'
        //DOCKER_IMAGE_NAME = 'devops'
        //OPENSHIFT_SERVER1 = 'http://api.nt-non-ocp.neotek.sa'
        //OPENSHIFT_TOKEN1 = credentials('http://api.nt-non-ocp.neotek.sa')
        //ARGOCD_SERVER = 'your-argocd-server-url'
        //ARGOCD_TOKEN = credentials('argocd-token')
        //DOCKER_IMAGE_TAG = 'latest'
        NODE_ENV = 'production'
        BRANCH_NAME = "${env.BRANCH_NAME}"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('build Docker Image') {
            steps {
                //sh  "docker.build ${DOCKER_REGISTRY} ${DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}/${env.BRANCH_NAME}"
                //sh "docker login -u ${JFROG_USERNAME} -p ${JFROG_PASSWORD} ${DOCKER_REGISTRY}"
                //sh "docker login -u $JF_REGISTRY_USER -p $JFROG_PASSWORD"
                //sh "docker login -u hollz -p dckr_pat_MzuXXKgzGV6qXv9q1YvjR16XCD4"
                sh "docker build -f Dockerfile.dockerfile . -t hollz/test:$BUILD_NUMBER"
                //script {
                //    docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}/${env.BRANCH_NAME}")
                //}
            }
        }
        stage('Push Docker Image') {
            steps {
                sh "docker push http://172.19.250.0:8082/artifactory/devops:$BUILD_NUMBER"
                //sh  "docker.push ${DOCKER_REGISTRY}/${DOCKER_IMAGE_NAME}:${env.BUILD_NUMBER}/${env.BRANCH_NAME}"
            }
        }
        stage('Deploy to OpenShift Dev') {
            //when {
            //   branch 'development'
            //}
            steps {
                // Install kubectl and ArgoCD CLI
                // Log in to OpenShift cluster
                //sh "oc login --server=$OPENSHIFT_SERVER --token=$OPENSHIFT_TOKEN"
                sh "oc login --server=${OPENSHIFT_SERVER1} --token=${OPENSHIFT_TOKEN1}"
                // Set up ArgoCD CLI access
                //sh "argocd login --server ${ARGOCD_SERVER} --token ${ARGOCD_TOKEN}"
                // Create ArgoCD application manifest
                sh 'argocd apply -f argocd-app.yaml'
            }
        }
        stage('Deploy to OpenShift QA') {
            when {
                branch 'qa'
            }
            steps {
                // Install kubectl and ArgoCD CLI
                // Log in to OpenShift cluster
                sh "oc login --server=${OPENSHIFT_SERVER} --token=${OPENSHIFT_TOKEN}"
                // Set up ArgoCD CLI access
                sh "argocd login --server ${ARGOCD_SERVER} --token ${ARGOCD_TOKEN}"
                // Create ArgoCD application manifest
                sh 'argocd apply -f argocd-app.yaml'
            }
        }
        stage('Deploy to OpenShift Production') {
            when {
                branch 'master'
            }
            steps {
                // Install kubectl and ArgoCD CLI
                // Log in to OpenShift cluster
                sh "oc login --server=$OPENSHIFT_SERVER --token=$OPENSHIFT_TOKEN"
                // Set up ArgoCD CLI access
                sh "argocd login --server $ARGOCD_SERVER} --token $ARGOCD_TOKEN"
                // Create ArgoCD application manifest
                writeFile file: 'argocd-app.yaml', text: """
            apiVersion: argoproj.io/v1alpha1
            kind: Application
            metadata:
            name: my-app
            spec:
            destination:
            server: https://kubernetes.default.svc
            namespace: my-namespace
            project: default
            source:
            repoURL: https://github.com/your-repo
            targetRevision: HEAD
            path: my-app
            syncPolicy:
            automated: {}
            # Optionally, define the images section to specify which images to deploy
            # images:
            # - name: your-image-name
            # newTag: latest
            # source:
            # repository: your-docker-registry/your-image-name
            # tag: latest
            # syncPolicy:
            automated:
             prune: true
             selfHeal: true
             """
                sh 'argocd apply -f argocd-app.yaml'
            }
        }
        //stage('Sync with ArgoCD') {
        //    steps {
        //        script {
        //            // Code to trigger ArgoCD sync
        //        }
        //    }
    }   //}
}
