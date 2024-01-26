import { atom, useRecoilState } from 'recoil'

export interface SettingsType {
  sidebarId: string
}

const settingsDefaultState = atom<SettingsType>({
  key: 'settings',
  default: {
    sidebarId: 'wavestone_id',
  },
})

export const useSettings = () => {
  const [settings, setSettings] = useRecoilState(settingsDefaultState)

  const updateSidebarId = (value: string) => {
    setSettings(prev => ({
      ...prev,
      sidebarId: value,
    }))
  }

  return { settings, setSettings, updateSidebarId }
}
