import { RoutesSwitch } from './app/routes';
import { Layout } from './features/Layout/ui/Layout';

import Button from './shared/ui-kit/Button/Button';

function App() {
  return (
    <Layout>
      <RoutesSwitch />

      <Button
        variant="primary"
        size="sm"
        onClick={() => alert('Primary Small')}
      >
        Primary Small
      </Button>
      <Button
        variant="secondary"
        size="md"
        onClick={() => alert('Secondary Medium')}
      >
        Secondary Medium
      </Button>
      <Button variant="danger" size="lg" disabled>
        Danger Large (Disabled)
      </Button>
    </Layout>
  );
}

export default App;
