import Head from "next/head"
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
  <>
    <Head>
      <title>Free YouTube Title Generator | Nepez</title>
      <meta 
        name="description" 
        content="Generate high-converting YouTube titles instantly with our free YouTube Title Generator. Boost your CTR and grow your channel today."
      />
    </Head>

    <div style={{maxWidth: "800px", margin: "auto", padding: "40px"}}>
  
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
<div style={{marginTop: "60px"}}>
  <h2>How to Use This YouTube Title Generator</h2>
  <p>
    Enter your main keyword, click generate, and get optimized YouTube titles
    designed to increase click-through rate and engagement.
  </p>

  <h2>Why YouTube Titles Matter</h2>
  <p>
    A powerful YouTube title improves visibility, ranking, and CTR.
    Our free tool helps creators craft attention-grabbing titles instantly.
  </p>

  <h2>Best Practices for YouTube Titles</h2>
  <ul>
    <li>Use numbers for higher CTR</li>
    <li>Include emotional triggers</li>
    <li>Keep titles under 60 characters</li>
    <li>Add your main keyword at the beginning</li>
  </ul>
</div>
