# React Taproom

##### Translate an Angular app into a React app  

#### By Cheryl Frankenfield, 2/9/18

## Description

_Translate a previous Angular project into a React project, which is creating a taproom app/site for patrons and employees. Patrons will be able to view Home page, draft list of beers available and other pages in addition to sort beers by price/ABV. Employees will be able to add kegs to draft list, view draft list and edit draft list in addition to managing pints sold and when a keg is kicked, removing it from list._

## Setup/Installation Requirements

* Git clone https://github.com/CherylFrankenfield/react-taproom.git

Run:
* npm init
* npm install
* webpack-dev-server
* npm run start

## Planning

### 1. Configuration/dependencies
  * This app uses Webpack.

### 2. Specs
_The app will allow an employee to click admin link to view internal functionality._
* _Input: Employee clicks Login button._
* _Output: Employee is sent to internal admin page._

_The app will allow an employee to view current keg/draft list info._
* _Input: Employee clicks Login button._
* _Output: Employee is sent to internal admin page and draft list of available beers renders._

_The app will allow an employee to add a new keg/draft item to list._
* _Input: Employee enters data in form._
* _Output: New beer data is added to draft list._

### 3. Integration/User Stories
  * Integrate feature that will allow user to see interactive freshness indicator of how much beer is left in keg with status bar.

  * Future user story may include: adding Moment.js to dynamically update when the last time an employee updated the draft list so patrons can see what new beers have been added since last time checking website.

  * Future user story may include: Add # of pints (124) in Keg to admin section to be able to connect to freshness status bar.

  * Future user story may include: Add beer type to admin section to be able to sort in patron view.

### 4. UX/UI
    * Include Bootstrap or other style library next week.
    * Develop custom style using CSS objects and modules with React.

### 5. Notes - Issues and questions (2/9/18)
1. I was curious about basic naming conventions for component trees...are home/body synonymous? Is something else used?
2. Error page messages - Typically these don't include a header or footer on most pages I've come across. I was curious where / how this is implemented different ways in the router tags.
3. I considered including a modal or pop-up screen to ask whether you are 21 or not in order to enter the site. With React and React Router, I was curious how that type of page would be implemented.
4. As a real-world project, I would imagine a front-facing, patron website would be a little different than an employee portal / content management system / e-commerce functionality and how designers/developers approach combining the two or maybe they don't. I would imagine an employee would log in to an internal system that is somehow connected to the public-facing site (if there's a shopping cart or other plugins, like real-time draft list posting, etc.). Otherwise, for this project, I combined the two with the approach of using a Login button for employees/admin route, which would render for internal use only.
5. I had some organizational roadblocks today, based on not being entirely sure how to break out components for React into the smallest, modular pieces of UI. Building out the first component tree was very useful for routing purposes and comparing the Angular app's functionality and where I thought it should live in a React app. Then after building a few components that I felt good about, I quickly realized I needed wireframes of design (image #2) in order to use them as a roadmap. That was an extremely useful visual tool.

### 6. Description - Thoughts on differences between Angular vs. React (2/9/18)
While I really enjoyed Angular for its functionality, structure and organization, so far I do see some benefits to using the React library, being its ease-of-use to get a website up and running quickly, being able to reuse components later (such as draft list in a few places), looping to create elements is pretty cool, and its speed in refreshing the DOM. Being the first week with React, it's still a little strange using CSS objects and JSX, and I'm not certain I see patterns yet for writing CSS one way or the other (other than issues with pseudo classes). I did really like using Typescript and enjoyed Angular CLI's organization of packaging ts, css, html and testing files together.

### 7. Decisions on State Management (2/16/18)
This week we learned about state management in the closest common ancestor of components and lifting state. Today, I sketched out my routes, wireframe and component tree again and made the decision to house state in a new component -- PageControl. App will now contain Header(Nav), PageControl, Footer and Error404. The components that I see thus far containing state are: PageControl, KegList, Keg, AdminControl and NewKegForm. Components without state are: Home, Hero, Quote, FeaturesList and Feature. In future iterations, I anticipate more state-based components under AdminControl for when we edit and delete kegs (additional CRUD implementation). Also future user stories in /events or /home routes may contain state, for example, if listing upcoming events or updated draft specials was a feature request that needed to be dynamic and display on those routes (another reason for PageControl as a common ancestor and keeping state out for now, but being nimble enough to add it in if necessary). Also I wanted to keep state out of App, not sure if that's a best practice and/or the pros/cons of doing so.

Questions:
--Similar to Angular's pipes, how to add logic to AdminControl components and pass it to KegList/Keg and where is the best place to keep that logic?

--Pros/cons of keeping state in or out of App component?

## Known Bugs

_Current bug is map is undefined in KegList component._

## Support and contact details

_If you have any issues, questions, ideas or concerns, please contact me._

## Technologies Used

* React
* React Router
* JavaScript
* HTML
* CSS
* Webpack

## Component Tree, State Management, Wireframe and Route Updates - v2 (2/16/18)

![img_4962](https://user-images.githubusercontent.com/32469854/36319780-e4176ef0-12f8-11e8-88a4-c5d1297e38c1.jpg)

## Component Tree Assets - v1 (2/9/18)

![img_4928](https://user-images.githubusercontent.com/32469854/36046983-97a5b716-0d8f-11e8-971b-61525d4ba878.jpg)

## Wire frame

![img_4932](https://user-images.githubusercontent.com/32469854/36055065-9de6c704-0dae-11e8-8f00-4d23e9482061.jpg)

## Angular App basic components

![img_4926](https://user-images.githubusercontent.com/32469854/36047227-48bb475a-0d90-11e8-8bf9-9dc077b0339f.jpg)

### License

*This is open source so feel free to grab and use.*

Copyright (c) 2018 **_Cheryl Frankenfield_**
