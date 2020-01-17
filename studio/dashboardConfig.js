export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2109f7eeccd5a3f1f97383',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-axw7qadi',
                  apiId: 'a7379af3-8364-44fa-9253-69b5955e3146'
                },
                {
                  buildHookId: '5e2109f7d0cb325b7a47a95a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8ht4g76v',
                  apiId: '731fba14-6e02-4b7b-88e8-a1094a6c0f67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rca-tiago-salomon/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8ht4g76v.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
