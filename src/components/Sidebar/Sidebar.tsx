import { useSettings } from '../../atoms/settingsAtom'
import { Container } from './Sidebar.styles'
import { mockDetails } from '../../utilities/mockDetails'

export const Sidebar = () => {
  const { settings } = useSettings()
  const app = mockDetails.filter(infoTile => infoTile.id === settings.sidebarId)
  return (
    <Container>
      <p>Sidebar</p>
      {app.map(infoCard => (
        <div>
          <div>{infoCard.title}</div>
          <div>{infoCard.description}</div>
        </div>
      ))}
    </Container>
  )
}
