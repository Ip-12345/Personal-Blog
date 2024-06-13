/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'AI Tutor--picky tutor (currently working on)',
    position: 'creator',
    url: 'https://github.com/Ip-12345',
    startDate: '2024-05-19',
    summary: ` Developing an AI  based tutor as a value addition for students, professors, learners and creators, decreasing the manual dependency to clarify doubts and learn via virtual interaction.`,
    highlights: [
      'Implemented using CSS, React, Express.js for the frontend and JavaScript for the backend. ',
      'Applied UI to build the website via smooth interaction and Oauth2.O for a secured and authenticated system.',
      'Used LLMs like GPT and BERT for manipulation, generation and interpretability of data',
      'Used  various concepts of machine learning such as NLP, Neural network architectures like Transformers and Data Science for the data analysis and knowledge extraction.',
    ],
  },
  {
    name: 'Sentiment Analysis of Location Reviews',
    position: 'creator',
    url: 'https://github.com/Ip-12345',
    startDate: '2024-06-02',
    summary: `Developed a machine learning model to analyze and classify user reviews of locations as positive or negative.
    Collected and preprocessed a dataset of user reviews from sources such as noBroker.`,
    highlights: [
      'Performed data cleaning, including tokenization, stop-word removal, and stemming, to prepare text data for analysis using Scikit-learn.',
      'Fine-tuned hyperparameters and evaluated model performance using cross-validation and metrics such as accuracy,  precision, recall, and F1-score.',
      'Collaborated with frontend developers to integrate the sentiment analysis API into a web application, providing users with real-time feedback on location reviews.',
    ],
  },
  {
    name: 'Personal Portfolio Website ',
    position: 'creator',
    url: 'https://github.com/Ip-12345',
    startDate: '2024-06-10',
    endDate: '2024-06-14',
    summary: `Developed a personal portfolio website using React, showcasing details about me, my resume, and travel experiences.`,
    highlights: [
      ' Styled components using CSS modules/ Styled-Components/ Sass, adhering to modern web design principles.',
      'Designed and implemented a responsive user interface to ensure compatibility across various devices and screen sizes. ',
      "Implemented routing using React Router to navigate between different sections of the website seamlessly.",
      "Ensured cross-browser compatibility, providing a consistent experience across different browsers.",
    ],
  },
];

export default work;
