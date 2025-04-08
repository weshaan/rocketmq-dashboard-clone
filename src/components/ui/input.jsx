export const Input = ({ className, ...props }) => (
    <input
      className={`border border-gray-300 rounded-lg p-2 ${className}`}
      {...props}
    />
  );
  