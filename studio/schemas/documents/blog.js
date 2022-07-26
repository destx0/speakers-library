import { format } from 'date-fns';
import { GiNotebook } from 'react-icons/gi';

export default {
  title: 'Summary',
  name: 'blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    { title: 'Author of book', name: 'bookAuthor', type: 'string' },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'speakerslibrary.in/ikigai here  slug = ikigai',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'datetime',
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      title: 'Author of summery',
      name: 'author',
      type: 'reference',
      description: 'author of the summery',
      to: [{ type: 'author' }],
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'normalText',
      description: 'A short description of the blog post',
    },
    {
      title: 'Blog Body',
      name: 'body',
      type: 'richText',
    },
    {
      title: 'Flipkart Link',
      name: 'flipkartUrl',
      type: 'url',
    },
    {
      title: 'Amazon link',
      name: 'amazonUrl',
      type: 'url',
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, dd/MM/yyy')
          : '',
      };
    },
  },
};
