import React from 'react';
import './Input.css'

export default function Input () {
return (
    <form>
        Words:  <input type="text"></input><br />
        Discard:  <input type="text"></input><br />
        <input type="submit" value="submit"></input><br />
    </form>
)
}