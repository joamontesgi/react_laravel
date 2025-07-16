pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = "react_laravel_ci"
  }

  stages {

    stage('Clonar repositorio') {
      steps {
        git url: 'https://github.com/joamontesgi/react_laravel.git', branch: 'main'
      }
    }

    stage('Levantar contenedores') {
      steps {
        sh 'docker-compose down || true'
        sh 'docker-compose up -d --build'
      }
    }

    stage('Esperar base de datos') {
      steps {
        echo 'Esperando que MySQL esté listo...'
        sh '''
          for i in {1..15}; do
            docker exec mysql_db mysql -uroot -proot -e "SELECT 1;" && break
            echo "Esperando MySQL... ($i)"
            sleep 3
          done
        '''
      }
    }

    stage('Instalar dependencias backend (Laravel)') {
      steps {
        sh 'docker exec laravel_app composer install'
        sh 'docker exec laravel_app php artisan key:generate'
        sh 'docker exec laravel_app php artisan migrate'
      }
    }

    stage('Instalar dependencias frontend (React)') {
      steps {
        sh 'docker exec react_app npm install'
      }
    }

    stage('Probar backend (Laravel)') {
      steps {
        sh 'docker exec laravel_app php artisan test'
      }
    }

    stage('Probar frontend (React)') {
      steps {
        sh 'docker exec react_app npm test -- --watchAll=false || true'
      }
    }
  }

  post {
    always {
      echo 'Limpiando contenedores...'
      sh 'docker-compose down'
    }
  }
}
