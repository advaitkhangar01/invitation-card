import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  href,
  target,
  rel,
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`btn-directions ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`btn-directions ${className}`} {...props}>
      {children}
    </button>
  );
};
