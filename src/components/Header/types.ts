import { ThemeName } from '../../styles/themes'

export interface HeaderProps {
  themeName: ThemeName
  setThemeName: (themeName: ThemeName) => void
}
