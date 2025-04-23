import { useState, useEffect, useCallback } from "react";

// Create a hash location hook for wouter
const useHashLocation = () => {
  const [path, setPath] = useState<string>(getCurrentPath());
  
  // Get the path from hash (remove leading # and ensure it starts with /)
  function getCurrentPath(): string {
    // If the hash is empty or just '#', return home path
    if (!window.location.hash || window.location.hash === '#') {
      return '/';
    }
    
    // Check if it's a section ID (starts with '#' but doesn't have a subsequent path)
    if (window.location.hash.match(/^#[^/]/)) {
      // It's an in-page section ID, return home path
      return '/';
    }
    
    // Otherwise, it's a route path
    let path = window.location.hash.replace("#", "") || "/";
    if (!path.startsWith("/")) path = "/" + path;
    return path;
  }

  useEffect(() => {
    // This function updates the path state when the hash changes
    const handler = () => setPath(getCurrentPath());

    // Listen to hashchange events
    window.addEventListener("hashchange", handler);
    
    // Cleanup the event listener
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // Navigate function to change the URL hash
  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [path, navigate];
};

export default useHashLocation; 