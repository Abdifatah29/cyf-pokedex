import React from 'react';

const sa_mentors = ['Abdifatah', 'Sharad', 'Chandre'];

const Mentor = props => props.name;

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
            mentors.map((name, index) => (
                <li key={index}>{name}</li>
            ))
        }
    </ul>
);

export default Mentor;
