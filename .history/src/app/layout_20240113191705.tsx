"use client"

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
