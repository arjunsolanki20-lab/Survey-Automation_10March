pipeline {
    agent any

    tools {
        nodejs 'Node'
    }

    options {
        ansiColor('xterm')
    }

    environment {
        LANG = 'en_US.UTF-8'
        LC_ALL = 'en_US.UTF-8'
        FORCE_COLOR = '1'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Login Tests Only') {
            steps {
                sh '''
                    export TERM=dumb
                    export FORCE_COLOR=0
                    npx cypress run --spec "cypress/e2e/features/**/*.feature" --reporter min
                '''
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npm run report:allure:generate'
            }
        }

    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            emailext(
                subject: "PASSED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    <b style='color:green'>All tests passed!</b><br>
                    Job: ${env.JOB_NAME}<br>
                    Build: #${env.BUILD_NUMBER}<br>
                    Branch: ${env.GIT_BRANCH}<br>
                    <a href="${env.BUILD_URL}">View Build</a>
                """,
                mimeType: 'text/html',
                to: 'pallavi8kadam@gmail.com'
            )
        }
        failure {
            emailext(
                subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    <b style='color:red'>Build Failed!</b><br>
                    Job: ${env.JOB_NAME}<br>
                    Build: #${env.BUILD_NUMBER}<br>
                    Branch: ${env.GIT_BRANCH}<br>
                    <a href="${env.BUILD_URL}console">View Console Output</a>
                """,
                mimeType: 'text/html',
                to: 'pallavi8kadam@gmail.com'
            )
        }
    }
}
