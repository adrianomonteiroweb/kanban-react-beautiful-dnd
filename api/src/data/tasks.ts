const fetchID = () => Math.random().toString(36).substring(2, 10);

export const tasks = {
  pending: {
    title: 'pending',
    items: [
      {
        id: fetchID(),
        title: 'Send the Figma file to Dima',
        comments: [],
      },
    ],
  },
  ongoing: {
    title: 'ongoing',
    items: [
      {
        id: fetchID(),
        title: 'Review GitHub issues',
        comments: [
          {
            name: 'David',
            text: 'Ensure you review before merging',
            id: fetchID(),
          },
        ],
      },
    ],
  },
  completed: {
    title: 'completed',
    items: [
      {
        id: fetchID(),
        title: 'Create technical contents',
        comments: [
          {
            name: 'Dima',
            text: 'Make sure you check the requirements',
            id: fetchID(),
          },
        ],
      },
    ],
  },
};
