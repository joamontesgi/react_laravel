FROM php:8.2-cli

# Dependencias de sistema
RUN apt-get update && apt-get install -y \
    zip unzip git curl libzip-dev libpng-dev libonig-dev \
    && docker-php-ext-install zip pdo pdo_mysql

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Crear directorio de la app
WORKDIR /var/www

# Puerto por defecto de Laravel
EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
