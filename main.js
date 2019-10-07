/**
 * 課題1: Twitterのタイムラインのような配列を作る
 *   - 変数名はtweetsで配列とする
 *   - tweetsの中には複数のオブジェクトがある
 *     - 1個1個のオブジェクトはツイートを表す
 *     - 全部で2個のツイートオブジェクトを作る
 *   - ツイートオブジェクトは以下の情報を持つ
 *     - username : ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い。)
 *     - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 *     - replies : ツイートに対する返信が格納された(配列)
 *       - repliesに格納されている1個1個のデータもツイートオブジェクト
 *       - 2個のツイートはそれぞれ2個の返信ツイートを持つ
 *       - 返信ツイートは以下の情報を持つ
 *         - username : 返信ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い)
 *         - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 */
let tweets = [
    {username: "あああああ", text: "コメント１", replies: [{username: "いいいいい", text: "りぷらい１"}, {username: "ううううう", text: "りぷらい２"}]},
    {username: "かかかかか", text: "コメント２０", replies: [{username: "ききききき", text: "りぷらい２１"}, {username: "くくくくく", text: "りぷらい２２"}]}
    ];

/**
 * 課題2: 課題1で作ったtweetsの内容を全て表示する
 *   - forEachを使ってtweetsの以下の内容を1つずつconsole.logで出力する
 *     - username
 *     - text
 *     - replies
 *       - repliesの内容もforEachを使って全て表示する
 */
tweets.forEach((tweet) => {
    console.log("Tweet=======================")
    console.log(" User: ", tweet.username);
    console.log(" Text: ", tweet.text);
    tweet.replies.forEach((replie, index) => {
        console.log(`   Replie${index}**********************`)
        console.log("       User: ", replie.username);
        console.log("       Text: ", replie.text);
    });
    console.log("");
});