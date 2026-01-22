export default function Footer() {
  return (
    <footer style={{
      marginTop: "60px",
      padding: "20px",
      borderTop: "1px solid #eaeaea",
      textAlign: "center",
      fontSize: "14px"
    }}>
      <p>
        © {new Date().getFullYear()} Nepez ·
        <a href="/about" style={{ marginLeft: "8px" }}>About Us</a>
      </p>

      <p>
        Business Email: <a href="mailto:contact@nepez.com">contact@nepez.com</a>
      </p>
    </footer>
  );
}
