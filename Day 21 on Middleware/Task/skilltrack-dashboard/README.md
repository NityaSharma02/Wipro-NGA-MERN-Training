# SkillTrack Academy Student Progress Dashboard

## Overview
The SkillTrack Academy Student Progress Dashboard is an internal application developed using Express.js. It allows instructors to view student information, check progress, and monitor logs, errors, and request behavior.

## Features
- **Request Logging**: Custom middleware logs every incoming request with a timestamp, method, and URL.
- **Student Data Validation**: Middleware validates incoming student data to prevent invalid submissions.
- **Body Parsing**: Built-in Express middleware processes JSON and form submissions.
- **Formatted Logging**: Integration with Morgan for clean, formatted logs of HTTP requests.
- **Error Handling**: Custom error-handling middleware captures unexpected errors and provides user-friendly messages.

## Project Structure
```
skilltrack-dashboard
├── src
│   ├── app.js
│   ├── routes
│   │   ├── index.js
│   │   └── students.js
│   ├── controllers
│   │   └── studentsController.js
│   ├── middleware
│   │   ├── requestLogger.js
│   │   ├── validateStudent.js
│   │   └── errorHandler.js
│   ├── views
│   │   ├── layouts
│   │   │   └── main.ejs
│   │   ├── students
│   │   │   ├── list.ejs
│   │   │   └── form.ejs
│   │   └── error.ejs
│   ├── public
│   │   └── css
│   │       └── styles.css
│   └── data
│       └── students.json
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd skilltrack-dashboard
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Access the dashboard in your web browser at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.