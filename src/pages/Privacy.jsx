import LegalLayout from "../components/LegalLayout";

const TOC = [
  { id: "p1", label: "1. 取得する情報" },
  { id: "p2", label: "2. 利用目的" },
  { id: "p3", label: "3. 音声データの取扱い" },
  { id: "p4", label: "4. 第三者提供" },
  { id: "p5", label: "5. 委託" },
  { id: "p6", label: "6. 保管期間" },
  { id: "p7", label: "7. Cookie 等の利用" },
  { id: "p8", label: "8. 開示・訂正・削除請求" },
  { id: "p9", label: "9. 安全管理措置" },
  { id: "p10", label: "10. お問い合わせ窓口" },
];

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="プライバシーポリシー"
      lastUpdated="2026-06-15"
      toc={TOC}
    >
      <p>
        VOXLINK Inc. (以下「当社」といいます) は、AIリアルタイム音声翻訳サービス「VOXLINK」
        の運営にあたって、利用者の個人情報および音声データの保護を極めて重要な責務と認識しています。
        本ポリシーは、当社が取得する情報の種類、利用目的、第三者提供の条件等を明らかにするものです。
      </p>

      <section id="p1">
        <h2><span className="num">01</span>取得する情報</h2>
        <ul>
          <li><strong>アカウント情報</strong>: メールアドレス、表示名、パスワード (暗号化保存)、Discord連携時のユーザーID</li>
          <li><strong>支払情報</strong>: 決済代行会社経由で取扱う、カード情報の一部 (下4桁等)・課金履歴</li>
          <li><strong>音声データ</strong>: 翻訳の対象として一時的に取得する音声ストリーム</li>
          <li><strong>テキストデータ</strong>: 翻訳結果として生成された字幕テキスト・チャットログ</li>
          <li><strong>利用状況</strong>: ログイン履歴、機能の利用ログ、エラーレポート、デバイス情報、IPアドレス</li>
          <li><strong>Cookie 等</strong>: 認証維持、利用状況解析のためのCookie・ローカルストレージ</li>
        </ul>
      </section>

      <section id="p2">
        <h2><span className="num">02</span>利用目的</h2>
        <ul>
          <li>本サービスの提供、認証、課金処理</li>
          <li>翻訳品質、ゲーム用語辞書、AI音声モデルの改善</li>
          <li>不正利用の検知、セキュリティ確保</li>
          <li>ユーザーサポート、お問い合わせ対応</li>
          <li>新機能・キャンペーンのお知らせ (オプトアウト可能)</li>
        </ul>
      </section>

      <section id="p3">
        <h2><span className="num">03</span>音声データの取扱い</h2>
        <p>
          音声データはリアルタイム翻訳の処理にのみ使用し、原則として翻訳完了後ただちにメモリ上から破棄されます。
        </p>
        <ul>
          <li>音声ストリームは TLS 1.3 で暗号化された通信経路でのみ送受信されます。</li>
          <li>翻訳精度向上のためにモデル学習に利用する場合は、必ず話者の特定が不可能となる形に匿名化したうえで使用します。</li>
          <li>利用者は、アカウント設定からモデル学習へのデータ提供を「いつでもオプトアウト」できます。</li>
          <li>13歳未満の話者の音声と判定された場合は、当該データを学習用途には使用しません。</li>
        </ul>
      </section>

      <section id="p4">
        <h2><span className="num">04</span>第三者提供</h2>
        <p>
          当社は、以下の場合を除き、利用者の同意なく個人情報を第三者に提供することはありません。
        </p>
        <ul>
          <li>法令に基づく場合 (裁判所・警察等からの開示要請を含む)</li>
          <li>人の生命、身体または財産の保護のために必要であって、本人の同意を得ることが困難な場合</li>
          <li>合併、会社分割、事業譲渡その他の事由により事業の承継があった場合</li>
        </ul>
      </section>

      <section id="p5">
        <h2><span className="num">05</span>委託</h2>
        <p>
          当社は、本サービス提供のため、以下の業務を信頼できる第三者に委託することがあります。
          委託先には、本ポリシーと同等以上の安全管理措置を求め、適切に監督します。
        </p>
        <ul>
          <li>クラウドインフラ (Amazon Web Services / Google Cloud / Cloudflare)</li>
          <li>決済代行 (Stripe 株式会社)</li>
          <li>カスタマーサポートツール (Intercom 等)</li>
          <li>アクセス解析 (Google Analytics 等)</li>
        </ul>
      </section>

      <section id="p6">
        <h2><span className="num">06</span>保管期間</h2>
        <table>
          <tbody>
            <tr><th>音声データ</th><td>翻訳処理完了後ただちに削除 (最大保持: 30秒)</td></tr>
            <tr><th>字幕テキスト</th><td>セッション終了後30日間、その後自動削除</td></tr>
            <tr><th>アカウント情報</th><td>退会から90日経過後に削除</td></tr>
            <tr><th>課金履歴</th><td>会計法令に基づき7年間保管</td></tr>
            <tr><th>アクセスログ</th><td>取得から180日間</td></tr>
          </tbody>
        </table>
      </section>

      <section id="p7">
        <h2><span className="num">07</span>Cookie 等の利用</h2>
        <p>
          本サービスでは、利用者の認証維持・利便性向上・利用状況解析のためにCookie および類似技術を使用します。
          ブラウザの設定によりCookieを無効にできますが、その場合一部機能が利用できなくなる場合があります。
        </p>
      </section>

      <section id="p8">
        <h2><span className="num">08</span>開示・訂正・削除請求</h2>
        <p>
          利用者はいつでも、自己の個人情報の開示、訂正、利用停止、削除を当社に請求することができます。
          請求は本ポリシー末尾の問い合わせ窓口宛に、本人確認書類の写しを添えてお申し付けください。
          法令に基づき適切に対応いたします。
        </p>
      </section>

      <section id="p9">
        <h2><span className="num">09</span>安全管理措置</h2>
        <ul>
          <li>全通信は TLS 1.3 による暗号化</li>
          <li>パスワードは Argon2id によるハッシュ化</li>
          <li>アクセス制御 (RBAC) と最小権限の原則</li>
          <li>第三者によるセキュリティ監査を年1回以上実施</li>
          <li>社内における個人情報保護研修の定期実施</li>
        </ul>
      </section>

      <section id="p10">
        <h2><span className="num">10</span>お問い合わせ窓口</h2>
        <table>
          <tbody>
            <tr><th>事業者名</th><td>VOXLINK Inc.</td></tr>
            <tr><th>個人情報保護管理者</th><td>CPO 室</td></tr>
            <tr><th>連絡先</th><td>privacy@voxlink.example</td></tr>
          </tbody>
        </table>
      </section>

      <p className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/55">
        制定日: 2026年4月1日 / 最終改定日: 2026年6月15日
      </p>
    </LegalLayout>
  );
}
