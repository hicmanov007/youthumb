import { useState } from "react"

export default function YouTubeTitleGenerator() {
  const [keyword, setKeyword] = useState("")
  const [titles, setTitles] = useState([])

  const generateTitles = () => {
    if (!keyword) return

    setTitles([
      `How to Master ${keyword} in 2026`,
      `10 Secrets About ${keyword} Nobody Tells You`,
      `The Ultimate Guide to ${keyword}`,
      `Why ${keyword} is Changing Everything`,
      `${keyword}: Beginner to Pro Tutorial`
    ])
  }

  return (
    <div style={{maxWidth: "800px", margin: "auto", padding: "40px"}}>
      <h1>YouTube Title Generator</h1>

      <input
        type="text"
        placeholder="Enter your keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{padding: "10px", width: "70%", marginRight: "10px"}}
      />

      <button onClick={generateTitles} style={{padding: "10px"}}>
        Generate
      </button>

      <div style={{marginTop: "30px"}}>
        {titles.map((title, i) => (
          <div key={i} style={{marginBottom: "10px"}}>
            {title}
          </div>
        ))}
      </div>
    </div>
  )
}
