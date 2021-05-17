// https://dev.to/dlw/multiple-themes-for-next-js-with-next-themes-tailwind-css-and-css-custom-properties-2knp
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const themes = [{ name: 'Light' }, { name: 'Dark' }]

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="theme-changer">
      <label htmlFor="theme-select" className="theme-select-label">
        Choose theme:{' '}
      </label>
      <select
        name="theme"
        id="theme-select"
        onChange={(e) => setTheme(e.currentTarget.value)}
        value={theme}
        className="theme-select"
      >
        {themes.map((t) => (
          <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ThemeChanger
