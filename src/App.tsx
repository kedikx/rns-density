import { AppStateProvider } from './AppState';
import { AppScreen } from './AppScreen';

function App() {

  return (
    <AppStateProvider>
      <AppScreen />
    </AppStateProvider>
  );
}

export { App };
