import PageHeader from '@/components/PageHeader';
import Projects from '@/components/Projects';
import { hackathons } from '@/data/data';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="projects"
        description="things i've built and shipped"
      />
      <Projects showcaseOnly={false} showTitle={false} />

      <div className="mt-10">
        <p className="text-gray-200 text-sm">things i built in 24 hours</p>
        <Projects showcaseOnly={false} showTitle={false} data={hackathons} />
      </div>
    </div>
  );
}
