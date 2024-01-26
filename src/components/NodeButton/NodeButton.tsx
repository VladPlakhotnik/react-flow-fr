import { CompanyName, RoundBackground, ShadowButon } from './NodeButton.styles'
import { RiAccountCircleLine, RiBankLine } from 'react-icons/ri'

interface NodeButtonProps {
  type?: string
  label?: string
}

export const NodeButton: React.FC<NodeButtonProps> = ({ type, label }) => {
  return (
    <>
      {type === 'single' ? (
        <RoundBackground>
          {label === 'Wavestone' ? (
            <RiBankLine style={{ scale: '3' }} />
          ) : (
            <RiAccountCircleLine style={{ scale: '3' }} />
          )}
          <CompanyName>{label}</CompanyName>
        </RoundBackground>
      ) : (
        <RoundBackground>
          <ShadowButon>many</ShadowButon>
          <RiAccountCircleLine style={{ scale: '3' }} />
          <CompanyName>{label} ...</CompanyName>
        </RoundBackground>
      )}
    </>
  )
}
