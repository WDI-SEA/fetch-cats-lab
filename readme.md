# Fetch from Cat API

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
  * `npm start` - start the BrowserSync server
  * `npm run lint:css` - lint CSS
  * `npm run lint:js` - lint JS

We are going to use what we've learned so far to display a list of images from a fetch request to the [Cats API](https://thecatapi.com/). Take some time to look through the documentation and see if you can make a request from your browser for a list of images. Can you limit the number of results to 10?

### Requirements

* An input field for the user to enter the number of cat pictures they want to see
* A submit button
* When form is submitted with a valid number, that number of cat photos should display on the page
* Prevent bad requests: make sure the user can't search for a negative number of cat photos
* Allow repeated searches: replace old search results with new search results each time the form is submitted

## Suggested proccess

It is important to break down any development project into smaller pieces and tackle them one at a time. Here is a list of how you might want to attack this lab.

* Create your form
* Prevent default form submission and verify that you can type something into the form
* Handle bad input (maybe display an error message if the user enters a negative number)
* Use fetch to make a request. Show data in console.
* Display the photos! Make sure to remove any old photos from previous form submissions first.

## Bonus

* Use a jQuery plug-in to render the photos in a carousel or other cool feature.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
