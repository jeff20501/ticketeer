# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

I created a Conference Ticket Generator web app as part of a Frontend Mentor challenge. The goal was to build an interactive form that allows users to input their details, upload an avatar image (with validation), and generate a personalized digital ticket for an upcoming coding conference.

### The challenge

1. File Size Validation

Initially, uploaded images over 500KB were accepted, which broke the design. I learned how to:

Display an appropriate error and prevent preview:
```js
  if (file.size > maxSize) {
      info.innerHTML = "File too large Upload under 500KB."
      return false
  }
```

Limit file size using byte calculation:
500KB = 500 * 1024 bytes

2. Displaying Text Over Image
When overlaying user data on the ticket background, positioning was tricky. I had to:

Use position: absolute for layered text.

Learn how to align elements over background images cleanly.

3. Gradient Text Styling
I used a gradient on the user name using CSS:

```css
.user-name{
  background: linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%));
  background-clip: text;
color: transparent;
}
```

4. Form Validation Logic
Implementing real-time validation for:

- Empty name
- Invalid email
- Empty GitHub username



I learned to improve the user experience by:

Allowing users to remove or change uploaded images.

Preventing accidental double-event firing using ```stopPropagation()```



### Screenshot

![](./assets/images/Screenshot_20-7-2025_165423_127.0.0.1.jpeg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

HTML5 – for semantic and accessible structure.

CSS3 – used extensively for layout, design, and visual effects (including gradient text).

JavaScript (Vanilla) – used for form validation, file handling, DOM manipulation, and localStorage.

### What I learned

```FileReader``` API – to convert uploaded image to a Base64 string for easy rendering.

```localStorage``` – for passing user data between form page and ticket page.

```nextElementSibling``` – for dynamically appending error messages under inputs.

```Event handling``` – for image uploading, removal, and real-time validation.

CSS ```backdrop-filter``` – to create frosted-glass effects.

Responsive design & modern layout techniques (```flex``, center alignment, etc.)

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Useful resources

- [Element: nextElementSibling property](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling) 
- [Example resource 2](https://www.youtube.com/watch?v=5Fws9daTtIs) - How To Create Drag And Drop Image Uploader Using HTML CSS and JavaScript.

- [Resource 3](https://www.youtube.com/watch?v=_AuIqFK6qOo) -Create Gradient Text Effect using only HTML and CSS

- [Resource 4](https://www.youtube.com/watch?v=Si4ViAvvnwU)-How to write text on image in HTML CSS | Text On image in CSS | Text Over Image in HTML

- [Resource 5](https://w3collective.com/restrict-file-size-javascript/)- Restrict file upload size using JavaScript

## Author

- Frontend Mentor - [jeff20501](https://www.frontendmentor.io/profile/jeff20501)
- Github - [jeff20501](https://github.com/jeff20501)

