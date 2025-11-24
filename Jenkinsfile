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

        // Deployment stage ONLY DEFINES COMMANDS
        // Your local machine actually executes Docker
        stage('Deploy') {
            steps {
                echo "Deployment instructions:"
                echo "1. Run 'docker build -t lsap-app .' locally"
                echo "2. Run 'docker run -d -p 8081:3000 lsap-app' locally"
                echo "3. Check /health locally"
            }
        }
    }
}
