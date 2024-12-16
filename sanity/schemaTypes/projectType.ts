import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'year',
      type: 'string',
    }),
    defineField({
      name: 'made_at',
      type: 'string',
    }),
    defineField({
      name: 'builtWith',
      title: 'Built With',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          'JavaScript',
          'TypeScript', 
          'HTML & CSS', 
          'Tailwind', 
          'React', 
          'Next.js', 
          'Vue2', 
          'Vue3', 
          'SolidJS', 
          'Node.js', 
          'GraphQL', 
          'PostgreSQL', 
          'WordPress', 
          'Elementor', 
          'Docker', 
          'Kubernetes', 
          'Sanity', 
          // add more options as needed
        ],
        layout: 'grid', // Use checkbox layout for multi-select
      },
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
  ],
})
