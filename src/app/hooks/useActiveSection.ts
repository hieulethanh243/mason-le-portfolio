import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Lọc ra các section đang visible
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
          }));

        if (visibleSections.length === 0) {
          // nếu không có section nào → clear highlight
          setActive(null);
          return;
        }

        // section chiếm nhiều viewport nhất (đang ở giữa)
        const topSection = visibleSections.reduce((max, curr) =>
          curr.ratio > max.ratio ? curr : max
        );

        // Nếu là hero thì reset
        if (topSection.id === "hero") {
          setActive(null);
        } else {
          setActive(topSection.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
