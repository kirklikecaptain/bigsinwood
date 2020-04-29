exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/',
    component: require.resolve('./src/views/_home/HomePage.js')
  });

  createPage({
    path: '/wildfoods/',
    component: require.resolve('./src/views/wildfoods/WildFoodPage.js')
  });

  createPage({
    path: '/wildfood/',
    component: require.resolve('./src/views/wildfoods/WildFoodPage.js')
  });

  createPage({
    path: '/404/',
    component: require.resolve('./src/views/404/PageNotFound.js')
  });
};
