import { RoutesSwitch } from './app/routes';
import { Layout } from './features/Layout/ui/Layout';

import { Button } from './components/ui/Button/Button';

function App() {
  return (
    <Layout>
      <RoutesSwitch />

      <div className="space-y-4 p-4">
        {/* Default Button */}
        <Button>Default Button</Button>
        <Button disabled>Default Button</Button>

        {/* Secondary Button */}
        <Button variant="secondary">Secondary Button</Button>

        {/* Large Button */}
        <Button size="full" disabled>
          Large Disabled Button
        </Button>
        <Button size="full">Large Button</Button>

        <Button variant="secondary" size="lg">
          Sign in
        </Button>
      </div>
    </Layout>
  );
}

export default App;
