import { ThemeProvider as NextThemesProvider, ThemeProviderProps as NextThemeProviderProps } from "next-themes"

interface ThemeProviderProps extends NextThemeProviderProps {}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}
