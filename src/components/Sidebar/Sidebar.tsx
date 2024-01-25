import { useSettings } from '../../atoms/settingsAtom'
import {
  Container,
  Box,
  Notification,
  Icon,
  BoxButtons,
  Button,
} from './Sidebar.styles'
import { useDetails } from '../../api/settings.api'
import { RiNavigationFill } from 'react-icons/ri'

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
            <div>
              <p>Street address: {infoCard.address.stretAddress}</p>
              <p>City: {infoCard.address.city}</p>
              <p>State: {infoCard.address.state}</p>
              <p>Timezone: {infoCard.address.timezone}</p>
              <p>Zipcode: {infoCard.address.zipcode}</p>
            </div>
            <Notification>
              <Icon>
                <RiNavigationFill style={{ color: 'blue', scale: '2' }} />
              </Icon>

              <span>Accéder à plus d'informations</span>
              <p>
                Cette version est limitée. Pour voir l'intégralité de la
                cartographie des entreprises et des dirigeants, faites évoluer
                votre offre.
              </p>
              <BoxButtons>
                <Button>Se connecter</Button>
                <Button>Découvrir</Button>
              </BoxButtons>
            </Notification>
          </div>
        ))}
      </Box>
    </Container>
  )
}
