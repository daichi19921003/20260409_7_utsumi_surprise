/**
 * クイズの正解ハッシュ値 (SHA-256)
 * 判定時に小文字化・トリムされることを前提としています。
 */
export const QUIZ_ANSWERS = {
  trial1: '0832c0adf05418144b7b5f01e14600782ba7a302a606b49e3bf26214b765c176', // surprise
  trial2: '2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b', // secret
  trial3: '6eabcd20d5415225a9b77cbd9aabf82f49965afe4ed3de59a2ab236f50053a37', // daichi
} as const;

/**
 * 試練のタイトル、問題、選択肢
 */
export const QUIZ_CONTENT = {
  trial1: {
    title: '第一の試練：覚悟',
    question: '我々が重んじる「未知の驚き」を英語で何と言うか？',
    options: ['Shock', 'Surprise', 'Wonder'],
  },
  trial2: {
    title: '第二の試練：沈黙',
    question: '選ばれし者のみが知る「秘密」を英語で何と言うか？',
    options: ['Secret', 'Silent', 'Shadow'],
  },
  trial3: {
    title: '第三の試練：啓示',
    question: 'この試練の主催者の名は？',
    options: ['UNKO', 'DAICHI', 'HANAKUSO'],
  },
} as const;

/**
 * 最終的な報酬URL (Base64難読化)
 */
export const REWARD_URL_ENCODED = 'aHR0cHM6Ly9tZWV0Lmdvb2dsZS5jb20vbmZqLXRkeGYtZXB0';

/**
 * Amazonお届け物URL (Base64難読化)
 */
export const AMAZON_GIFT_URL_ENCODED = 'aHR0cHM6Ly9hbXpuLmFzaWEvZC8wMkNqMUVpMQ==';

/**
 * 最終メッセージ
 */
export const REVEAL_MESSAGE = `10日22時からリモート飲み会しよう。\n必要なものは自宅に届けてある。`;
