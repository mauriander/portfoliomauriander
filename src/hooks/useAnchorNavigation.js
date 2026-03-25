import { useCallback } from "react";

function useAnchorNavigation() {
  return useCallback((event, href) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();

    const headerOffset = window.innerWidth >= 768 ? 96 : 128;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }, []);
}

export default useAnchorNavigation;
