
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
                "\nThe player will fall back",
            codeSnippet: ""},
        {id: 5, hasVideo: true, videoSrc: C5,
            description: "Blaster: " +
                "The player blasts the target and a projectile projects from the barrel of the gun" +
                "If it's a head shot it'll play a specific sound and do 30 damage" +
                "If it's a body shot it'll play the default sound and do 15 damage" +
                "",
            codeSnippet: ""},
        {id: 6, hasVideo: true, videoSrc: C6},
        {id: 7, hasVideo: true, videoSrc: C7},
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
        {id: 1, hasVideo: true, videoSrc: D1},
        {id: 2, hasVideo: true, videoSrc: D2},
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
        {id: 1, hasVideo: true, videoSrc: Co1},
        {id: 2,  hasVideo: true, videoSrc: Co2},
        {id: 3, hasVideo: true, videoSrc: Co3},
        {id: 4, hasVideo: true, videoSrc: Co4},
        {id: 5, hasVideo: true, videoSrc: Co5},
        {id: 6, hasVideo: true, videoSrc: Co6},
        {id: 7, hasVideo: true, videoSrc: Co7},
        {id: 8, hasVideo: true, videoSrc: Co8},
        {id: 9, hasVideo: true, videoSrc: Co9},
        {id: 10, hasVideo: false},
    ],
    "Horror": [
        {id: 1, hasVideo: false},
    ],
    "Cutscenes": [
        {id: 1, hasVideo: false},
    ],

    "Random": [
        {id: 1, hasVideo: true, videoSrc: R1},
        {id: 2, hasVideo: true, videoSrc: R2},
        {id: 3, hasVideo: true, videoSrc: R3},
        {id: 4, hasVideo: true, videoSrc: R4},
        {id: 5, hasVideo: true, videoSrc: R5},

        {id: 6, hasVideo: false},
    ],
}
