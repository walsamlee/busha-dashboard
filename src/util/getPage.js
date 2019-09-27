export const getPage = () => {
  return (
    window.location.href.split('/')[3]
  );
};
