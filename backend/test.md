# React-Laravel Authentication (React + Vite) :rocket:

This project demonstrates authentication using React as the frontend and Laravel as the backend, utilizing cookies and Laravel Sanctum for auth management.

:construction: Work in Progress :construction:

[![React](https://img.shields.io/badge/-React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/-Vite-B73BFE?style=flat-square&logo=vite&logoColor=F28D00)](https://vitejs.dev/)
[![Laravel](https://img.shields.io/badge/-Laravel-E749A5?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com/)
[![Sanctum](https://img.shields.io/badge/-Sanctum-7A7F8A?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com/docs/10.x/sanctum)

## Features

- React frontend with Vite for fast development
- Laravel backend with Sanctum for secure authentication
- Cookie-based authentication

## Dependencies

- **react-router-dom**: Handles routing in the React application, allowing for navigation between different components without page reloads.
- **Axios**: A promise-based HTTP client for making API requests to the Laravel backend.
- **Sweetalert**: A beautiful, responsive, customizable, and accessible replacement for JavaScript's popup boxes.
- **Laravel Sanctum**: Provides simple token-based authentication for SPAs (Single Page Applications) and mobile apps.

## Getting Started

1. Clone the repository
2. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```
3. Set up the backend:
    - Navigate to the Laravel project directory
    - Install backend dependencies:
      ```bash
      cd backend
      composer install
      ```
    - Configure your environment variables in `.env`
    - Run migrations:
      ```bash
      php artisan migrate
      ```
4. Start the development servers:
    - For React frontend:
      ```bash
      cd frontend
      npm run dev
      ```
    - For Laravel backend:
      ```bash
      cd backend
      php artisan serve
      ```

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

