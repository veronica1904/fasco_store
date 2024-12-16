interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">{title}</h2>
    {subtitle && (
      <p className="text-gray-600 max-w-2xl mx-auto px-4">{subtitle}</p>
    )}
  </div>
);
