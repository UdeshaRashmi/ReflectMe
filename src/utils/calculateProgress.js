const calculateProgress = (current, target) => {
  if (target === 0) return 0;
  const progress = (current / target) * 100;
  return Math.min(100, Math.max(0, progress));
};

export default calculateProgress;