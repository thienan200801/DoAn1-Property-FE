import { useRouter } from "next-translate-routes/router";
import { useEffect } from "react";

function ScrollToTop({ children }) {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [router.pathname]);

  return children || null;
}

export default ScrollToTop;
