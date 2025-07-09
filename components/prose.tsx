import clsx from 'clsx';

const Prose = ({ html, className }: { html: string; className?: string }) => {
  return (
    <div
      className={clsx(
        'prose prose-gray max-w-none text-gray-600 prose-headings:text-gray-900 prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-a:text-gray-900 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:list-disc prose-ol:list-decimal',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
