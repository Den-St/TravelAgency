import { RoutesSwitch } from './app/routes';
import { Input } from './components/ui/Input/input';
import { Layout } from './features/Layout/ui/Layout';

function App() {
  return (
    <Layout>
      <div className="flex flex-col gap-2 w-[300px] m-[50px]">
        <Input />
        <Input variant={'error'} type={'password'} isHidden />
      </div>
      <RoutesSwitch />
    </Layout>
  );
}

export default App;
