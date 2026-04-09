/**
 * クイズの正解ハッシュ値 (SHA-256)
 * 判定時に小文字化・トリムされることを前提としています。
 */
export const QUIZ_ANSWERS = {
  trial1: '0832c0adf05418144b7b5f01e14600782ba7a302a606b49e3bf26214b765c176', // surprise
  trial2: '2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b', // secret
  trial3: '424bfabf11e7751e1f40a711a1cc9b3d142e7cbd0872058f7c97319fe5397dad', // utsumi
} as const;

/**
 * 試練のタイトルと問題（演出用）
 */
export const QUIZ_CONTENT = {
  trial1: {
    title: '第一の試練：覚悟',
    question: 'この結社が最も重んじる「未知の驚き」を英語で何と言うか？',
  },
  trial2: {
    title: '第二の試練：沈黙',
    question: '選ばれし者のみが知る「秘密」を英語で何と言うか？',
  },
  trial3: {
    title: '第三の試練：啓示',
    question: 'この試練の主催者の名は？（アルファベット小文字で答えよ）',
  },
} as const;

/**
 * 最終的な報酬URL (Base64難読化)
 */
export const REWARD_URL_ENCODED = 'aHR0cHM6Ly9tZWV0Lmdvb2dsZS5jb20vYWJjLWRlZmctaGlq';

/**
 * 最終メッセージ
 */
export const REVEAL_MESSAGE = '２１時からリモート飲み会しよう。必要なものは自宅に届けてある。';
