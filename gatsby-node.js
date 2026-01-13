exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Hämtar alla portfolio item från Contentful
  const result = await graphql(`
    {
      allContentfulPortfolioItem {
        nodes {
          slug
        }
      }
    }
  `)

  // Kontrollerar om det finns några projects
  if (result.data.allContentfulPortfolioItem.nodes.length === 0) {
    console.log("Inga Portfolio Items hittades")
    return
  }

  // Skapar en sida för varje portfolio item
  result.data.allContentfulPortfolioItem.nodes.forEach((node) => {
    console.log(`skapar sida: /portfolio/${node.slug}`)
    
    createPage({
      path: `/portfolio/${node.slug}`,
      component: require.resolve(`./src/templates/portfolio-item.js`),
      context: {
        slug: node.slug,
      },
    })
  })

  console.log(`Skapade ${result.data.allContentfulPortfolioItem.nodes.length} projectsidor!!`)
}