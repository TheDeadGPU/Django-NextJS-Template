"use client"; // Add this line to treat this component as a client component

import { useEffect, useState } from 'react';
import axios from 'axios';

// Define interface for the API response
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get<Project[]>('http://localhost:8000/projects/')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
        ))}
      </div>
    </div>
  );
}