# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ethan Ankley**

Time spent: **4** hours spent in total

Link to project:  https://glitch.com/edit/#!/follow-the-leader


## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![X] https://cdn.glitch.com/200264d8-d362-474c-bf28-83d714bcb2a2%2FFollow%20The%20Leader.gif?v=1615074427906


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used w3schools.com javascript library to find the random function and stack overflow to learn how to add pictures for the buttons

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
One of the biggest challenges that I faced during the creation of this was to get the mistakes part to work the way I wanted it. I wanted the game to end only when 3 mistakes were reached, and this proved to be
a little more difficult than I had expected. I had to write out what was supposed to happen step by step, and that helped me to better visualize what had been going wrong with my original implementation of the 
mistakes. I think that in the end it works pretty well, I have not been able to find any major bugs with it, so I am happy that it turned out as well as it did.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I am curious about how to space things out better, the buttons look nice how they are, but I think that I would have liked the look of them a bit more if I was able to position them better. I am sure that
there is a simple way to do that, and I would be curious to know more. I also would like to know more about the sounds that were used, and if there is a way to make chords without having to know the frequencies
off hand.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would probably like to get it so that the player cannot hit the buttons before the sequence is done, and would also like to add some more game modes, such as an infinite mode, and a mode where the pattern is a 
song, so by the end of the game you have played a full song using just your memory and the buttons. 



## License

    Copyright Ethan Ankley

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
