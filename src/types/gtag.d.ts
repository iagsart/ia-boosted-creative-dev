
// Type definitions for Google Analytics gtag.js
interface Window {
  gtag?: (
    command: 'config' | 'event' | 'set' | 'js' | 'consent',
    targetId: string,
    config?: {
      [key: string]: any;
    }
  ) => void;
}
