import { useSettings } from '../../atoms/settingsAtom'
import { Container, Box, Address } from './Sidebar.styles'
import { useDetails } from '../../api/settings.api'

export const Sidebar = () => {
  const { settings } = useSettings()
  const mockDetails = useDetails()
  const app = mockDetails.filter(infoTile => infoTile.id === settings.sidebarId)
  return (
    <Container>
      <Box>
        {app.map(infoCard => (
          <div key={`infoCardId-${infoCard.id}`}>
            <h2>Title: {infoCard.title}</h2>
            <h4>Description: {infoCard.description}</h4>
            <h5>Phone: {infoCard.phone}</h5>
            <Address>
              <p>Street address: {infoCard.address.stretAddress}</p>
              <p>City: {infoCard.address.city}</p>
              <p>State: {infoCard.address.state}</p>
              <p>Timezone: {infoCard.address.timezone}</p>
              <p>Zipcode: {infoCard.address.zipcode}</p>
            </Address>
          </div>
        ))}
      </Box>
    </Container>
  )
}
