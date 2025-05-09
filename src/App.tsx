import { RoutesSwitch } from './app/routes';
import { Layout } from './features/Layout/ui/Layout';

function App() {
  return (
    <Layout>
      <RoutesSwitch />
    </Layout>
  );
}

export default App;
