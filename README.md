# My Personal Site

This site was created with [Create React App](https://github.com/facebook/create-react-app), and uses Sanity.io for content management. My use for the site is to blog about personal projects, or anything I have an interest in really, and to showcase my personal web development projects.

## Technologies Used

This site is my first time using React and I started out with a Sanity Blog Tutorial [here](https://www.sanity.io/guides/build-your-first-blog-using-react). Consequently I've used the Sanity.io content management tools and started using Tailwind for styling.

The site is hosted on GitHub Pages and I push the updated build folder to a gh-pages branch on the repo when I want to update the content using a bash script script.

## Difficulties Encountered

For my first time using React and writing .jsx, I didn't find it too difficult to get used to. It possible helped that I've worked with Vue a bit before so understood most of the ideas from that. 

I found it a little challenging getting Tailwind configured so that it compiles the CSS file on build/run, and didn't manage to get it configured so that it automatically rebuilt the CSS file. In the end my scripts in `package.json` looked like this: <br/>

    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "tailwind -i src/styles/tailwind.css -o src/index.css",
    "watch:css": "postcss src/styles/tailwind.css -o src/styles/output.css "

Overall I learnt a bit about how the script commands work and how tailwind processes the classes into useable CSS to be rendered.

The other issue I had was with parsing the block content from Sanity. The main sticking point was line breaks initially. Following some research I found out about serializing the content and succeded in setting up the serializer to put line breaks in and style the images how I wanted.

