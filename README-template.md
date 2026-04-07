# Frontend Mentor - News homepage solution

This is my solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [My process](#my-process)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Project preview](./preview.jpg)

### Links

- Repository URL: [news-homepage-main-Prince](https://github.com/FreeDev-Group/news-homepage-main-Prince)
- Solution URL: [Add your Frontend Mentor solution URL here](https://www.frontendmentor.io/solutions)
- Live Site URL: [Add your deployed live URL here](https://example.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript
- Responsive layout (desktop + mobile)

### What I learned

While building this project, I improved my understanding of responsive UI behavior and accessible navigation patterns.

Key learnings:

- Creating a mobile right-drawer navigation with overlay and keyboard support (`Escape` to close)
- Switching hero images by viewport using `picture` and `source`
- Managing open/close state in JavaScript while keeping ARIA attributes in sync

Example from this project:

```html
<picture>
  <source
    media="(max-width: 768px)"
    srcset="./assets/images/image-web-3-mobile.jpg"
  />
  <img src="./assets/images/image-web-3-desktop.jpg" alt="Web 3.0" />
</picture>
```

```js
function openMenu() {
  mobileMenu.classList.add("active");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
}
```

### Continued development

For future projects, I want to focus on:

- Improving motion and micro-interactions for navigation
- Adding automated visual regression checks for responsive layouts
- Refining accessibility testing workflow (keyboard + screen reader)

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io) - Challenge briefs and design constraints
- [MDN: The picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - Helpful reference for responsive images
- [MDN: ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) - Useful for accessible menu state management

### AI collaboration

I used GitHub Copilot to:

- Refactor HTML/CSS structure
- Implement and improve mobile drawer behavior
- Review and polish accessibility details for navigation interactions

I still validated behavior manually in the browser and adjusted styles based on the challenge design.

## Author

- Name: Prince
- GitHub: [FreeDev-Group](https://github.com/FreeDev-Group)
- Frontend Mentor: [Add your Frontend Mentor profile link](https://www.frontendmentor.io/profile/yourusername)
