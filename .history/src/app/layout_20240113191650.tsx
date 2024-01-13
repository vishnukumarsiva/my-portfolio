"use client"

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <BaseProvider>
          <AppStyle />
          {children}
        </BaseProvider>
      </body>
    </html>
  )
}
