/// 规则地址：https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md

module.exports = {
  rules: {
    // body
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 10],
    'body-max-length': [2, 'always', 720],
    // footer
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 10],
    'footer-max-length': [2, 'always', 720],
    //header
    'type-max-length': [2, 'always', 8],
    'scope-max-length': [2, 'always', 14],
    'header-max-length': [2, 'always', 72],
    //header-subject
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '。'],
    //header-scope
    'scope-case': [2, 'always', 'lower-case'],
    //header-type
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'style',
        'fix',
        'docs',
        'chore',
        'refactor',
        'test'
      ]
    ]
  }
};
