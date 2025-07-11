import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode
}: {
  title: string;
  amount: string;
  currencyCode: string;
}) => {
  return (
    <div className="space-y-2">
      {/* Product Title */}
      <h3 className="font-heading text-base font-medium text-text-primary leading-tight line-clamp-2 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      
      {/* Price */}
      <Price
        className="font-numeric text-lg font-semibold text-text-primary"
        amount={amount}
        currencyCode={currencyCode}
      />
    </div>
  );
};

export default Label;
