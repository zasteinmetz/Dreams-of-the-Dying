var answer = prompt("Your eyes open only with great difficulty, and your vison is greated with an unfamiliar ceiling. The light is faint, but you can tell that you are lying on cold stone floor. What do you do? Possible commands: sit up, and stay ")

if(answer === "sit up") {
var answer1 = prompt("Weakly you attempt to try to sit up. About hafway there you arms give way, and your head hits the ground hard. You try again, and this time succesfully sit up, and look around. The room looks like someones basement or their garage, but much larger. The walls and floor appear to be made of concrete, and in the darkest coner is what appears to alter of some kind, but you can't make out much more than that. You appear to be in the corner, and in front of you are some rough concrete stairs. What do you do? Possible Commands: go up stairs, and examine alter ") 

if(answer1 === "go up stairs"){

var answer3 = prompt("Using the barren walls to help support you weight, you successfully limp over to the stairs. You notice that there is no railing, but manage to make it to the top anyway. At the top is an open door which you promptly go through. You are in the center of a long hallway with only a single door at each end. One door has a single glass window in it's center, while the other has written in a rusty brown the words: EXIT What do you do? Possible Commands: go through exit, go through glass door, go back down stairs")

if(answer3 === "go through exit") {

alert("You open the exit door, and sunlight streams through. It is a beauifully sunny day outside. Why what did you think would happen?")
}

if(answer3 === "go through glass door"){

alert("You open the door, and inside is a simple bed, a small bathroom, and a sink. All of a sudden you are pushed from behind, and the door swings shut. THANK GOD WE FOUND PAITENT 76 a  voice says. You were so close to freedom if only you hadn't experience one of your hallucinations at the last second,")
}
}

else if(answer1 === "examine alter") {

var answer4 = prompt("You make your way to the alter. You can make out several burnt carndles with dry wax making it's way to the floor. In the center is a strange statue. It's difficult to tell what it is depicting but appears to be an strange creature with many mouths and tentacles. Carved onto the wall above, barely visable are a series of curious geometry symbols. What do you do? Possible Commands: pick up statue, and turn back ")

if(answer4 === "pick up statue") {
alert("You lean over to pick up the statue, and as your hands close it around touches it, you be it feel a buring sensation where your skin and the statue touch. Your arms jerk back, but your hands almost independently of your body firmly tighten around the statue. No matter how hard you try you won't let go. You begin to hear horrible noises seemingly not made by human or beast. You start screaming, and all thought disappears in the confusion. You wake up in your room, and feel a painful ache all over your body. You look down. You see various alien geometric symbols cut deep into your flesh.")
}

  else if (answer4 === "turn back") {
alert("You turn back, and then you see light flare up behind you. The candels have been lit. You turn back around, and the world seems to spin inward. The walls begin to bend, and terrifying pale things are comming through. Their long claws, and sharp teeth reach for you. A tear in reality, and you walked right towards it")
}
}
}

else{ 
var answer2 = prompt("You can barely stay consious, and you fall asleep. You begin to dream. You are standing on a small rocky hill, and it appears to be sometime in the afternoon. In front of you is a long winding road heading towards a large city made of what appears to be stone. The city doesn't appear to mach any reconisable form of architecture. Behind you the road leads to a small cave in the hillside. The cave mouth is pitch black, and seems to radiate menace. What do you do? Possible Commands: go to city, and enter cave ")


if(answer2 === "go to city"){
var answer5 = prompt("You begin to walk to the city. Time seems to flow differently, as in almost no time at all you reach the city gates. The city itself doesn't apper to be that old, but seems to be completely devoid of life. A thick silence hangs over the city. What do you do? Possible commands: leave, and enter city ")

if (answer5 === "enter city") {
var answer9 = prompt("You enter the city, and wander through it's empty streets. The silence begins to get on your nerves. Soon you are running through the city in hopes of hearin anything that can fill that void. You stop at a strange house that is almost identical to all the others but something you can't name sets it apart. Do you do enter the house? Possible Commands: yes, no ")

if(answer9 === "yes") {
alert("You enter into the house, and you know what makes this house different. It is your house. You don't know why you felt strange before. You have always lived in the city of Sarnos. You can almost hear the voice of your friends and family who have so patiently waited for your return. You had been trapped in a dreamworld by a wicked trickster, but now you return. You walk down your long hallway, but suddenly your vision darkens. No, not now. Your eyes close, and you wake up to the same acused dream ceiling.")
}

  else if(answer9 === "no") {
alert(" You are too intimidated by the strange house, and continue to wander the streets. Time has to meaning to your lost soul doomed to forever linger in that demon city. There is no escape.")
}
}

  if(answer5 === "leave") {
var answer7 = prompt("You turn around and an old man stands before you. TELL ME FRIEND, IS THIS REAL? What do you answer? Possible Commands: dream, game, real ")
if(answer7 === "game") {
alert("You say this is a game. Everything freezes. You have just broken the game. I'm sorry but you can't continue")
}

    else {
alert("The old man shakes his head sadly, and you begin to feel a searing pain in your head you collapse to the ground. WRONG ANSWER")
}
}
}

  else if(answer2 === "enter cave") {
var answer6 = prompt("The darkness is suffocating. You begin to move deeper in the cave, until suddenly you begin to hear many voices talking at once. The sounds seem to be close. Do you follow them to their source? Possible Commands:follow sounds, I do nothing, run")

if(answer === "I do nothing") { 
alert("Why are you even playing this game")}
else {

  var answer8 = prompt("No matter what you do the sounds neither get closer or furthur away. This frustrates you so much, that you wake up, but the sounds don't go away. It is dark, and the sounds seem to be comming from up a flight of stairs. There is nothing else in the room. You have no choice but to move on. You go up the stairs and find yourself at a hallway. The sound appear to be comming from one door at the end of the hallway, while another at the other end is marked EXIT in fresh red letters. Which door do you take? Possible commands: exit, and the sounds door")

  if(answer8 === "exit") {
alert("You run for the exit door, and you open it to nothingnes. A black void strechs before you, and your momentum only carries you forward. You fall into space")
}

  else if(answer8 === "the sounds door") {
alert("The voices grow louder, and you can almost clearly make out multiple languages. Your hand touches the handle, and the voices cease. You open the door, and step inside. It is very dark, and it takes a few minutes for your eyes to adjust. Your mouth falls open, and you don't even notice the door slam shut behind you. The room is empty, but along the walls are clearly human faces so closely attached that the and the wall are one. They with each indivdual voice begin to speak The sepration between you, and them is forever broken with those magic words. They are you. You are them. Through your many eyes you see the newest part of your many. It's mouth is screaming as it's body becomes part of your walls. You collective forever grows.")
}
}
