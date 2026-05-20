function InlineStyleComponent() {
  const boxStyle = {
    backgroundColor: "#ffd166",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "bold"
  };

  return <div style={boxStyle}>Inline Styled Component</div>;
}

export default InlineStyleComponent;