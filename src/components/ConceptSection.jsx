"use client";
import { useI18n } from "../lib/i18n";

export default function ConceptSection() {
  const { t } = useI18n();
  const tx = (k, fb) => {
    const v = t ? t(k) : undefined;
    return v && v !== k ? v : fb;
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.header}>
            <p style={styles.label}>{tx("concept.label", "CONCEPT")}</p>
            <h2 style={styles.title}>
              {tx("concept.h1.part1", "35億年前から続く、")}
              <br />
              <span style={styles.goldText}>
                {tx("concept.h1.gold", "生命の力")}
              </span>
              {tx("concept.h1.part2", "を肌へ")}
            </h2>
            <div style={styles.separator} />
          </div>

          <div style={styles.contentWrapper}>
            <div style={styles.textGroup}>
              <p style={styles.paragraph}>
                {tx(
                  "concept.p1",
                  "Mother Vegetables Confidenceは、35億年前に誕生した地球最初の生命体を再現しました。私たちはそれを「マザーベジタブル」と呼んでいます。"
                )}
              </p>
              <p style={styles.subParagraph}>
                {tx(
                  "concept.p2",
                  "地球最初の生命の神秘をご自身の肌で感じてほしい。優れた密着力で日中の汗やベタつきを抑え、一日中サラサラで美しい肌を保ちます。"
                )}
              </p>
              <p style={styles.subParagraph}>
                {tx(
                  "concept.p3",
                  "医薬部外品原料規格をクリアした、肌に安心・安全なオーガニック成分。朝の5秒で、透明感のある陶器肌へ。"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: "5rem",
    paddingBottom: "6rem",
    backgroundColor: "#FAFAFA",
  },
  container: {
    maxWidth: "100%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  innerContainer: {
    maxWidth: "72rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  label: {
    fontSize: "0.875rem",
    color: "#4B5563",
    marginBottom: "1rem",
    letterSpacing: "0.2em",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 300,
    color: "#111827",
    marginBottom: "1.5rem",
    lineHeight: 1.4,
  },
  goldText: {
    background:
      "linear-gradient(135deg, #8B6914 0%, #B8860B 50%, #D4C4B0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  separator: {
    width: "5rem",
    height: "1px",
    backgroundColor: "#D4C4B0",
    margin: "0 auto",
  },
  contentWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
    maxWidth: "48rem",
    margin: "0 auto",
  },
  textGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    textAlign: "center",
  },
  paragraph: {
    fontSize: "1.125rem",
    color: "#374151",
    lineHeight: 1.8,
  },
  subParagraph: {
    fontSize: "1rem",
    color: "#4B5563",
    lineHeight: 1.8,
  },
};
