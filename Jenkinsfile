
pipeline {
    agent any

    triggers {
        githubPush()
    }

    options {
        skipDefaultCheckout(true)
    }

    environment {
        CONTAINER_NAME = 'nest-container'
        IMAGE_NAME = 'nest-image'
        EMAIL = 'usamahafeez948@gmail.com'
        PORT = '3000'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'descriptive-pipeline', url: 'git clone -b descriptive-pipeline \
                        https://github.com/usamauddin/NEST-JENKINS'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop And Remove Previous Container') {
            steps {
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Docker Run Container') {
            steps {
                sh '''
                    docker run -d \
                    -p ${PORT}:${PORT} \
                    --name $CONTAINER_NAME \
                    $IMAGE_NAME
                '''
            }
        }

        stage('Send Email Notification') {
            steps {
                emailext(
                    subject: 'Nest Backend Deployed',
                    body: 'Nest Backend Deployed On EC2',
                    to: "${EMAIL}"
                )
            }
        }
    }
}
