pipeline {
  agent any


  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t nodejs-demo-app .'
        }
      }

    stage('Run Application') {
      steps {
        sh 'docker rm -f nodejs-demo-container || true '
        sh 'docker run -d --name nodejs-demo-container -p 3000:3000 nodejs-demo-app'
        } 
      }
    }

  }




