import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

export function scrollToTop(): void {
  window.scrollTo(0, 0);
}

export const useScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);
};
