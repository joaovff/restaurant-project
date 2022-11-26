# Project Name
restaurant-project
<br>

## Description

Display a digital Restaurant menu, listing every dish. Make the owner a special Login and customers just create an user without login to make review.
Have a page to review every dish with stars and then a pre-made comment to select

<br>

## User Stories

-  **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
-  **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
-  **homepage** - As a user I want to be able to access the homepage and see an image of the restaurant, a catch phrase and the house main dishes.
-  **sign up** - As a user I want to sign up on the web page so that I can review any dish and add a comment. As the owner i want to add dishes, edit my dishes and see the reviews.
-  **login** - As a user I want to be able to log in on the web page so that I can get back to my account
-  **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
-  **favorite list** - As a user I want to see the list of my favorite and delete them.
-  **edit user** - As the owner I want to be able to edit my dishes.
-  **result** - As a user I want to see the current overall rating of the restaurant and the list of main dishes. As a owner i want to see the specific reviews for each dish
-  **restaurant listing** - As a user I want to see more details of the restaurant, be able to call them and visit their website.

<br>

## Server Routes (Back-end):

| **Method** | **Route**                          | **Description**                                                          | Request - Body                                           |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route. Renders home `index` view.                              |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                               |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                                     | {name, email }                                     |
| `GET`      | `/signup`                          | Renders `signup` form view.                                              |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates c in the DB.             | { email, password }                                      |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.                         |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`               | Private route. Render the `favorites` view.                              |                                                          |
| `POST`     | `/private/favorites/`              | Private route. Adds a new favorite for the current user.                 | { name, cuisine, city, }                                 |
| `DELETE`   | `/private/favorites/:restaurantId` | Private route. Deletes the existing favorite from the current user.      |                                                          |
| `GET`      | `/restaurants`                     | Renders `restaurant-list` view.                                          |                                                          |
| `GET`      | `/restaurants/details/:id`         | Renders `restaurant-details` view for the particular restaurant.         |                                                          |

## Models

Owner model

```javascript
{
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            "Please provide a valid email.",
         ],

  passwordHash: {
         type: String,
         required: [true, "Password is required."],
      },
  ownerIdSecret: String // how to add a word/keyword to identify the owner signup

}

```

Customer review model

```javascript
{
  name: {
    type: String,
    unique: true
  }
  email: {
    type: String,
    unique: true,
    required: false
  },
  stars: Number
  comment: [Number]
}

```

Dishes model

```javascript
{
  dishId: String,
  picture_url: String,
  ingredients: [String],
  alergenics: [String], 
  stars: [{ type: Schema.Types.ObjectId, ref: "stars" }], // only the review stars
  comment: [{ type: Schema.Types.ObjectId, ref: "comment" }] // only the review comments

}

```

<br>

## API's
  Google Maps API

<br>

## Packages
  epxress, express-session
  mongoose, connect-mongo
  ironlauncher
  bcryptjs
  
<br>

## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)

<br>

## Links

### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()

<br>

### Slides

The url to your presentation slides


### Contributors

António Cortez - [`<github-username>`](https://github.com/AAMCortez) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/antónio-cortez/)

João Silve - [`<github-username>`](https://github.com/joaovff) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/joao-figueiredo-silva/)
