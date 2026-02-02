import { useParams, Navigate } from "react-router-dom";
import ProjectDetail from "../components/portfolio/ProjectDetail";
import { projects } from "../data/portfolioData";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
