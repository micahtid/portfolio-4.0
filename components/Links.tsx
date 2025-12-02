import { links } from '@/data/data';

export default function Links() {
  return (
    <section className="w-full pt-16">
      <h2 className="text-2xl font-bold text-foreground mb-4">
        <span className="text-accent">*</span> links
      </h2>
      <div className="flex gap-4 text-gray text-sm">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-accent transition-colors"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
