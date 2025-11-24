pipeline {
    agent any

    tools {
        nodejs "node16"
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t lsap-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f lsap-app || true
                docker run -d --name lsap-app -p 8081:3000 lsap-app
                '''
            }
        }
    }
}

