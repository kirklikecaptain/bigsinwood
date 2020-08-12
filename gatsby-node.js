exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  createPage({
    path: '/',
    component: require.resolve('./src/views/index/index.jsx')
  });

  createPage({
    path: '/contact/',
    component: require.resolve('./src/views/contact/index.jsx')
  });

  createPage({
    path: '/404/',
    component: require.resolve('./src/views/404/index.jsx')
  });
};
