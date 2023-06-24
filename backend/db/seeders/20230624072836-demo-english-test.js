'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("EnglishTests",
      [
        {
          "no": 1,
          "question": "A solid white line on the right edge of the highway slants in toward your left. This shows that:",
          "answers": [
            "There is an intersection just ahead",
            "You are approaching a construction area",
            "You will be required to turn left just ahead",
            "The road will get narrower"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 2,
          "question": "A red and white triangular sign at an intersection means:",
          "answers": [
            "Slow down if an emergency vehicle is approaching",
            "Slow down and be prepared to stop if necessary",
            "Look both ways as you cross the intersection",
            "Always come to a full stop at the intersection"
          ],
          "correctAnswerIndex": 1,
        },
        {
          "no": 3,
          "question": "You come to an intersection which has a flashing red light. You should:",
          "answers": [
            "Come to a full stop, then go when safe to do so",
            "Stop only if cars are approaching the intersection",
            "Stop only if cars are already in the intersection",
            "Slow down and be prepared to stop if necessary"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 4,
          "question": "A traffic light which has a green arrow and a red light means that:",
          "answers": [
            "You may only drive straight ahead",
            "You may drive only in the direction of the green arrow",
            "You must wait for a green light",
            "Vehicles moving in any direction must stop"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 5,
          "question": "You may not cross a single broken white (or yellow) line:",
          "answers": [
            "When to do so would interfere with traffic",
            "When turning left into a driveway",
            "When the car in front is disabled",
            "When passing to the right on a one-way street"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 6,
          "question": "A rectangular-shaped sign is a:",
          "answers": [
            "Speed limit sign",
            "Stop sign",
            "School crossing sign",
            "Railroad crossing sign"
          ],
          "correctAnswerIndex": 0,
        },
        {
          "no": 7,
          "question": "Which of the following must you obey over the other three?",
          "answers": [
            "A steady red light",
            "A police officer",
            "A stop sign",
            "A flashing red light"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 8,
          "question": "What are the colors of the warning signs that indicate hazards ahead, such as curves in the road or narrow bridges?",
          "answers": [
            "Black letters or symbols on a white background",
            "Black letters or symbols on a yellow background",
            "White letters or symbols on a blue background",
            "White letters or symbols on a green background"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 9,
          "question": "You may cross a single solid white line in the highway:",
          "answers": [
            "Whenever you want to",
            "If traffic conditions require",
            "Only to turn into a driveway",
            "Only to make a u-turn"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 10,
          "question": "As you near an intersection, the traffic light changes from green to yellow. Your best action would be to:",
          "answers": [
            "Speed up to beat the red light",
            "Apply the brakes sharply to stop",
            "Be prepared to stop in the center of the intersection",
            "Be prepared to stop before the intersection"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 11,
          "question": "An intersection has a stop sign and a crosswalk, but no stop line. You must stop:",
          "answers": [
            "Before the crosswalk",
            "50 feet before the intersection",
            "Where you think the stop line would be",
            "With your front wheels in the crosswalk"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 12,
          "question": "What does this road sign mean?",
          "image": "images/traffic-signs/1.jpg",
          "answers": [
            "Slow down and prepare to stop only if cars are approaching you",
            "Come to a full stop, then go when it is safe to do so",
            "Proceed carefully through the intersection, not always stopping",
            "Stop only for traffic on an intersecting road"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 13,
          "question": "What are the colors of a sign which tells you the distance to the next exit of a highway?",
          "answers": [
            "Yellow with black letters",
            "Black with white letters",
            "Red with white letters",
            "Green with white letters"
          ],
          "correctAnswerIndex": 3,
        },
        {
          "no": 14,
          "question": "What does a flashing yellow light mean?",
          "answers": [
            "Merging traffic",
            "Proceed with caution",
            "Pedestrian crossing",
            "Come to a full stop"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 15,
          "question": "When the road is marked with a solid yellow line and a broken yellow line on your side you may pass:",
          "answers": [
            "Only in an emergency",
            "If you are on an expressway",
            "If traffic is clear",
            "Only at an intersection"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 16,
          "question": "You may cross a double solid yellow line:",
          "answers": [
            "To pass a slow moving truck",
            "To turn into a driveway",
            "To pass a car if traffic permits",
            "Under no conditions"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 17,
          "question": "Which of the following is used on some highways to direct drivers into the proper lanes for turning?",
          "answers": [
            "Flashing red lights",
            "Flashing yellow lights",
            "White lines on the side of the road",
            "White arrows in the middle of the lanes"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 18,
          "question": "A diamond-shaped sign is a:",
          "answers": [
            "Road hazard sign",
            "Interstate route site",
            "School crossing sign",
            "Speed limit sign"
          ],
          "correctAnswerIndex": 0,
        },
        {
          "no": 19,
          "question": "What should you do when you are going to enter a roadway from a private road?",
          "answers": [
            "Blow your horn to warn cars you are entering the roadway",
            "Stop with part of the car on the roadway to warn other drivers",
            "Drive out fast to merge smoothly with the traffic",
            "Yield the right-of-way to pedestrians and roadway traffic"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 20,
          "question": "The driver's left arm and hand are extended downward. This hand signal means that the driver plans to:",
          "answers": [
            "Turn left",
            "Turn right",
            "Stop",
            "Start up"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 21,
          "question": "You must pull over and stop for:",
          "answers": [
            "Vehicles that display blue, green or amber lights",
            "Authorized emergency vehicles responding to emergencies",
            "A hazard vehicle that is parked, stopped or standing on any part of the highway",
            "Stopped or standing school buses"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 22,
          "question": "The driver's left hand and arm are extended upward. This hand signal means that the driver plans to:",
          "answers": [
            "Turn left",
            "Turn right",
            "Come to a stop",
            "Go straight ahead"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 23,
          "question": "You want to turn right at the next intersection. You should begin to use your turn signal:",
          "answers": [
            "At least 50 feet before the turn",
            "When you reach the intersection",
            "At least 100 feet before you turn",
            "As soon as you see cars behind you"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 24,
          "question": "The law that requires every driver to exercise care to avoid colliding with an authorized emergency or hazard vehicle is called:",
          "answers": [
            "Brianna’s Law",
            "The Green Light Law",
            "Move Over Law",
            "Right of Way"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 25,
          "question": "You have the right of way when you are:",
          "answers": [
            "Entering a traffic circle",
            "Backing out of a driveway",
            "Leaving a parking space",
            "Already in a traffic circle"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 26,
          "question": "When you want to make a right turn, your car must be:",
          "answers": [
            "Near the center of the street",
            "Close to the left side of the street",
            "Close to the right side of the street",
            "Past the center of the intersection when you begin to turn"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 27,
          "question": "When two vehicles enter an intersection from different highways at the same time, which vehicle must yield the right-of-way?",
          "answers": [
            "Either one",
            "Vehicle on the left",
            "Vehicle on the right",
            "Neither one"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 28,
          "question": "You are making a left turn away from a two-way street into a one-way street. When you have completed the turn your car should be:",
          "answers": [
            "In the right lane of the street",
            "In the center of the street",
            "In the left lane of the street",
            "In the lane with the least traffic"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 29,
          "question": "You want to turn left at an intersection. The light is green but oncoming traffic is heavy. You should:",
          "answers": [
            "Use the next intersection",
            "Wait at the crosswalk for traffic to clear",
            "Wait in the center of the intersection for traffic to clear",
            "Take the right-of-way since you have the light"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 30,
          "question": "You drive along a street and hear a siren. You cannot immediately see the emergency vehicle. You should:",
          "answers": [
            "Keep driving until you see the vehicle",
            "Pull to the curb and look to see if it is on your street",
            "Slow down but don't stop until you see it",
            "Speed up and turn at the next intersection"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 31,
          "question": "You must yield the right-of-way to an approaching vehicle when you are:",
          "answers": [
            "Already in a traffic circle",
            "Already in an intersection",
            "Going straight ahead",
            "Turning left"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 32,
          "question": "You are waiting in the intersection to complete a left turn. You should:",
          "answers": [
            "Signal and keep your wheels turned to the left",
            "Signal and keep your wheels straight",
            "Flash your headlights so the driver will let you through",
            "Drive around the rear of a car if it blocks you"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 33,
          "question": "You come to an intersection which is blocked by other traffic. You should:",
          "answers": [
            "Go slowly until the traffic ahead moves",
            "Get as close as possible to the other car",
            "Stay out of the intersection until you can pass through",
            "Sound your horn to make the cars move up"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 34,
          "question": "When you see an emergency vehicle parked, stopped, or standing with its emergency or hazard lights activated on a highway or parkway, you should:",
          "answers": [
            "Move out of the lane closest to the emergency vehicle, if possible to do so safely",
            "Make a U-turn to avoid the vehicle",
            "Maintain your speed and lane position if possible",
            "Stop behind the vehicle and activate your hazard lights"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 35,
          "question": "In general, you should pass vehicles going in the same direction you are going:",
          "answers": [
            "On the right",
            "On the left",
            "Only if the other driver signals it is safe",
            "Whenever you have the opportunity to do so"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 36,
          "question": "You are driving in the middle lane on a three lane expressway. A car begins to pass you on the right. The actions of that driver are:",
          "answers": [
            "Wrong because \"pass on the left\" is a firm rule",
            "Wrong because he's passing you in your \"blind spot\"",
            "OK as long as he does it on a limited access highway",
            "OK if no signs forbid passing on the right"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 37,
          "question": "What does it mean when a school bus is stopped and its red lights are flashing?",
          "answers": [
            "You may pass if no children are on the road",
            "You may not pass while the red lights are flashing",
            "You may pass if you are facing the front of the bus",
            "You may pass if it is on the other side of a divided highway"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 38,
          "question": "You may pass another vehicle on the right if it is waiting to:",
          "answers": [
            "Turn right",
            "Turn left",
            "Park at the curb",
            "Turn into a driveway on the right"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 39,
          "question": "When you want to overtake and pass another vehicle you should:",
          "answers": [
            "Wait for a signal from the other driver",
            "Change lanes quickly so the other driver will see you",
            "Signal and pass when safe to do so",
            "Stay close behind so you need less time to pass"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 40,
          "question": "The car behind you begins to pass you. You should:",
          "answers": [
            "Maintain your speed so traffic will flow smoothly",
            "Pull to the right and stop so he can pass",
            "Slow down slightly and stay in your lane",
            "Blow your horn to allow him to pass"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 41,
          "question": "After you have passed a car you should return to the right lane when you:",
          "answers": [
            "See the front bumper of the other car in your mirror",
            "Have put your turn signal on",
            "Have turned your headlights on",
            "See the other car's headlights come on"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 42,
          "question": "In which of the following situations is passing always forbidden?",
          "answers": [
            "The vehicle ahead is making a left turn",
            "You are on a one-way street which has two lanes",
            "The vehicle ahead is stopped for a pedestrian in a crosswalk",
            "The vehicle ahead is going to park parallel to the curb"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 43,
          "question": "If you are parked parallel to the curb, you may get out of the car on the traffic side:",
          "answers": [
            "During the daytime when other drivers can see you",
            "When the traffic light at the closest intersection turns red",
            "When you won't interfere with oncoming vehicles",
            "If you use your four-way flasher first"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 44,
          "question": "In a parking space reserved for people with disabilities, a non-disabled driver:",
          "answers": [
            "May park in an emergency",
            "May not park, but stop in an emergency",
            "May not park or stop, but may stand in an emergency",
            "May neither park, stop, nor stand"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 45,
          "question": "Before you leave a parking space which is parallel to the curb, you should:",
          "answers": [
            "Sound your horn",
            "Turn on your four-way flasher",
            "Look for traffic by turning your head",
            "Look for traffic by using your inside rear-view mirror"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 46,
          "question": "You may never park:",
          "answers": [
            "On a one-way street",
            "At the entrance of a building",
            "In a crosswalk",
            "Within 50 feet of a fire hydrant"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 47,
          "question": "A \"no stopping\" sign means that, unless directed to do so by a policeman, you may stop only:",
          "answers": [
            "Long enough to unload packages",
            "To avoid conflict with other traffic",
            "To discharge passengers",
            "For less than 5 minutes"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 48,
          "question": "A \"no parking\" sign at a certain location means:",
          "answers": [
            "You may never stop your vehicle there",
            "You may stop temporarily to load or unload passengers",
            "You may park there if the driver remains in the vehicle",
            "You may leave your vehicle unattended for less than 5 minutes"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 49,
          "question": "A \"no standing\" sign at a certain location means:",
          "answers": [
            "You may never stop your vehicle there",
            "You may park there if the driver remains in the vehicle",
            "You may stop temporarily to pick up or discharge passengers",
            "You may stop to load or unload merchandise"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 50,
          "question": "Assuming that the street is level, what should you do after you have finished parallel parking in a space between two other cars?",
          "answers": [
            "Leave your front wheels turned toward the curb",
            "Make sure your car almost touches the car behind you",
            "Move as far forward in the space as possible",
            "Straighten your front wheels and leave room between cars"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 51,
          "question": "A driver may park in a space reserved for people with disabilities if the vehicle displays license plates for the disabled:",
          "answers": [
            "Regardless of who is in the vehicle",
            "Only if the driver is disabled",
            "And is carrying a disabled person named on the registration",
            "If someone in the driver's immediate family is disabled"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 52,
          "question": "Which of the following is always true about road rage?",
          "answers": [
            "There is nothing a driver can do to prevent road rage",
            "You must hold your position in your travel lane",
            "Only violent people experience road rage",
            "You should remain polite to aggressive drivers"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 53,
          "question": "One of the rules of defensive driving is:",
          "answers": [
            "Look straight ahead as you drive",
            "Stay alert and keep your eyes moving",
            "Expect that other drivers will make up for your errors",
            "Be confident that you can avoid danger at the last minute"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 54,
          "question": "Seat belts can be most effective as injury preventive devices when they are worn by:",
          "answers": [
            "The person driving the car",
            "Passengers when they are on a long drive",
            "All occupants of a car being driven on an expressway",
            "Passengers and the driver whenever they are in the car"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 55,
          "question": "A safe speed to drive your car:",
          "answers": [
            "Is the posted speed limit",
            "Is less than the posted speed limit",
            "Depends on the weather and road conditions",
            "Depends on the mechanical skill of the driver"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 56,
          "question": "Driving in a state of rage can:",
          "answers": [
            "Affect your ability to reason and make decisions",
            "Increase the chance of being involved in a traffic accident",
            "Lead to a revoked or suspended license",
            "All of these choices"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 57,
          "question": "What is true of work zones?",
          "answers": [
            "They are always stationary and therefore easily avoided",
            "They are only dangerous at night",
            "Speeding fines are tripled when workers are present",
            "Rear-end collisions are the most common type of crash in work zones"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 58,
          "question": "Aggressive driving can become road rage. What should you do when confronted by an aggressive driver?",
          "answers": [
            "Speed up to pass the driver as quickly as possible",
            "Be prepared to yield the right of way",
            "Drink alcohol to calm yourself down",
            "Make eye contact with the driver"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 59,
          "question": "Which of the following may describe a work zone sign?",
          "answers": [
            "A white rectangle with black letters",
            "An orange diamond with black letters",
            "A green rectangle with white letters",
            "A yellow circle with black letters"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 60,
          "question": "On a New York State highway where there is no posted speed limit, the fastest you may legally drive is:",
          "answers": [
            "50 mph",
            "55 mph",
            "60 mph",
            "65 mph"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 61,
          "question": "Minimum speed signs are designed to:",
          "answers": [
            "Keep traffic flowing smoothly",
            "Show current local road conditions",
            "Test future traffic signal needs",
            "Assure pedestrian safety"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 62,
          "question": "On long trips you can prevent drowsiness by:",
          "answers": [
            "Turning on your car radio",
            "Slowing down so you can react better",
            "Stopping at regular intervals for a rest",
            "Moving your eyes from side to side as you drive"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 63,
          "question": "Signs that warn \"lane closed ahead\" may indicate a work zone ahead. You should:",
          "answers": [
            "Merge your vehicle into the correct lane when it is safe",
            "Drive to the end of the closed lane before attempting to merge",
            "Understand that this sign is merely a suggestion and continue in the lane",
            "Speed up to merge as quickly as possible"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 64,
          "question": "Blood alcohol content (BAC) depends on each of the following except:",
          "answers": [
            "Your body weight",
            "How much you drink",
            "How much time passes between drinks",
            "How physically fit you are"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 65,
          "question": "On average, the human body can dispose of the alcohol in 12 ounces of beer in about:",
          "answers": [
            "One hour",
            "One day",
            "Five minutes",
            "Five hours"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 66,
          "question": "Which of the following is true? People driving under the influence of alcohol are:",
          "answers": [
            "Not a problem in New York State",
            "Every driver's problem whether they drink or not",
            "A police enforcement problem only",
            "Only a problem to those who drink"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 67,
          "question": "Which of the following statements is true about BAC (blood alcohol content)?",
          "answers": [
            "The \"breathalyzer\" is a test of a person's BAC",
            "A chemical test for BAC is needed for an alcohol conviction",
            "BAC levels are reduced by a person's physical fitness",
            "After drinking, coffee or a cold shower will lower your BAC"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 68,
          "question": "A chemical test is used to measure:",
          "answers": [
            "Reaction time",
            "Blood alcohol content",
            "Vision",
            "Driving ability"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 69,
          "question": "What kinds of drugs, other than alcohol, can affect your driving ability?",
          "answers": [
            "An allergy medicine",
            "Marijuana",
            "A cold remedy",
            "All of these choices"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 70,
          "question": "Which of the following does alcohol affect?",
          "answers": [
            "Recovery from headlight glare",
            "Reaction time",
            "Judgment of distances",
            "All of these choices"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 71,
          "question": "Which of the following influence the effects of alcohol?",
          "answers": [
            "The amount of food in the stomach",
            "The body weight of an individual",
            "How much time passes between drinks",
            "All three choices"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 72,
          "question": "What are the consequences that can result from driving under the influence of alcohol or other drugs?",
          "answers": [
            "Possible imprisonment",
            "A mandatory fine",
            "Driver license revocation",
            "All of these choices"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 73,
          "question": "If you drink alcohol socially, what helps ensure safe driving?",
          "answers": [
            "Drink coffee before driving",
            "Ride home with a friend who has not been drinking",
            "Take a cold shower before driving",
            "Stop drinking one half hour before driving"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 74,
          "question": "A driver who is taking a non-prescription drug should:",
          "answers": [
            "Read the labels on the drug before driving",
            "Drink alcohol instead",
            "Continue to drive",
            "Drive only during daylight hours"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 75,
          "question": "Drinking coffee after drinking alcohol:",
          "answers": [
            "Decreases blood alcohol content",
            "Cancels the effect of the alcohol",
            "Has no effect on blood alcohol content",
            "Increases blood alcohol content"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 76,
          "question": "What effect does drinking alcohol and taking a prescription drug or over the counter medicine have?",
          "answers": [
            "The medicine reduces the effect of the alcohol",
            "The alcohol will help the medicine cure the cold",
            "The combination could multiply the effects of the alcohol",
            "No effect, they are difference substances"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 77,
          "question": "What is the only effective way to reduce your blood alcohol content (BAC)?",
          "answers": [
            "Drinking coffee",
            "Exercising",
            "Allow your body time to get rid of alcohol",
            "Taking a cold shower"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 78,
          "question": "What effect might alcohol and another drug have when combined in your blood?",
          "answers": [
            "Increase the effects of both",
            "Have no effect on driving ability",
            "Reduce the effects of the drug or medicine",
            "Reduce the effects of the alcohol"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 79,
          "question": "Which of the following does not happen after drinking?",
          "answers": [
            "Your reflexes and reaction time slow down",
            "Your judgment of speed and distance is distorted",
            "You are less alert",
            "You calm down so you can concentrate"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 80,
          "question": "What happens to your driver license if you refuse to take a chemical test (breath or blood)?",
          "answers": [
            "There is no evidence to find you guilty of drunk driving",
            "You cannot be arrested for drunk driving",
            "Your driver license will be taken away",
            "None of these choices"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 81,
          "question": "Drinking alcohol and driving is:",
          "answers": [
            "A minor traffic safety problem",
            "A serious traffic safety problem",
            "Safe if you only have a few drinks",
            "Only dangerous to the driver who drinks"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 82,
          "question": "What does alcohol do to your driving skills and judgment?",
          "answers": [
            "It helps driving skills but harms your judgment",
            "It harms both driving skills and judgment",
            "It has no effect on either driving skills or judgment",
            "It has no effect on judgment but it harms driving skills"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 83,
          "question": "In this state, what BAC (blood alcohol content) is evidence of intoxication?",
          "answers": [
            "0.05%",
            "0.03%",
            "0.10%",
            "0.08%"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 84,
          "question": "When you drive at night, you can reduce the problem of glare from the headlights of an approaching car by:",
          "answers": [
            "Looking to the lower right side of your lane",
            "Having the inside lights on to make the amount of light equal",
            "Looking at the spot on the lower edge of the steering wheel",
            "Wearing glasses with lightly tinted lenses"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 85,
          "question": "If an approaching train is near enough or going fast enough to be a danger, you must:",
          "answers": [
            "Slow down and proceed with caution",
            "Not cross the tracks until the train has completely passed",
            "Cross the tracks at your own risk",
            "Find an alternative route across tracks"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 86,
          "question": "If your brake pedal suddenly sinks to the floor, you should first:",
          "answers": [
            "Try to pump it to build up the pressure",
            "Shift into neutral and shut the engine off",
            "Try to raise it by hooking your toe under it",
            "Apply the parking brake hard to stop the car"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 87,
          "question": "When driving at night, it is most important for you to:",
          "answers": [
            "Use your high beams at all times",
            "Drive within range of your headlights",
            "Be ready to brake more quickly",
            "Watch for cars at intersections"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 88,
          "question": "You may drive around or under a gate that is being lowered or raised at a railroad crossing:",
          "answers": [
            "As long as an approaching train is not too close",
            "If your vehicle can do so without damaging the gate",
            "If you first look carefully in both directions",
            "Under no circumstances"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 89,
          "question": "You are getting on a highway which has a very short entrance lane. The safest way for you to enter the flow of traffic would be to:",
          "answers": [
            "Use as much ramp as possible to get up to cruising speed",
            "Use the left lane of the highway to get up to cruising speed",
            "Wait for a large gap in traffic then speed up quickly",
            "Get up to cruising speed gradually so other cars will see you"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 90,
          "question": "If traffic prevents you from crossing all the way across a set of railroad tracks, you may proceed only when:",
          "answers": [
            "An approaching train is not moving fast enough to be a danger",
            "There is room for your vehicle on the other side",
            "At least one half of your vehicle can cross the tracks",
            "No trains are in sight"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 91,
          "question": "When you get ready to leave an expressway, you should begin to use your turn signal:",
          "answers": [
            "Just as you get to the exit ramp",
            "50 feet before the exit ramp",
            "100 feet before the exit ramp",
            "When you see cars behind you in the exit lane"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 92,
          "question": "What is the appropriate action to take when approaching a railroad crossing that does not have signals (such as lights or crossing gates)?",
          "answers": [
            "Always bring the car to a complete stop",
            "Slow down and be prepared to stop",
            "Do nothing; all railroad crosings have signals",
            "Increase speed to get across the tracks quickly"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 93,
          "question": "Your car starts to skid on a slippery road. You should:",
          "answers": [
            "Brake quickly and keep the wheel straight",
            "Lock your brakes until you have come to a complete stop",
            "Steer in the direction you want the front wheels to go",
            "Steer toward the side of the road to get off the wet pavement"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 94,
          "question": "If you drive past your exit on an expressway, you should:",
          "answers": [
            "Pull onto the shoulder, then back up to the exit",
            "Drive to the next exit and leave the expressway",
            "Make a U-turn at the nearest emergency turn area",
            "Make a U-turn at the next service area"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 95,
          "question": "When attempting to stop on a slippery road, the best action to take is:",
          "answers": [
            "Apply the brakes quickly and firmly",
            "Apply the brakes in slow, steady strokes",
            "Shift to a lower gear, do not use the brakes",
            "Shift into neutral, do not use the brakes"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 96,
          "question": "What vehicles must stop at all railroad crossings?",
          "answers": [
            "Pickup trucks",
            "School buses and passenger buses carrying passengers",
            "Motorcycles",
            "Vehicles towing a trailer"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 97,
          "question": "When your right wheels run onto a soft shoulder, what is the best way to get back on the highway?",
          "answers": [
            "Apply the brakes firmly and steer gently to the left",
            "Ease your foot off the gas and brake gently",
            "Steer hard to the left and then gently to the right",
            "Apply the brakes firmly and stop completely"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 98,
          "question": "This sign is a warning that you are approaching:",
          "answers": [
            "An intersection",
            "A crosswalk",
            "A railroad crossing",
            "A blasting zone"
          ],
          "correctAnswerIndex": 2,
          "image": "images/traffic-signs/3.jpg",
        },
        {
          "no": 99,
          "question": "Why is driving on an expressway different from driving on an ordinary street?",
          "answers": [
            "You must think faster and handle your vehicle more effectively",
            "Trucks have to go slower on the expressways",
            "There is more of a tendency to exceed the speed limit",
            "There is more of a tendency to \"tailgate\""
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 100,
          "question": "You have just left an expressway and are starting to drive on an ordinary highway. You should:",
          "answers": [
            "Check your tires for correct pressure",
            "Check your speedometer to keep at the lower speed limit",
            "Stay twice as far behind other cars",
            "Change gradually to the lower speed limit"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 101,
          "question": "If a tire blows out, the proper thing to do is:",
          "answers": [
            "Speed up to gain traction and then pull to the right",
            "Hold the steering wheel firmly, and ease up on the gas",
            "Apply the brakes, then shift into neutral",
            "Shift into neutral, then apply the brakes"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 102,
          "question": "When you drive in heavy fog during daylight hours you should drive with your:",
          "answers": [
            "Headlights off",
            "Parking lights on",
            "Headlights on low beam",
            "Headlights on high beam"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 103,
          "question": "Night driving is dangerous because:",
          "answers": [
            "Some traffic signs are less visible at night",
            "More vehicles are on the road at night",
            "The distance we can see ahead is reduced",
            "Street lights tend to blur our vision"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 104,
          "question": "Expressways have \"expressway entrance lanes\" (acceleration lanes) so that drivers can:",
          "answers": [
            "Test their brakes before driving at expressway speeds",
            "Stop at the end to wait for a traffic opening",
            "Reach the proper speed before blending with traffic",
            "Test the pickup of their cars"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 105,
          "question": "Which of the following statements applies to all driving emergency situations?",
          "answers": [
            "Always slow down gradually",
            "Your first reaction is the best reaction",
            "Think before you act",
            "Apply your brakes immediately"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 106,
          "question": "What does a \"slow moving vehicle\" emblem look like?",
          "answers": [
            "A square red sign",
            "A round green sign",
            "A diamon-shaped yellow sign",
            "A triangular orange sign"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 107,
          "question": "On a road which has no sidewalks a pedestrian should walk on the:",
          "answers": [
            "Side of the road which has the lightest traffic",
            "Same side of the road in which traffic is moving",
            "Side of the road facing oncoming traffic",
            "Side of the road which has the heaviest traffic"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 108,
          "question": "A motorist approaching a bicyclist should:",
          "answers": [
            "Speed up to pass him",
            "Proceed as usual",
            "Swerve into the opposite lane",
            "Exercise extreme caution"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 109,
          "question": "A bicyclist differs from a motorist in that a bicyclist isn't required to:",
          "answers": [
            "Obey the same traffic laws",
            "Signal all turns",
            "Report accidents resulting in serious injury",
            "Insure the bicycle"
          ],
          "correctAnswerIndex": 3
        },
        {
          "no": 110,
          "question": "You want to back out of your driveway. You see children playing nearby. Before you start to move your car you should:",
          "answers": [
            "Race your motor to warn the children that you are moving",
            "Sound your horn so the children will hear you",
            "Walk to the back of the car to be sure the way is clear",
            "Tell the children to stay away from the driveway"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 111,
          "question": "A blind person legally has the right-of-way when crossing the street when:",
          "answers": [
            "Wearing light-colored clothing",
            "Led by a guide dog, or using a white or metallic cane",
            "Helped by another person",
            "Wearing dark-colored glasses"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 112,
          "question": "Motorists should be aware that all bicycles used after dark must have:",
          "answers": [
            "Reflective handlebar grips",
            "A front headlight and red taillight",
            "White reflectors on the front and rear fenders",
            "Brake lights"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 113,
          "question": "A motorist should know that a bicyclist operating on a roadway must:",
          "answers": [
            "Ride on the right side of the road",
            "Ride on the side of the road facing traffic",
            "Ride on either side of the road",
            "Ride on the side of the road with the least traffic"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 114,
          "question": "This sign means:",
          "answers": [
            "Divided highway ends",
            "One-way traffic ahead",
            "Two-way traffic ahead",
            "Keep to the right"
          ],
          "correctAnswerIndex": 3,
          "image": "images/traffic-signs/7.jpg",
        },
        {
          "no": 115,
          "question": "This sign means:",
          "answers": [
            "Continue at your current speed",
            "You must stop ahead",
            "Speeding is not allowed",
            "There is a traffic signal ahead"
          ],
          "correctAnswerIndex": 3,
          "image": "images/traffic-signs/13.jpg",
        },
        {
          "no": 116,
          "question": "This sign means:",
          "answers": [
            "Highway changes ahead to the right",
            "Hiking trails ahead to the right",
            "Hotel ahead to the right",
            "Hospital ahead to the right"
          ],
          "correctAnswerIndex": 3,
          "image": "images/traffic-signs/16.jpg",
        },
        {
          "no": 117,
          "question": "This sign means:",
          "answers": [
            "One-way traffic",
            "Intersection ahead",
            "Merging traffic from the right",
            "Highway curves ahead"
          ],
          "correctAnswerIndex": 2,
          "image": "images/traffic-signs/14.jpg",
        },
        {
          "no": 118,
          "question": "This sign is used to prevent:",
          "answers": [
            "Entrance to full parking lots",
            "Entrance to road construction areas",
            "Entrance to dead-end streets",
            "Wrong-way entrance on one-way streets and expressway ramps"
          ],
          "correctAnswerIndex": 3,
          "image": "images/traffic-signs/4.jpg",
        },
        {
          "no": 119,
          "question": "This sign means:",
          "answers": [
            "Don't drink if you are going to drive",
            "Slippery when wet",
            "Road curves ahead",
            "You are approaching a hill"
          ],
          "correctAnswerIndex": 1,
          "image": "images/traffic-signs/12.jpg",
        },
        {
          "no": 120,
          "question": "This sign means:",
          "answers": [
            "Pedestrians only",
            "Intersection ahead",
            "Hiking trails ahead",
            "School crossing ahead"
          ],
          "correctAnswerIndex": 3,
          "image": "images/traffic-signs/15.jpg",
        },
        {
          "no": 121,
          "question": "This sign means:",
          "answers": [
            "Slow down if an emergency vehicle is approaching",
            "Look both ways as you cross the intersection",
            "Always come to a full stop at the intersection",
            "Slow down and be prepared to stop if necessary"
          ],
          "correctAnswerIndex": 3,
          "image": "images/traffic-signs/2.jpg",
        },
        {
          "no": 122,
          "question": "This sign means:",
          "answers": [
            "Merging traffic is approaching from the right",
            "Winding road ahead",
            "Right lane ends, stay to the left",
            "Divided highway ahead"
          ],
          "correctAnswerIndex": 2,
          "image": "images/traffic-signs/8.jpg",
        },
        {
          "no": 123,
          "question": "This sign means:",
          "answers": [
            "All traffic turn left",
            "No left turn",
            "No U-turn",
            "Truck route to the left"
          ],
          "correctAnswerIndex": 1,
          "image": "images/traffic-signs/6.jpg",
        },
        {
          "no": 124,
          "question": "This sign means:",
          "answers": [
            "Divided highway ahead",
            "One-way taffic ahead",
            "Four-lane highway ahead",
            "Divided highway ends"
          ],
          "correctAnswerIndex": 3,
          "image": "images/traffic-signs/9.jpg",
        },
        {
          "no": 125,
          "question": "This sign means:",
          "answers": [
            "Trucks under 18,000 lbs. allowed",
            "Hill ahead",
            "Truck stop ahead",
            "No trucks allowed"
          ],
          "correctAnswerIndex": 1,
          "image": "images/traffic-signs/11.jpg",
        },
        {
          "no": 126,
          "question": "This sign means:",
          "answers": [
            "Slow down and prepare to stop only if cars are approaching you",
            "Come to a full stop, then go when it is safe to do so",
            "Proceed carefully through the intersection, not always stopping",
            "Stop only for traffic on an intersecting road"
          ],
          "correctAnswerIndex": 1,
          "image": "images/traffic-signs/1.jpg",
        },
        {
          "no": 127,
          "question": "This sign is a warning that you are approaching:",
          "answers": [
            "An intersection",
            "A crosswalk",
            "A railroad crossing",
            "A blasting zone"
          ],
          "correctAnswerIndex": 2,
          "image": "images/traffic-signs/3.jpg",
        },
        {
          "no": 128,
          "question": "This sign means:",
          "answers": [
            "No left turn",
            "No stopping",
            "No U-turn",
            "Detour ahead"
          ],
          "correctAnswerIndex": 2,
          "image": "images/traffic-signs/5.jpg",
        },
        {
          "no": 129,
          "question": "This sign means:",
          "answers": [
            "Four-lane traffic ahead",
            "Divided highway ahead",
            "Two-way traffic ahead",
            "Intersection ahead",
          ],
          "correctAnswerIndex": 2,
          "image": "images/traffic-signs/10.jpg",
        },
      ])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("EnglishTests");
  }
};
