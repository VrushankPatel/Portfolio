import React from 'react';
import useHashLocation from './useHashLocation';

type HashLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any; // For any other props
};

/**
 * HashLink - A Link component that works with hash-based routing
 * It ensures that links maintain the hash prefix when navigating
 */
export const HashLink: React.FC<HashLinkProps> = ({ 
  href, 
  children, 
  className, 
  onClick,
  ...props 
}) => {
  const [, navigateFn] = useHashLocation();
  
  // Handle click to use our hash navigation
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    
    // Call the original onClick if provided
    if (onClick) {
      onClick(event);
    }
    
    // Check if it's a section hash (starts with #) - handle scrolling
    if (href.startsWith('#')) {
      const targetId = href.substring(1); // Remove the # character
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // Navigate using our hash location hook for regular routing
    if (typeof navigateFn === 'function') {
      navigateFn(href);
    }
  };

  // For section links (href starting with #), use the href directly
  // For route links, add the hash prefix
  const finalHref = href.startsWith('#') ? href : `#${href}`;

  return (
    <a 
      href={finalHref} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default HashLink; 