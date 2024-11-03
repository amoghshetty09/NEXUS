// src/components/Events.jsx
import React from 'react';
import AnimationWrapper from './AnimationWrapper';
import './Events.css';

const eventsList = [
    { name: "NexusCode", description: "Coding Competition" },
    { name: "NexusHackathon", description: "24-Hour Hackathon" },
    { name: "NexusHunt", description: "Tech Scavenger Hunt" },
];

const Events = () => (
    <AnimationWrapper>
        <div className="events">
            <h2>Upcoming Events</h2>
            <h2 style={{ color: "skyblue" }}>Dates To be Released Soon</h2>

            <div className="events-container">
                {eventsList.map((event, index) => {
                    console.log(event.name, event.description); // Log each event name and description
                    return (
                        <div className="event-frame" key={index}>
                            <h3>{event.name}</h3>
                            <p>{event.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </AnimationWrapper>
);

export default Events;


