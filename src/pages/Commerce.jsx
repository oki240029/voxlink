import LegalLayout from "../components/LegalLayout";

export default function Commerce() {
  return (
    <LegalLayout
      eyebrow="Specified Commercial Transactions Act"
      title="特定商取引法に基づく表記"
      lastUpdated="2026-06-15"
    >
      <p>
        特定商取引に関する法律 第11条に基づき、以下のとおり表記いたします。
      </p>

      <section>
        <table>
          <tbody>
            <tr>
              <th>事業者の名称</th>
              <td>VOXLINK Inc. (ヴォクスリンク株式会社)</td>
            </tr>
            <tr>
              <th>運営責任者</th>
              <td>代表取締役 (登記簿記載 / 請求により遅滞なく開示)</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                〒150-0002<br />
                東京都渋谷区渋谷○丁目○番○号
                <br />
                (請求により遅滞なく開示)
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                03-0000-0000<br />
                (請求により遅滞なく開示。電話によるお問い合わせは平日10:00–18:00)
              </td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>support@voxlink.example</td>
            </tr>
            <tr>
              <th>販売価格</th>
              <td>
                各料金プランページに記載のとおり。
                <ul>
                  <li>Free プラン: 0円 / 月</li>
                  <li>Pro プラン: 1,480円 / 月 (税込)</li>
                  <li>Team プラン: 4,980円 / 月 (税込)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>追加手数料等</th>
              <td>
                インターネット接続料金、通信料金等はお客様のご負担となります。
              </td>
            </tr>
            <tr>
              <th>支払方法</th>
              <td>
                クレジットカード (Visa / Mastercard / JCB / American Express / Diners)、
                Apple Pay、Google Pay、銀行振込 (Team プラン年払いのみ対応)
              </td>
            </tr>
            <tr>
              <th>支払時期</th>
              <td>
                月額プラン: お申込み時に初回課金、以降毎月同日に自動課金。
                <br />
                年額プラン: お申込み時に1年分を一括前払い。
              </td>
            </tr>
            <tr>
              <th>サービス提供時期</th>
              <td>
                お支払い手続完了後、ただちにアカウントへ機能が反映されます。
              </td>
            </tr>
            <tr>
              <th>キャンセル / 返金について</th>
              <td>
                デジタルサービスの性質上、原則として返金には応じかねます。<br />
                有料プランはいつでも解約可能で、次回課金日からの自動更新が停止します。
                既にお支払い済みの月額料金については、当月末まで引き続きご利用いただけます。
              </td>
            </tr>
            <tr>
              <th>動作環境</th>
              <td>
                <ul>
                  <li>OS: Windows 10/11、macOS 13 以降</li>
                  <li>ブラウザ: 最新版の Chrome / Edge / Safari / Firefox</li>
                  <li>その他: Discord アカウント、安定したインターネット回線</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>特別条件</th>
              <td>
                Team プランをご利用の法人様には、別途秘密保持契約・SLA を締結いただきます。
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/55">
        本ページは創業計画書 / プロトタイプ提示用のサンプル表記です。実事業化時には登記情報に基づき正式な記載へ更新します。
      </p>
    </LegalLayout>
  );
}
