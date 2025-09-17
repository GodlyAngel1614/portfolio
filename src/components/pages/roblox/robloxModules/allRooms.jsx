
// Leaderboard

import L1 from "../videos/Leaderboard/1.mp4"
import L2 from "../videos/Leaderboard/2.mp4"

// Combat Systems

import C1 from "../videos/Combat/1.mp4"
import C2 from "../videos/Combat/2.mp4"
import C3 from "../videos/Combat/3.mp4"
import C4 from "../videos/Combat/4.mp4"
import C5 from "../videos/Combat/5.mp4"
import C6 from "../videos/Combat/6.mp4"
import C7 from "../videos/Combat/7.mp4"

// Discord

import D1 from "../videos/Discord/1.mp4"
import D2  from "../videos/Discord/2.mp4"

// Abilities

// Random

import R1 from "../videos/Random/1.mp4"
import R2 from "../videos/Random/2.mp4"
import R3 from "../videos/Random/3.mp4"
import R4 from "../videos/Random/4.mp4"
import R5 from "../videos/Random/5.mp4"

// Cozy

import Co1 from "../videos/Cozy/1.mp4"
import Co2 from "../videos/Cozy/2.mp4"
import Co3 from "../videos/Cozy/3.mp4"
import Co4 from "../videos/Cozy/4.mp4"
import Co5 from "../videos/Cozy/5.mp4"
import Co6 from "../videos/Cozy/6.mp4"
import Co7 from "../videos/Cozy/7.mp4"
import Co8 from "../videos/Cozy/8.mp4"
import Co9 from "../videos/Cozy/9.mp4"

// Cutscenes

// First Person Shooter

import F1 from "../videos/FPS/1.mp4"
import F2 from "../videos/FPS/2.mp4"
import F3 from "../videos/FPS/3.mp4"
import F4 from "../videos/FPS/4.mp4"
import F5 from "../videos/FPS/5.mp4"
import F6 from "../videos/FPS/6.mp4"
import F7 from "../videos/FPS/7.mp4"
import F8 from "../videos/FPS/8.mp4"
import F9 from "../videos/FPS/9.mp4"
import F10 from "../videos/FPS/10.mp4"
import F11 from "../videos/FPS/11.mp4"


export const allRooms = {
    "Combat Systems": [
        {id: 1, hasVideo: true, videoSrc: C1,
            description: "Sequence of attacks from the lightsaber" +
                "\nThe damage rate is: 10-15 randomized per hit" +
                "\n12 sword attacks before your sword stamina (yellow bar) is completely depleted" +
                "\nYour energy is depleted by 10 per swing",
            codeSnippet: ""
        },
        {id: 2,  hasVideo: true, videoSrc: C2,
            description: "Actions:" +
                "\nDouble jumping after your halfway in the air:" +
                "\nregular jumps takes 5 stamina, double jump takes 10" +
                "\nStamina increase: increases by a rate of 2.5 per second" +
                "\nPlayer dash: decreases stamina by 10",
            codeSnippet: ""
        },
        {id: 3, hasVideo: true, videoSrc: C3,
            description: "Light saber throw:" +
                "\nRange = 50" +
                "\nCooldown = 5" +
                "\nStamina cost = 15 per throw" +
                "\nDamage = 30 decreasing by 5 as distance from player increases",
            codeSnippet: ""},
        {id: 4, hasVideo: true, videoSrc: C4,
            description: "Block + Stun" +
                "\nif the enemy has started blocking within 2 seconds they will be able to perform a stun + parry" +
                "\nThe player will fall back and be frozen for 2 seconds if hit while stunned the player will recieve a damage of " +
                "\nbase modifier(10 - 15) * 2",
            codeSnippet: ""},
        {id: 5, hasVideo: true, videoSrc: C5,
            description: "Blaster: " +
                "The player blasts the target and a projectile projects from the barrel of the gun" +
                "\nIf it's a head shot it'll play a specific sound and do 30 damage" +
                "\nIf it's a body shot it'll play the default sound and do 15 damage" +
                "\n Using keycode z to zoom in and hit more accurately" +
                "\n can rotate bodly smoothly keeping the barrel of the gun insight to increase accuracy",
            codeSnippet: ""},
        {id: 6, hasVideo: true, videoSrc: C6,
            description: "Blaster: " +
                "The player can hit the target with the barrel of the gun and ragdoll them",
            codeSnippet: ""},
        {id: 7, hasVideo: true, videoSrc: C7, description:
            "Blaster: " +
                "Overview"
        },
        {id: 8, hasVideo: false},

    ],
    "FPS": [
        {id: 1, hasVideo: true, videoSrc: F1},
        {id: 2,  hasVideo: true, videoSrc: F2},
        {id: 3, hasVideo: true, videoSrc: F3},
        {id: 4, hasVideo: true, videoSrc: F4},
        {id: 5, hasVideo: true, videoSrc: F5},
        {id: 6, hasVideo: true, videoSrc: F6},
        {id: 7, hasVideo: true, videoSrc: F7},
        {id: 8, hasVideo: true, videoSrc: F8},
        {id: 9, hasVideo: true, videoSrc: F9},
        {id: 10, hasVideo: true, videoSrc: F10},
        {id: 11, hasVideo: true, videoSrc: F11},
    ],
    "Discord": [
        {id: 1, hasVideo: true, videoSrc: D1,
            description: "Uses a webhook to communicate to discord" +
                "\nThis reports and recieves the following commands with correct formatting:" +
                "\n!save souls (basic command)" +
                "\n!error (give a default report which is reported by 'system' which can be changed to a player name, it picks a tube and what soul is inside it" +
                "\nIt is case sensitive you can't type either without the '!' symbol and it'll still respond " +
                "\nOr type something after a command that doesn't take inputs and still get a active response"},
        {id: 2, hasVideo: true, videoSrc: D2,
            description: "Uses a webhook to communicate to discord" +
                "\nIt can recieve args such as (other player name for commands like: ban, kick, and explode)" +
                "\nIt will kick the other player and tell which player was kicked and whom it came from and the time" +
                "\nIf desired a reason can be inputted and if it has any words that my system deems filter worthy it won't be listed" +
                "\nOther commands can easily be added if desired and further functionality" +
                "\nThis was for a commision which integrated with HD to call these commands from a ui and send it to discord" +
                "\nFurther functionality was handled by the client"},
        {id: 3, hasVideo: false},
    ],
    "Abilities": [
        {id: 1, hasVideo: false},
    ],
    "Leaderboard": [
        {id: 1, hasVideo: true, videoSrc: L1,
            description: "This has a descripto"
        },
        {id: 2, hasVideo: true, videoSrc: L2,
            description: "this too."
        },
        {id: 3, hasVideo: false},
    ],
    "Cozy": [
        {id: 1, hasVideo: true, videoSrc: Co1,
            description: "A game inspired by Stardew valley" +
                "All assets aside from the tree models, and npc body models were made by me" +
                "Features: Main Menu cutscene" +
                "Main menu music that changes everytime you join to 1-4 options"
        },
        {id: 2,  hasVideo: true, videoSrc: Co2,
            description: "The main menu buttons functionality:" +
                "\n Credits" +
                "\n Settings" +
                "\n Mode " +
                "\n The player can input their name in the transition and a flickering ui animation will ensue"
        },
        {id: 3, hasVideo: true, videoSrc: Co3,
            description: "In game:" +
                "Dialogue system with a renting system that does decrease player money"},
        {id: 4, hasVideo: true, videoSrc: Co4,
            description: "In game:" +
                "Branching dialogue with other npcs and multiple different outcomes depending on choice" +
                "Tutorial NPCS"},
        {id: 5, hasVideo: true, videoSrc: Co5,
            description: "In game:" +
                "Moving quest npc with quest ui updating to display it" +
                "Must finish the quest and it will give you a badge"},
        {id: 6, hasVideo: true, videoSrc: Co6,
            description: "In game: "+
                "Animated shop which gives items and can sell items" +
                "Displays the price of clicked on item" +
                "Displays the item in viewport" +
                "If the player has seeds in their inventory and is renting a farm they can plant on it"},
        {id: 7, hasVideo: true, videoSrc: Co7,
            description: "In game: "+
                "Growing sequence of plants" +
                "If the player swims in the water and hits a hot spot they'll be shot up " +
                "After a limited amount of seeds the packet will disappear from the players inventory"},
        {id: 8, hasVideo: true, videoSrc: Co8,
            description: "Grow a garden game: " +
                "Can teleport to farm, sell and shop " +
                "Will allow weather effects and a day to night cycle" +
                "Can harvest plants and this has a throwing functionality" +
                "Can sell with an npc either your entire inventory or whats currently in your hand" +
                "Will tell you the weight and price of the plant based off what's in your " +
                "If you walk 30p away from it the sell ui will disappear" +
                "Growing sequence of plants" +
                "Shop functionality with apples being free and a shift of what's in stock in the shop every 5 minutes" +
                "25% of plants in your garden will get a weather effect and weather changes every 10 minutes"
        },
        {id: 9, hasVideo: true, videoSrc: Co9,
            description: "Overview"},
        {id: 10, hasVideo: false},
    ],
    "Horror": [
        {id: 1, hasVideo: false},
    ],
    "Cutscenes": [
        {id: 1, hasVideo: false},
    ],

    "Random": [
        {id: 1, hasVideo: true, videoSrc: R1,
        description: "This was a commision from a client to create a system similar to yandere dev " +
            "\nThe player can equip a knife and a custom proximity prompt ui is used with full functionality " +
            "\nif the player clicks on it the npc will fall and if fallen on a valid surface blood will pool from the npcs body" +
            "\nIf they don't touch the surface of something the blood pool does not hover mid-air or other weird issues"
        },
        {id: 2, hasVideo: true, videoSrc: R2,
            description: "Phoenix Wright Trilogy inspired main menu system" +
                "\nAll things seen here aside from the furniture was made exclusively by me" +
                "\nThe player hears cutscene music which fades away when they press play " +
                "\nMain menu took inspiration from when you first open the application and it's not full screen" +
                "\nThe buttons are animated to have an overlay and are fully functional" +
                "\nThe camera will pan around the room as the player sets their settings, or goes through which case they want to play" +
                "\nThis was a random project i decided to do for fun!"
        },
        {id: 3, hasVideo: true, videoSrc: R3,
            description: "Melee sequenced hits"},
        {id: 4, hasVideo: true, videoSrc: R4,
            description: "Unfinished commision this was inspired by games like 'blow the biggest gum bubble' " +
                "\n The player can engage in automated fights with npcs and how much damage the player does is calculated by their strength" +
                "\n this does use profile service for data saving and ROACT for ui " +
                "\n The player can hit a punch bag to earn further Strength" +
                "\n Wins are aquired by winning against an npc if your strength is too low it will not let you engage in a fight" +
                "\n if your strength is too low it will not let you punch higher punching bags which give more strength" +
                "\n if you don't meet requirements a ui will display at the bottom with an error msg: " +
                "\n Oops! Looks like your strength isn't quite there yet😓" +
                "\n are you trying to die? That npcs way too strong! 😱😱"},
        {id: 5, hasVideo: true, videoSrc: R5,
            description: "A commision using HD commands" +
                "\nThe player equips a hat and if they press F they can fly around using the walking keybinds (WASD, JOYSTICK)" +
                "\nIf they press remove hat then they'll stop flying and the hat will be removed" +
                "\ntyping this in chat as well removes it"
        },

        {id: 6, hasVideo: false},
    ],
}
