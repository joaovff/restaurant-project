# Project Name
restaurant-project
<br>

## Description

Display a digital Restaurant menu, listing every dish. Make the owner a special login to create new dishes, edit and see the datas about the dish(rating average).
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
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Please provide a valid email.",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }

```

Dishes model

```javascript
{
      name: String,
      image: String,
      ingredients: String,
      type: {
         type: String,
         enum: ["starter", "main", "dessert"],
      },
      price: Number,
      rating: [
         {
            type: Schema.Types.ObjectId,
            ref: "Rating",
         },
      ],
   },
   {
      timestamps: true,
}

Review review model

```javascript
   {
      stars: Number,
      average: Number,
      goodComments: [String],
      badComments: [String],
   },
   {
      timestamps: true,
   }

```



```

<br>

## API's
  QR API
<br>

## Packages
  Express, <br>
  Express-Session,<br>
  Mongoose,<br>
  Connect-Mongo,<br>
  Chart.js
  Bcryptjs,<br>
  Nodemailer,<br>
  
<br>

## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)

<br>

## Links

### Git

The url to your repository and to your deployed project

[Repository Link]
https://github.com/joaovff/restaurant-project

[Deploy Link]()

<br>

### Slides

The url to your presentation slides


### Contributors

João Silva - [`<github-username>`](https://github.com/joaovff) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/joao-figueiredo-silva/)

António Cortez - [`<github-username>`](https://github.com/AAMCortez) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/antónio-cortez/)

