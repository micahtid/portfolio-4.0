import PageHeader from '@/components/PageHeader';
import Experience from '@/components/Experience';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="experience"
        description="a collection of my professional work and contributions"
      />
      <Experience showcaseOnly={false} showTitle={false} />
    </div>
  );
}
