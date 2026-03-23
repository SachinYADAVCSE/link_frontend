export default function HeadingBlock({ block }) {
  const styles = block.styles || {};

  return (
    <div
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        textAlign: styles.textAlign,
        fontFamily: styles.fontFamily,

        borderRadius: styles.borderRadius,
        borderWidth: styles.borderWidth,
        borderColor: styles.borderColor,
        borderStyle: styles.borderWidth ? "solid" : undefined,
        padding: 10
      }}
    >
      {block.content?.text || "Heading"}
    </div>
  );
}