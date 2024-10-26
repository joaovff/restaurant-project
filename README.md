# IDEA Restaurant

**IDEA Restaurant** is a digital menu application designed for restaurant owners to manage their dishes, view customer reviews, and manage reservations. Customers can browse through the digital menu, view detailed information about each dish, and leave reviews.

## Tech Stack

- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose for object modeling)
- **User Authentication**: Bcrypt for password encryption
- **Template Engine**: Handlebars for server-side rendering
- **Frontend**: HTML, CSS, Bootstrap
- **Image Storage**: Cloudinary for storing images of dishes
- **Email Service**: Nodemailer for sending reservation confirmations
- **Authentication & Authorization**: Custom middleware for route protection

## Features

- **Owner Dashboard**:
  - Create, edit, and delete dishes.
  - View reviews and ratings of dishes.
  - Access insights through a dashboard that displays ratings and comments.
  - Manage account settings (e.g., change password).

- **Digital Menu**:
  - Display categorized dishes (Starters, Main Dishes, Desserts).
  - Each category displays the corresponding dishes.
  - Clickable dish items redirect to a detailed page, showing more information and reviews.
  - Users can leave a review on each dish.

- **User Authentication**:
  - Secure sign-up and login for restaurant owners.
  - Password encryption using **bcrypt**.

- **Booking System**:
  - Users can book a table through a contact form.
  - Sends email notifications for bookings using **Nodemailer**.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** instance (local or cloud, e.g., MongoDB Atlas).
- **Cloudinary** account for image uploads.
- **Mailtrap** or SMTP server for testing email sending.

### Installation

1. **Clone the repository**:

   ```bash
     git clone https://github.com/joaovff/restaurant-project.git
     cd restaurant-project
   ```

2. **Install dependencies:**:

   ```bash
     npm install
   ```
   
3. **Set up environment variables:**:

   ```bash
     MONGODB_URI=your-mongodb-connection-string
     CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
     CLOUDINARY_API_KEY=your-cloudinary-api-key
     CLOUDINARY_API_SECRET=your-cloudinary-api-key
     JWT_SECRET=your-jwt-secret
     SMTP_USER=your-smtp-user
     SMTP_PASS=your-smtp-pass
   ```

4. **Running the Server**:

   ```bash
     npm run dev
   ```

### API Endpoints

#### Authentication

- **GET** `/auth/signup`  
  Render the sign-up page.

- **POST** `/auth/signup`  
  Create a new user with encrypted password.

- **GET** `/auth/login`  
  Render the login page.

- **POST** `/auth/login`  
  Authenticate user and create a session.

- **GET** `/auth/logout`  
  Log out the user and destroy the session.

#### Dishes

- **GET** `/dishes/starters`  
  Retrieve and display all starter dishes.

- **GET** `/dishes/mains`  
  Retrieve and display all main dishes.

- **GET** `/dishes/desserts`  
  Retrieve and display all dessert dishes.

- **GET** `/dishes/:id`  
  Retrieve and display the details of a specific dish, including reviews and average rating.

- **POST** `/dishes/:id`  
  Submit a review for a specific dish.

#### Owner Management

- **GET** `/manager`  
  Render the manager home page (dashboard).

- **GET** `/manager/create`  
  Render the page to create a new dish.

- **POST** `/manager/create`  
  Create a new dish with image upload (via Cloudinary).

- **GET** `/manager/edit`  
  List all dishes available for editing.

- **GET** `/manager/edit/:id`  
  Render the edit page for a specific dish.

- **POST** `/manager/edit/:id`  
  Update the details of a specific dish.

- **POST** `/manager/delete/:id`  
  Delete a specific dish.

- **GET** `/manager/ratings-average`  
  View average ratings of dishes in a visual format (canvas).

- **GET** `/manager/comments`  
  View comments left by users on dishes.

#### Reservations

- **POST** `/send-mail`  
  Send a reservation request email using **Nodemailer**.

#### Home

- **GET** `/`  
  Render the home page with a list of all dishes.


![image](https://github.com/joaovff/restaurant-project/assets/110693830/f182ae03-a961-48c2-b3b2-ba2f0684bf1c)

![image](https://github.com/joaovff/restaurant-project/assets/110693830/d0346b80-58ff-4a96-bb30-c21dff09ee83)

![image](https://github.com/joaovff/restaurant-project/assets/110693830/3719495b-9638-4d61-9adc-89efd4351eab)

![image](https://github.com/joaovff/restaurant-project/assets/110693830/04705488-e965-4c2a-b2e5-86012c7c3f93)

## Default Auth
  Login: user@idea.com </br>
  Password: User$123

### License
Any commercial use of the software is only available by mutual agreement.
