module.exports = {
  doc: [
    {
      type: 'category',
      label: 'システム仕様',
      items: [
        'spec/information',
        'spec/technology',
        'spec/screen',
        {
          type: 'category',
          label: '各ページ',
          items: [
            'spec/pages/detail',
            'spec/pages/create',
            'spec/pages/update',
          ]
        }
      ]
    },
    'style-guide'
  ]
};
