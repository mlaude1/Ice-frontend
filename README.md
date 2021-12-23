# Mott & Jerry's Ice Cream
#### By Matthew Laude

## Description
This is an ice cream app by the fictional company _Mott & Jerry's Ice Cream_. Users are able to add their favorite flavors of ice cream. The app has full CRUD functionality, allowing users to add, edit, and delete flavors. The user can click on a flavor to view additional details such as a description and ingredients. A carousel displays fake ads for the ice cream parlor, a lightbulb button shows ice cream fun facts, and there is also an audio player at the button for ice cream tunes. 

## User Stories
As a user, I can see a list of all ice creams on the home page \
As a user, I can click on an ice cream, and all the details of the ice cream will show \
As a user, I can add an ice cream on the home page immediately \
As a user, I can delete ice creams from my library \
As a user, I can edit and update my currently existiing ice creams \
As a user, I can view and use the app on various device sizes

## Components
- ice
- AllIces
- SingleIce
- Form
- ModalCard
- ImageSlider
- SliderData
- Footer
- App

## Technologies
Masonite, React, react-router-dom, react-icons, Bulma, Sass


## React Router Route Table
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | getting all ice creams (index)||
| / | Index | post | posting a new ice cream (create) |
| /songs/:id | Show | put | updating an ice cream (update) |
| /songs/:id | Show | delete | deleting an ice cream (destroy) |

## React Component Architecture
```
-> App
  -> Header
  -> Main |state: ice|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: ices|
      -> Route |path="/ice/:id|
        -> Show |Props: ice, updateIce, deleteIce|
```

## Bonus Features
**Carousel** \
A functional carousel is displayed at the top of the Index page. There are buttons on both sides of the carousel that allow the user to cycle through the images. Clicking the button on the right goes to the next image, while clicking the left button goes to the previous image. The user is able to cycle through the images infinitely. Credit for the Carousel goes to [Brian Design](https://www.youtube.com/watch?v=l1MYfu5YWHc&t=523s). How it works is there are two main components: `ImageSlider.js` and `SliderData.js`. The images are stored in `SliderData.js`, which are then imported into the `ImageSlider.js`. The Carousel then utilizes State to display one image at a time, depending on the current index.

**Modal** \
A modal has been included. It is a simple modal that displays fun facts about ice cream when the user clicks on the Lightbulb button. State is also used here with a function to toggle a boolean value. The value is set to 'True' when the modal is clicked and 'False' when it is closed. The text is displayed on a div with a classname of "modal-content" and has been styled using Bulma syntax

**Ice Cream Tunes** \
There is an audio player located inside of the Footer. It utilizes a basic audio tag and receives its audio source from Cloudinary. The music file is the classic ice cream truck theme that is sure to get stuck in your head.
```
<audio src=<audio source> controls>
  Your browser is unsupported
</audio>
```

## Challenges
- I initially started this project using Next.js. Using Next was interesting as it could be used for both my backend API and as a frontend framework. However, I ran into some deployment issues and scrapped it. I decided to return to the tried and true method of Masonite and React. I chose Bulma as my new technology.

- Bulma troubles
  - Bulma took some getting used to. Up until now, I was accustomed to styling my projects using CSS or Sass. Bulma differs in that styling is done by giving elements unique classes
  - some of it is easy. Creating styled buttons and footers is pretty simple
```
<div class="buttons">
  <button class="button is-primary">Primary</button>
  <button class="button is-link">Link</button>
</div>

<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
```
- Bulma troubles (cont.)
  - other things are hard, such as figuring out layouts (e.g. trying to get the layout of the index right). Bulma doesn't explicity show its CSS code
  - as a result, I used Bulma in combination with Sass. I used Sass for changing specific elements: unique colors, animations, fonts, margins, etc. Bulma's color system is: `white, black, light, dark, primary, link, info, success, warning, danger`. If I wanted to use the color pink, I used Sass. 
  - I needed to use Sass for styling the layout of the ice cream cards on the Index page. I also needed it for positioning the Left and Right buttons of the Carousel.
  - Bulma is wonderful for responsiveness though because it's powered by Flexbox. It's also cool because it's modular. In their documentation, they have a list of templates for different elements (e.g. images, columns, general sections). You select the template based on what element you need and then place your code inside of it. And you can rest knowing that Bulma will take care of the responsiveness for you. I didn't write a single media query.  

- added audio player for ice cream music just for fun. Utilized Cloudinary
- added a carousel (taking advantage of React's modular system)
- styling show page - mix of Bulma and Sass
- edited modal: fun facts, mix of Bulma (for font colors and size) and Sass (font-family)
- for some reason, whenever Heroku times out and refreshes, my data reverts back to the seeder data (I need to constantly refresh the data)
