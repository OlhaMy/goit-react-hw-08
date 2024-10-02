<img width="1418" alt="Bildschirmfoto 2024-10-02 um 11 33 36" src="https://github.com/user-attachments/assets/a4494828-4e1a-4df4-b523-b45cb1238e79">
# Phonebook Application with User Authentication

This is a React application that allows users to manage their personal phonebooks securely. Users can register, log in, and manage their contacts in a protected environment. The application demonstrates user authentication, private routes, and interaction with a backend API.

## Demo

[Live Demo](https://goit-react-hw-08-topaz-xi-73.vercel.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contact](#contact)
- [License](#license)

## Features

- **User Authentication**:
  - **Registration**: Create a new user account with an email and password.
  - **Login**: Access your account using your credentials.
  - **Logout**: Securely end your session.
- **Private Routes**: Protects routes that require authentication.
- **Contact Management**:
  - **Add Contacts**: Create new contacts with a name and phone number.
  - **Delete Contacts**: Remove contacts from your phonebook.
  - **Filter Contacts**: Search for contacts by name.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **State Management**: Utilizes Redux Toolkit for efficient state handling.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Redux Toolkit**: Simplifies state management with Redux.
- **React Router DOM**: Enables dynamic routing in a web app.
- **Axios**: Promise-based HTTP client for the browser.
- **Styled Components**: Allows writing CSS in JavaScript.
- **Formik & Yup**: For form management and validation.
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **RESTful API**: Backend server for authentication and data storage.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/olhamy/goit-react-hw-08-phonebook.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd goit-react-hw-08-phonebook
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

### Running the Application

4. **Start the development server**:

   ```bash
   npm start
   ```

   or with yarn:

   ```bash
   yarn start
   ```

5. **Open your browser** and navigate to:

   ```
   http://localhost:3000
   ```

## Usage

1. **Register a New Account**:

   - Click on the **Sign Up** link in the navigation menu.
   - Fill in your **Name**, **Email**, and **Password**.
   - Submit the form to create a new account.

2. **Log In**:

   - Click on the **Log In** link.
   - Enter your **Email** and **Password**.
   - Submit the form to log in to your account.

3. **Manage Contacts**:

   - **Add a Contact**:
     - Navigate to the **Contacts** page.
     - Enter the contact's **Name** and **Phone Number**.
     - Click **Add Contact** to save.
   - **View Contacts**:
     - Your contacts will be listed on the Contacts page.
   - **Delete a Contact**:
     - Click the **Delete** button next to a contact to remove it.
   - **Filter Contacts**:
     - Use the search input to filter contacts by name.

4. **Log Out**:

   - Click on the **Log Out** button to end your session securely.

## Screenshots

### Registration Page

![Registration Page](screenshots/registration.png)

### Contacts Page

![Contacts Page](screenshots/contacts.png)

*Note: Replace the placeholder images with actual screenshots from the project.*

## Contact

- **Author**: Olha Mykhalchuk
- **GitHub**: [olhamy](https://github.com/olhamy)

## License

This project is open-source and available under the [MIT License](LICENSE).


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
