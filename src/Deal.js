
import React from "react";
import Letters from './Letters';


export default function deal(round) {
    let list = [];
    let hand = new Object();
    if (round > 0) {
        for (let i = 0; i < round; i++) {
            let random = Math.floor(Math.random() * Object.keys(Letters).length);
            hand[Object.keys(Letters)[random]] = Letters[Object.keys(Letters)[random]];
        }
    }
    return hand;

}