# [The Memo Game](https://mrmorkeberg.github.io/Memgame/)

![Mockup](assets/css/images/Thememogame.png)

Website presents the memory game: The Memo Game, which is a fun memory game to be played with friends and family. The game will light up a block and then the player shall click on it. The game will then light up the first block and then another randon block. For each level there will be added another block and making the memory game harder and harder. See who is best, and get the highest score. 

# Table of content

- [UX](#ux) 

    - [Website owners goals](#website-owners-goals)

    - [User goals](#user-goals)

        - [Players who want to play the game for fun](#players-for-fun)

        - [Players for memory training](#players-for-memory-training)
    
    - [User stories](#user-stories)

        - [As a player who want to play a fun game with friends and family](#as-a-player-who-want-to-play-a-fun-game-with-friends-and-family)

        - [As a player who wants to train my memory](#as-a-player-who-wants-to-train-my-memory)

    - [Design choises](#design-choises)

        - [Colors](#colors)

        - [Fonts](#fonts)

        - [Images](#images)

        - [Wireframes](#wireframes)

- [Features](#features)

- [Technologies Used](#technologies-used)

- [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Functionality Testing](#functionality-testing)
    - [Compatibility Testing](#compatibility-testing)
    - [User stories testing](#user-stories-testing)

- [Issues found during site development](#issues-found-during-site-development)

# User Experience (UX)

## Website owners goals

The Website owners goals is to have a fun game and to build their brand. For the Website owners their are a number of ways to make money of the game, either by selling the game, or if the game is free, by ads on the game. 

## User goals

### **Players for fun**

The goal is to attract players who wants to have fun playing the game against friends and family.

### **Players for memory training**

The goal is to attract playser who wants to train their memory and compete against them self. 


## User stories

### **As a player who want to play a fun game with friends and family**
- I want a fun game to play
- I want to play the game against my friends and family
- I want the game to be more and more challenging
- I want to see what level I am on
- I want to see my final score

### **As a player who wants to train my memory**
- I want a game to train my memory
- I want to see what level I am on
- I want to see my final score

[Back to Table of content](#table-of-content)

## Design choises

### **Colors**

- Main background color is black
- Text color is white 
- Panel hover is #00ffff
- Start button color is #0B3152
- Colors of the game is red, green, blue and orange
- Color of the active block is #fff
- Color of ul is #fff

### **Fonts**

Main font is Helvetica with sans-serif as backup.

### **Images**

Images are screendumps of the different bugs I have encountered.

### **Wireframes**

I used Balsamiq Wireframes to create the Wireframes

- Desktop Wirefram  - [View](assets/images/wireframes/memgame-desktop.pdf)
- Tablet Wirefram - [View](assets/images/wireframes/memgame-ipad.pdf)
- Mobile phone Wirefram - [View](assets/images/wireframes/memgame-iphone.pdf)

[Back to Table of content](#table-of-content)

# Features

The website is responsive and has interactive elements. The website consists of 1 pages, where the game is hidden until the player presses the Start Game button, then the game appear. During the game a level indikator will show what level the player is on. When the player fails a Score will be show together with the final level and a Restart Game button. 

# Technologies Used

### Languages Used

* #### HTML5
* #### CSS
* #### Javescript

### Git 

* Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub

### GitHub

* Github was used as a software hosting platform to store the projects code after being pushed from Git

### Gitpod

* Gitpod was used as a development hosting platform

### Photoshop

* Photoshop was used to resizing images and editing pictures for the website.

### Balsamiq

* Balsamiq was used to create the wireframes during the design process.

### ami.responsivedesign

* Am I Responsive was used to do the Mockup.

##  Future implementations
- create a timer count down on each round
- create a function so the blocks will be shown quicker and quicker

[Back to Table of content](#table-of-content)

# Testing

## Validator testing

The W3C Markup Validator, W3C CSS Validator Services and the Jshint were used to validate every page of the project.

- HTML
    - No errors were returned when passing through the official - [View](assets/images/validator/html-validator.png)
- CSS
    - No errors were found when passing through the official - [View](assets/images/validator/css-validator.png)

- Javescript
    - No errors were returned when passing through the official - [View](assets/images/validator/jshint-validator.png)

## Functionality testing 

Chrome developer tools was used throughout the project for testing and solving problems with responsiveness, style issues and Javescript problems, see bug problems under [Issues found during site development](#issues-found-during-site-development)

## Compatibility testing
 Site was tested across multiple virtual mobile devices and browsers. I checked all supported devices in both Mozilla web developer tolls and Chrome developer tools.

 ## Further Testing

- The Website was tested on Google Chrome, Internet Explorer and Safari browsers.

- The website was viewed and tested across multiple virtual mobile devices and browsers. I checked all supported devices in Chrome developer tools.

- Testing was done to ensure that all pages were linking correctly.

- Friends were asked to review the site and to point out bugs and/or user experience issues. 

- The website was viewed many times and margins was changed to give a better user experience.

[Back to Table of content](#table-of-content)

 ## User stories testing

 ### As a business owner:
 - The Website owners goals is to have a fun game and to build their brand. 
  > The game is fun to play. You can play by your self or you can play with friends and family, and you can compare score.

 ### As a player who want to play a fun game with friends and family
- I want a fun game to play
> The game is fun to play
- I want to play the game against my friends and family
> You can play against friends and family
- I want the game to be more and more challenging
> The longer you play the game the more blocks you will need to remember and the harder it will be
- I want to see what level I am on
> You can see what level you are on below the game
- I want to see my final score
> When you are finish with the game, you will be able to see your final score

### As a player who wants to train my memory
- I want a game to train my memory
> The longer you play the more dificult the game will be, and thereby train you memory
- I want to see what level I am on
> You can see what level you are on below the game att all time
- I want to see my final score
> You can see the score of your game when the game is over

[Back to Table of content](#table-of-content)

# Development

- In the development of the game, I deliberately left out: "display: none" in line 24 in index.html, so that I could see the color panels and work with it in the css. Later I put in:  "display: none;" so that the game first will appear when the Start Game button is pressed.

# Issues found during site development

- First bug I found was that the round color panels didn't match up. [View](assets/images/bugs/bug-with-color-ring.png)
    - I had put all 4 div in line 36 - 40 in index.html into one div. I split up the 4 divs in 2 and 2 and put them in 2 outer divs. [View](assets/images/bugs/div-solution.png)
    - This didn't solve the hole problem. I went through the css in line 49 - 52 and saw I had copy/pasted line 49 into the other lines without changing the code, so all 4 lines hade the code: border-top-left-radius. The danger of copy/paste. I changed it and problem solved.

- Second bug issue I found was that it didn't load the ressouces audio "correct" and "wrong" [View](assets/images/bugs/bug-with-audio-and-startgame.png)
    - The solution was that I changed the links to the audio files

- Third bug issue was a reference error on start game. [View](assets/images/bugs/bug-with-audio-and-startgame.png)
    - The problem was a typo... I had starGame instead of startGame. [View](assets/images/bugs/solution-bug-startgame.png)

- Fourth bug issue was a uncaught type error in js line 33 and line 19 [View](assets/images/bugs/Bugmute.png)
    - The solution was to move the script link down from line 9 to line 62 in index.html

- Fifth bug issue was another uncaught reference error in line 49 index.html. [View](assets/images/bugs/bug-restartgame.png)
    - The prolem was another typo... restarGame instead of restartGame. 

- Sixth bug issue was when I was validating the Javescript in jshint. It came upp with 35 varnings. [View](assets/images/bugs/js-varnings.png)
    - In the end, I had to contact Tutor Assistance to get this solved. From Tutor Assistance I got a link to stackoverflow [View](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const") where I found I could put in this comment [See the comment](assets/images/bugs/comment.png) to fix the problem.

[Back to Table of content](#table-of-content)

