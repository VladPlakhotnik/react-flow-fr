import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import { RecoilRoot } from 'recoil'
import GlobalStyle from './styles/globalStyles.ts'
import { ReactFlowProvider } from 'reactflow'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactFlowProvider>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </ReactFlowProvider>,
)
