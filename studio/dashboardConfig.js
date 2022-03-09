export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62280b6feb9d786335eaa4bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-1qfcg6b4',
                  apiId: '0850f88f-1563-45db-b6aa-7492ec038510'
                },
                {
                  buildHookId: '62280b6feb9d785990eaa54f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-vssreach',
                  apiId: 'b4ccd9f7-8ff3-44bc-ac96-57d31fb49aad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gipsi/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-vssreach.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
