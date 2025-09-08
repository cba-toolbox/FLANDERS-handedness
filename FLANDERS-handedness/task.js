/* 課題に関するコードを以下に書く */
/* 件法の設定 */
const scale = {
    '左': 1,
    'どちらも': 2,
    '右': 3,
  };
/* 質問紙の設定 */
const likert_page = {
    type: jsPsychSurveyMatrixLikert,
    questions: [
      {prompt: '文字を書くとき，ペンをどちらの手で持ちますか？', required: true, name: 'item1'},
      {prompt: '食事のとき，スプーンをどちらの手で持ちますか？', required: true, name: 'item2'},
      {prompt: '歯をみがくとき，歯ブラシをどちらの手で持ちますか？', required: true, name: 'item3'},
      {prompt: 'マッチをするとき，マッチの軸をどちらの手で持ちますか？', required: true, name: 'item4'},
      {prompt: '消しゴムで文字を消すとき，消しゴムをどちらの手で持って消しますか？', required: true, name: 'item5'},
      {prompt: '縫いものをするとき，針をどちらの手で持って使いますか？', required: true, name: 'item6'},
      {prompt: 'パンにバターをぬるとき，ナイフをどちらの手で持ちますか？', required: true, name: 'item7'},
      {prompt: 'クギを打つとき，カナヅチをどちらの手で持ちますか？', required: true, name: 'item8'}, 
      {prompt: 'リンゴの皮をむくとき，皮むき器をどちらの手で持ちますか？', required: true, name: 'item9'},
      {prompt: '絵を描くとき，ペンや筆をどちらの手で持ちますか？', required: true, name: 'item10'}
    ],
    randomize_question_order: false,
    scale: scale,
    column_header_alignment: 'bottom', 
    preamble: '<div style="text-align: left;">これからさまざまな場面で，あなたが左右どちらの手を使うか質問します。<br>下に示した 10項目のそれぞれについて表の右はしにある選択肢「左」，「どちらも」，「右」の一つにマル（○）をつけて回答してください。<br>「どちらも」の選択肢は，左右の手を全く同じくらい使う場合のみ選択してください。<br>すべての項目に回答してください。<br>10項目のなかには，あなたにとってほとんど経験がないことがあるかもしれません。<br>たとえ経験がなくとも，その場面や課題を想像し回答してください。</div>',
    cellpadding: 16,
    button_label: '次へ',
    autocomplete: true
  };

/*タイムラインの設定*/
const timeline = [fullscreen,likert_page];
