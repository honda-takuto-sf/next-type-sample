export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <h2>Layout Header</h2>
        <main>
        <div style={{ border: '1px solid #ccc', padding: '20px' }}>
          <section>
            <nav></nav>
            {children}
          </section>
        </div>
        </main>
        <h2>Layout Footer</h2>
      </body>
    </html>
  )
}