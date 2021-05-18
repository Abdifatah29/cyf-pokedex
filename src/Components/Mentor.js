import React from 'react';

const sa_mentors = ['Abdifatah', 'Sharad', 'Chandre'];

const Mentor = () => (
    <div>
        {/* Adds all the elements of an array into a string, separated by the specified separator string. */}
     <span> {sa_mentors.join(", ")}</span>
     {/* //above is example of embedding javaScript into JSX */}
     <MentorList />
    </div>
);

const mentors = [
    "Ali",
    "Abdifatah",
    "Davide",
    "German",
    "Gerald",
    "Sharad"
];

const MentorList = () => (
    <ul>
        {
            mentors.map(name => (
                <li>{name}</li>
            ))
        }
    </ul>
);

export default Mentor;
