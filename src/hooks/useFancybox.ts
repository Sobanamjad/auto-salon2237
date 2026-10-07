import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox.css';

/**
 * Initialises Fancybox on mount and destroys on unmount.
 * Binds to any [data-fancybox] anchor on the page — same as the
 * original site's fancybox.umd.js which calls Fancybox.bind("[data-fancybox]").
 */
export function useFancybox(selector = '[data-fancybox]') {
  useEffect(() => {
    Fancybox.bind(selector);
    return () => {
      Fancybox.destroy();
    };
  }, [selector]);
}
