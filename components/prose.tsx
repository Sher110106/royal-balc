import clsx from 'clsx';

const Prose = ({ html, className }: { html: string; className?: string }) => {
  return (
    <div
      className={clsx(
        'prose prose-gray max-w-none text-text-secondary prose-headings:text-text-primary prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-ul:list-disc prose-ol:list-decimal',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
