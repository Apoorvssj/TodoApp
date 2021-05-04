export const hover = {
  scale: 1.1,
  transition: {
    duration: 0.3,
  },
};

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const listAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const lineAnimation = {
  hidden: {
    height: "0%",
  },
  show: {
    height: "80%",
    transition: {
      duration: 1,
    },
  },
};

export const textAnimation = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const iconAnimation = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const colorAnimation = {
  hidden: {
    color: "#FFF",
  },
  show: {
    color: "#23d997",
    transition: { duration: 3, ease: "easeOut" },
  },
};

export const optionAnimation = {
  show: {
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
