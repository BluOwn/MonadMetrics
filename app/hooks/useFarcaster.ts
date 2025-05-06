import { useEffect } from 'react';

export function useFarcaster() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    try {
      const sdk = require('@farcaster/frame-sdk');
      
      // Initialize the SDK
      sdk.actions.ready();
      
      // Add event listeners
      sdk.on('primaryButtonClicked', () => {
        console.log('Primary button clicked');
      });
      
      // Cleanup
      return () => {
        sdk.removeAllListeners();
      };
    } catch (error) {
      // Silently handle the error - SDK might not be available in all contexts
      console.log('Farcaster SDK not available');
    }
  }, []);
} 