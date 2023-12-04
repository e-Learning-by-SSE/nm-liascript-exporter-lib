@Library('web-service-helper-lib') _

pipeline {
    agent {
        label 'docker && maven'
    }

    environment {
        TARGET_PREFIX = 'e-learning-by-sse/nm-liascript-exporter-lib'
        NPMRC = 'e-learning-by-sse'

        API_VERSION = packageJson.getVersion()
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage("Starting NodeJS Build") {
            agent {
                docker {
                    image 'node:18-bullseye'
                    reuseNode true
                    label 'docker'
                    args '--tmpfs /.cache -u root -v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            stages {
                stage("Prepare Build env") {
                    steps {
                        sh 'rm -rf output/'
                        sh 'rm -rf src/output/'
                        sh 'npm install'
                        sh 'apt update'
                        sh 'apt install -y docker.io'
                    }
                }

                stage('Build') {
                    steps {
                        sh 'npx tsc'
                    }
                }

                stage('Publish NPM Package') {
                    steps {
                        npmPublish("${NPMRC}")
                    }
                }
            }
        }
    }
}
