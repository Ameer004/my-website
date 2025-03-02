import Layout from '../components/Layout';
import MatrixRain from '../components/MatrixRain';
import ProjectCard from '../components/ProjectCard';

export default function Coding() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <MatrixRain />
        <div className="container mx-auto py-10 px-4 text-white">
          <h1 className="text-3xl md:text-4xl mb-4">My Coding Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              title="Project 1"
              description="A web app built with React and Node.js."
              image="/project1.jpg"
            />
            <ProjectCard
              title="Project 2"
              description="A CLI tool for automating tasks."
              image="/project2.jpg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}