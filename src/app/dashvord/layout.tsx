export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      <h2>Layout Header</h2>
        <section>
          {/* Include shared UI here e.g. a header or sidebar */}
          <nav></nav>
          {children}
        </section>
      <h2>Layout Footer</h2>
    </div>
  )
}