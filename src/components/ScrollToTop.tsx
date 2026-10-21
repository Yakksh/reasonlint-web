import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls to the top of the page
 * whenever the route changes, or to the element named by the
 * URL hash (e.g. /#features) when one is present.
 */
export const ScrollToTop = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // React Router doesn't scroll to hash targets on its own,
        // so jump to the section if it exists on the new page
        if (hash) {
            const target = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (target) {
                target.scrollIntoView();
                return;
            }
        }

        // Otherwise scroll to top whenever the route changes
        window.scrollTo(0, 0);
        // key changes on every navigation, so re-clicking the same
        // hash link after scrolling away still jumps back to it
    }, [pathname, hash, key]);

    return null;
};
