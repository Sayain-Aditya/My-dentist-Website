export const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};