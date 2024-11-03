// src/components/About.jsx
import React from 'react';
import './About.css';

function About() {
    const domains = [
        {
            name: 'Logistics',
            description: 'Handles all the organizational and logistical tasks for smooth event execution.',
        },
        {
            name: 'Web Development',
            description: 'Builds and maintains the club’s web presence, ensuring a smooth user experience.',
        },
        {
            name: 'App Development',
            description: 'Develops mobile applications to support our initiatives and events.',
        },
        {
            name: 'Design',
            description: 'Creates visually engaging content, graphics, and user interfaces for the club.',
        },
        {
            name: 'Sponsorship',
            description: 'Manages partnerships and sponsorships to secure funding and support.',
        },
    ];

    return (
        <div className="about-container">
            <h1>About Nexus</h1>
            <p>Our technical club at PES College is dedicated to innovation and excellence across various domains.</p>
            <div className="domains">
                {domains.map((domain, index) => (
                    <div key={index} className="domain-card">
                        <h2>{domain.name}</h2>
                        <p>{domain.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
