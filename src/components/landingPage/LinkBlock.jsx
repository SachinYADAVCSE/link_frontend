export default function LinkBlock({ block, theme }) {
  const styles = block.styles || {};

  return (
    <a
      href={block.content?.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",

        backgroundColor:
          styles.backgroundColor ?? theme?.backgroundColor,

        color:
          styles.color ?? theme?.textColor,

        fontSize: styles.fontSize,

        borderRadius: styles.borderRadius,
        borderWidth: styles.borderWidth,
        borderColor: styles.borderColor,
        textAlign: styles.textAlign,
        fontWeight: styles.fontWeight,
        borderStyle: styles.borderWidth ? "solid" : undefined,

        padding: 10,
        textDecoration: "none"
      }}
    >
      {block.content?.title || "Link"}
    </a>
  );
}