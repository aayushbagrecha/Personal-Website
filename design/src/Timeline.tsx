import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import './Timeline.css';

export default function OppositeContentTimeline() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Education and Experience</h2>
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent className="timeline-date">
            May 2025
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot education" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="timeline-title">Virginia Tech</h3>
            <p className="timeline-subtitle">Master's of Engineering in Computer Science and Applications</p>
            <p className="timeline-details">
              Courses: Software Engineering, Web Application Development, Cloud Computing, Usability Engineering, 
              AI Tools in Software Delivery, Mobile Application Development, Intermediate Data Structures & Algorithms
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="timeline-date">
            June 2024 - August 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot experience" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="timeline-title">Fulloop AI (formerly Prepto)</h3>
            <p className="timeline-subtitle">Software Engineer Intern</p>
            <ul className="timeline-details">
              <li>Implemented responsive UI components using React and Redux</li>
              <li>Integrated RESTful APIs using Typescript and React Hooks</li>
              <li>Developed backend services with Java, Spring Boot, and PostgreSQL</li>
              <li>Conducted prompt engineering for LLM training using LangChain</li>
              <li>Streamlined codebase using Git, reducing merge conflicts by 40%</li>
            </ul>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="timeline-date">
            January 2022 - July 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot experience" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="timeline-title">Quantiphi Analytics Solution Private Limited</h3>
            <p className="timeline-subtitle">Technical Business Analyst, FSI Advisory</p>
            <ul className="timeline-details">
              <li>Developed ML-based Proof of Values for Auto Claims Severity and Credit Card Fraud</li>
              <li>Established a cross-business unit AI Center of Excellence (AI CoE)</li>
              <li>Modernized insurance claims processes, improving TAT by 35%</li>
            </ul>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent className="timeline-date">
            July 2018 - June 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="timeline-dot education" />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="timeline-title">Sardar Patel Institute of Technology</h3>
            <p className="timeline-subtitle">Bachelor of Technology in Electronics and Telecommunications (Major), Computer Science (Minor)</p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}