import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Stars this repository has on github',
    value: '0',
    link: 'https://github.com/Ip-12345?tab=stars',
  },
  {
    label: 'Number of people watching this repository',
    value: '10',
    link: 'https://github.com/Ip-12345?tab=repositories',
  },
  {
    label: 'Number of forks',
    value: '0',
    link: 'https://github.com/Ip-12345?tab=repositories',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/mldangelo/personal-site/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/mldangelo/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2150',
    link: 'https://github.com/mldangelo/personal-site/graphs/contributors',
  },
];

export default data;
