import React from 'react'
import { createContext, useContext } from 'react'

const ThemeToggler = createContext({
    theme: 'dark',
    darktheme : () => { },
    lightTheme : () =>{}
})

export const ThemeTogglerProvider = ThemeToggler.Provider;

export function useThemeToggeler() {
    return useContext(ThemeToggler)
}