
import { useEffect } from 'react';

function useDynamicStyleSheetboostrap(url, condition) {
  useEffect(() => {
    let link;

    if (condition) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.id = 'dynamic-bootstrap';
      document.head.appendChild(link);
    }

    return () => {
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [url, condition]);

}

export default useDynamicStyleSheetboostrap;
