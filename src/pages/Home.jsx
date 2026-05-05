import { useState } from 'react'

function Home() {
  const [name, setName] = useState('')

  return (
    <main className="page-content">
      <h1>Welcome Home</h1>
      <p>Enter your name below and see it update live.</p>
      <label className="field-label" htmlFor="name-input">
        Your name
      </label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name..."
        className="text-input"
      />
      <div className="live-preview">
        {name ? (
          <>
            <strong>Hello,</strong> {name}
          </>
        ) : (
          'Start typing to see your name appear here.'
        )}
      </div>
    </main>
  )
}

export default Home
