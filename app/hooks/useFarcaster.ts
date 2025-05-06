import { useEffect } from 'react';

export function useFarcaster() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    async function loadFarcaster() {
      try {
        const sdk = await import('@farcaster/frame-sdk');
        
        // Initialize the SDK
        sdk.default.actions.ready();
        
        // Add event listeners
        sdk.default.on('primaryButtonClicked', () => {
          console.log('Primary button clicked');
        });
        
        // Return cleanup function
        return () => {
          sdk.default.removeAllListeners();
        };
      } catch (error) {
        // Silently handle the error - SDK might not be available in all contexts
        console.log('Farcaster SDK not available');
      }
    }
    
    const cleanup = loadFarcaster();
    
    return () => {
      // Execute cleanup function if it exists
      if (cleanup) {
        cleanup.then(cleanupFn => {
          if (cleanupFn) cleanupFn();
        });
      }
    };
  }, []);
}