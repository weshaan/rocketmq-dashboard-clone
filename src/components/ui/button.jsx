export const Button = ({ children, className, ...props }) => (
    <button
      className={`bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  