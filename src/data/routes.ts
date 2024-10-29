const routes = {
  root: "/",
  pokemon: {
    list: "/pokemon",
    detail: (pokemon: string) => {
      return `/pokemon/${pokemon}`;
    },
  },
};

export default routes;
