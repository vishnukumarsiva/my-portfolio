"use client"

import {PropsWithChildren} from "react"
import {BaseProvider} from "@custom/ui"
import {AppStyle} from "atoms"

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
