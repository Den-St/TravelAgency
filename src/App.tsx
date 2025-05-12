import { RoutesSwitch } from './app/routes';
// import { ToursOverview } from './components/Tours/components/ToursOverview';
import { Layout } from './components/ui/Layout/ui/Layout';

function App() {
  return (
    <Layout>
      {/* <ToursOverview/> */}
      <RoutesSwitch />
    </Layout>
  );
}

export default App;
