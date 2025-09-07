"use client";

import { useState } from "react";
import { useI18n } from "../lib/i18n";

export default function ProductSection() {
  const [selectedSize, setSelectedSize] = useState("2g");
  const { t } = useI18n();
  const tx = (k, fb) => {
    const v = t ? t(k) : undefined;
    return v && v !== k ? v : fb;
  };

  // （※ products は現状UIで未使用なのでそのまま保持。必要になったら tx で差し替えてね）
  const products = [
    {
      size: "1g",
      title: tx("product.cards.0.title", "お試しサイズ"),
      description: tx("product.cards.0.description", "1g - 約30日分"),
      features: [
        tx("product.cards.0.features.0", "マザーベジタブル 1g配合"),
        tx("product.cards.0.features.1", "約30日分"),
        tx("product.cards.0.features.2", "携帯に便利なコンパクトケース")
      ],
      originalPrice: tx("product.cards.0.originalPrice", "¥3,300"),
      price: tx("product.cards.0.price", "¥2,200"),
      popular: false
    },
    {
      size: "2g",
      title: tx("product.cards.1.title", "スタンダードサイズ"),
      description: tx("product.cards.1.description", "2g - 約60日分"),
      features: [
        tx("product.cards.1.features.0", "マザーベジタブル 2g配合"),
        tx("product.cards.1.features.1", "約60日分"),
        tx("product.cards.1.features.2", "携帯に便利なコンパクトケース")
      ],
      originalPrice: tx("product.cards.1.originalPrice", "¥5,500"),
      price: tx("product.cards.1.price", "¥3,300"),
      popular: true
    },
    {
      size: "5g",
      title: tx("product.cards.2.title", "お得な大容量"),
      description: tx("product.cards.2.description", "5g - 約150日分"),
      features: [
        tx("product.cards.2.features.0", "マザーベジタブル 5g配合"),
        tx("product.cards.2.features.1", "約150日分"),
        tx("product.cards.2.features.2", "特別な大容量ラグジュアリーケース")
      ],
      originalPrice: tx("product.cards.2.originalPrice", "¥8,800"),
      price: tx("product.cards.2.price", "¥5,500"),
      popular: false
    }
  ];

  const ingredient = {
    heading: tx("product.labels.mainIngredient", "主成分"),
    name: tx("product.ingredient.name", "マザーベジタブル"),
    description: tx("product.ingredient.description", "35億年前に誕生した地球最初の生命体"),
    details: tx("product.ingredient.details", "独自の吸着機能により、24時間美しさを保ちます。")
  };

  const effects = [
    {
      title: tx("product.effects.0.title", "化粧崩れ防止効果"),
      description: tx("product.effects.0.description", "汗やテカリをしっかり吸着し、崩れを防ぎます")
    },
    {
      title: tx("product.effects.1.title", "透明感のある陶器肌"),
      description: tx("product.effects.1.description", "細かい粒子が肌を整え、美しい陶器肌を再現")
    },
    {
      title: tx("product.effects.2.title", "トーンアップ効果"),
      description: tx("product.effects.2.description", "肌を明るく見せ、自然な輝きを与えます")
    },
    {
      title: tx("product.effects.3.title", "スキンケア効果"),
      description: tx("product.effects.3.description", "肌を保護しながら美しく整えます")
    }
  ];

  return (
    <section
      className="sec"
      style={{ padding: "0.01rem 0.1rem 2.6rem 0.01rem", backgroundColor: "#f9fafb" }}
    >
      <div className="haba" style={{ maxWidth: "1280px", margin: "120px auto 0 auto", padding: "0 1rem" }}>

        {/* 成分・効果 */}
        <div style={{ marginTop: "2rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 300,
              marginBottom: "3rem",
              textAlign: "center",
              color: "#2d2d2d",
              letterSpacing: "0.05em"
            }}
          >
            {tx("product.labels.section", "成分・効果")}
          </h3>

          <div style={{ maxWidth: "800px", margin: "0 auto 4rem" }}>
            <div
              style={{
                background: "linear-gradient(to bottom right, #ffffff, #f8f8f8)",
                borderRadius: "1.5rem",
                padding: "2rem",
                border: "1px solid rgba(184, 134, 11, 0.3)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(to bottom right, rgba(184,134,11,0.2), rgba(212,196,176,0.2))",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto 1.5rem"
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: "48px", height: "48px", color: "#b8860b" }}>
                    <path
                      fill="currentColor"
                      d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"
                    />
                  </svg>
                </div>
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "#b8860b",
                    marginBottom: "0.3rem"
                  }}
                >
                  {ingredient.heading}
                </h4>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "#2d2d2d",
                    marginBottom: "0.5rem"
                  }}
                >
                  {ingredient.name}
                </p>
                <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1rem" }}>
                  {ingredient.description}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#777",
                    lineHeight: "1.7",
                    maxWidth: "640px",
                    margin: "0 auto"
                  }}
                >
                  {ingredient.details}
                </p>
              </div>
            </div>
          </div>

          {/* 期待できる効果カード */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "1.25rem",
              padding: "2rem",
              maxWidth: "1224px",
              margin: "0 auto",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
            }}
          >
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: 300,
                color: "#2d2d2d",
                marginBottom: "1.5rem",
                textAlign: "center"
              }}
            >
              {tx("product.labels.expectedEffects", "期待できる効果")}
            </h4>

            <div
              className="effects-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem"
              }}
            >
              {effects.map((effect, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "0.3rem",
                    borderRadius: "1rem",
                    transition: "background-color 0.3s ease"
                  }}
                >
                  <span
                    style={{
                      width: "32px",
                      height: "32px",
                      background:
                        "linear-gradient(to bottom right, rgba(184,134,11,0.2), rgba(212,196,176,0.2))",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem"
                    }}
                  >
                    <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", color: "#b8860b" }}>
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "#b8860b",
                        marginBottom: "0.25rem"
                      }}
                    >
                      {effect.title}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "#555" }}>{effect.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 追加ブロック 1 */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "1.25rem",
              padding: "2rem",
              maxWidth: "1224px",
              margin: "80px auto 80px auto",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
            }}
          >
            <h4
              className="add-title"
              style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#b8860b",
                marginBottom: "1.5rem",
                textAlign: "center"
              }}
            >
              {tx("product.extra1.title", "「顔のテカリを消す」効果は")}<span className="sp" />
              {tx("product.extra1.titleTail", "マザベジ形状ならでは")}
            </h4>

            <div
              className="add-flex"
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
                marginTop: "2rem"
              }}
            >
              {/* 左 */}
              <div className="one-b">
                <p
                  className="add-title"
                  style={{ fontSize: "1.2rem", fontWeight: 600, color: "black", marginBottom: "1", textAlign: "center" }}
                >
                  {tx("product.extra1.left.title", "皮脂の油分がある状態")}
                </p>
                <img
                  className="spwidth"
                  src="/doc1.jpg"
                  alt="doc1"
                  loading="lazy"
                  style={{ width: "98%", height: "auto", borderRadius: "0.75rem" }}
                />
                <div style={{ textAlign: "center" }}>
                  <img
                    className="spwidth"
                    src="/doc1-a.jpg"
                    alt="doc1-a"
                    loading="lazy"
                    style={{ width: "86%", height: "auto", borderRadius: "0.75rem" }}
                  />
                </div>
                <div className="spwidth" style={{ width: "86%", margin: "30px auto 0 auto" }}>
                  <p
                    className="add-discription"
                    style={{ fontSize: "1rem", fontWeight: 400, color: "black", marginBottom: "1", textAlign: "left" }}
                  >
                    {tx("product.extra1.left.p1", "肌のテカリの原因は、皮脂の油分が同じ形状であり、同じ方向に光が跳ね返るため")}
                  </p>
                  <p
                    className="add-discription2"
                    style={{ marginTop: "30px", fontSize: "1rem", fontWeight: 400, color: "black", marginBottom: "1", textAlign: "left" }}
                  >
                    <span style={{ fontWeight: "600" }}>{tx("product.extra1.left.riskLabel", "【ケミカルシリカを塗るリスク】")}</span>
                    <br />
                    {tx("product.extra1.left.p2", "薬品残りがあり肌のアレルギーリスクがあるほか、形状も同じなので肌に塗るとテカリが出る")}
                  </p>
                </div>
              </div>

              {/* 右 */}
              <div className="one-b">
                <p
                  className="add-title"
                  style={{ fontSize: "1.2rem", fontWeight: 600, color: "black", marginBottom: "1", textAlign: "center" }}
                >
                  {tx("product.extra1.right.title", "マザベジシリカ塗布後")}
                </p>
                <img
                  className="spwidth"
                  src="/doc2.jpg"
                  alt="doc2"
                  loading="lazy"
                  style={{ width: "98%", height: "auto", borderRadius: "0.75rem" }}
                />
                <div style={{ textAlign: "center" }}>
                  <img
                    className="spwidth"
                    src="/doc2-b.jpg"
                    alt="doc2-b"
                    loading="lazy"
                    style={{ width: "86%", height: "auto", borderRadius: "0.75rem" }}
                  />
                </div>
                <div className="spwidth" style={{ width: "86%", margin: "30px auto 0 auto" }}>
                  <p
                    className="add-discription"
                    style={{ fontSize: "1rem", fontWeight: 400, color: "black", marginBottom: "1", textAlign: "left" }}
                  >
                    {tx("product.extra1.right.p1", "マザベジシリカは、天然の植物の形のためパウダーすべてに個性があり、微かな個性差がある。そのため、光の跳ね返りもランダムに")}
                  </p>
                  <p
                    className="add-discription2"
                    style={{ marginTop: "30px", fontSize: "1rem", fontWeight: 400, color: "black", marginBottom: "1", textAlign: "left" }}
                  >
                    <span style={{ fontWeight: "600" }}>{tx("product.extra1.right.benefitLabel", "【マザベジシリカを塗るメリット】")}</span>
                    <br />
                    {tx("product.extra1.right.p2", "皮脂の油分を吸い取り、空気中の水分もキャッチ。潤いもあるのにテカらず、抗酸化作用で肌も清潔に")}
                  </p>
                </div>
              </div>
            </div>

            <p
              className="add-title"
              style={{ fontSize: "1.5rem", fontWeight: 600, color: "black", marginTop: "30px", marginBottom: "1", textAlign: "center" }}
            >
              {tx("product.extra1.footer", "さっと10秒塗るだけで清潔感をゲット→デートや商談前の必須アイテムに")}
            </p>
          </div>

          {/* 追加ブロック 2 */}
          <div
            className="spbottom"
            style={{
              backgroundColor: "#fff",
              borderRadius: "1.25rem",
              padding: "2rem",
              maxWidth: "1224px",
              margin: "80px auto 80px auto",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
            }}
          >
            <h4
              className="add-title"
              style={{ fontSize: "1.3rem", fontWeight: 600, color: "#b8860b", marginBottom: "1.5rem", textAlign: "center" }}
            >
              {tx("product.extra2.title", "睡眠前の「すっぴん」も")}<span className="sp" />
              {tx("product.extra2.titleTail", "トーンアップでナチュラルに")}
            </h4>

            <div
              className="add-flex"
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
                marginTop: "2rem"
              }}
            >
              {/* 左 */}
              <div>
                <p
                  className="add-title"
                  style={{ fontSize: "1.2rem", fontWeight: 600, color: "black", marginBottom: "1", textAlign: "center" }}
                >
                  {tx("product.extra2.left.title", "シワや毛穴がある状態")}
                </p>
                <img
                  src="/doc3.jpg"
                  alt="doc3"
                  loading="lazy"
                  style={{ width: "98%", height: "auto", borderRadius: "0.75rem" }}
                />
                <div className="spwidth" style={{ width: "86%", margin: "30px auto 0 auto" }}>
                  <p
                    className="add-discription"
                    style={{ fontSize: "1rem", fontWeight: 400, color: "black", marginBottom: "1", textAlign: "left" }}
                  >
                    {tx("product.extra2.left.p1", "寝る前などのすっぴんの際にはどうしてもシワや毛穴が目立ってしまう")}
                  </p>
                  <p
                    className="add-discription2"
                    style={{ marginTop: "20px", fontSize: "1rem", fontWeight: 400, color: "black", marginBottom: "1", textAlign: "left" }}
                  >
                    <span style={{ fontWeight: "600" }}>{tx("product.extra2.left.riskLabel", "【ファンデーションを塗ると割れることも】")}</span>
                    <br />
                    {tx("product.extra2.left.p2", "寝る前に使用できないだけでなく、ファンデーションは粘土のようにまとまっているため、乾くと割れる")}
                  </p>
                </div>
              </div>

              {/* 右 */}
              <div className="one-b">
                <p
                  className="add-title"
                  style={{ fontSize: "1.2rem", fontWeight: 600, color: "black", marginBottom: "1", textAlign: "center" }}
                >
                  {tx("product.extra2.right.title", "マザベジシリカ塗布後")}
                </p>
                <img
                  src="/doc4.jpg"
                  alt="doc4"
                  loading="lazy"
                  style={{ width: "98%", height: "auto", borderRadius: "0.75rem" }}
                />
                <div className="spwidth" style={{ width: "86%", margin: "30px auto 0 auto" }}>
                  <p
                    className="add-discription"
                    style={{ fontSize: "1rem", fontWeight: 400, color: "black", marginBottom: "1", textAlign: "left" }}
                  >
                    {tx("product.extra2.right.p1", "寝る前にも使えるマザベジシリカは、シワや毛穴にも入り込んで目立たせない")}
                  </p>
                  <p
                    className="add-discription2"
                    style={{ marginTop: "20px", fontSize: "1rem", fontWeight: 400, color: "black", marginBottom: "1", textAlign: "left" }}
                  >
                    <span style={{ fontWeight: "600" }}>{tx("product.extra2.right.benefitLabel", "【マザベジシリカを塗るメリット】")}</span>
                    <br />
                    {tx("product.extra2.right.p2", "気になるところを隠しながらお肌を清潔に。またシリカは分かれているので「割れ」もない")}
                  </p>
                </div>
              </div>
            </div>

            <p
              className="add-title"
              style={{ fontSize: "1.5rem", fontWeight: 600, color: "black", marginTop: "30px", marginBottom: "1", textAlign: "center" }}
            >
              {tx("product.extra2.footer", "寝る前だけでなく、化粧のできない")}<span className="sp" />
              {tx("product.extra2.footerTail", "医療や介護でも活躍。24時間綺麗に")}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sp { display: none; }
        @media (max-width: 768px) {
          .haba { margin: 60px auto 0 auto !important; }
          h3 { font-size: 1.36rem !important; }
          :global(.effects-grid) { grid-template-columns: 1fr !important; }
          .add-title { font-size: 1rem !important; }
          .add-flex { display: block !important; }
          .sp { display: block; }
          .one-b { margin-top: 40px !important; }
          .sec { padding-bottom: 1px !important; }
          .spwidth { width: 100% !important; }
          .spbottom { margin: 70px auto 30px auto !important; }
        }
      `}</style>
    </section>
  );
}
