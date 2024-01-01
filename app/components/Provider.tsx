/** The Provider file will be used to store the user's preference. */

"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Provider({children} : {children : ReactNode}) {
    return <ThemeProvider>{children}</ThemeProvider>
}