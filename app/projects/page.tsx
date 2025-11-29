import PageHeader from '@/components/PageHeader';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="projects"
        description="things i've built and shipped"
      />
      <Projects showcaseOnly={false} showTitle={false} />
    </div>
  );
}
