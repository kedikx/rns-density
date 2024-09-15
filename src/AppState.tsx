import {ReactNode, createContext, useContext, useEffect, useReducer} from 'react';
import {AppState, AppStateStatus, useWindowDimensions} from 'react-native';

interface ProvidedValue {
  render: number
}

export const AppStateContext = createContext<ProvidedValue>({render: -1});

interface Props {
  children?: ReactNode;
}

export function AppStateProvider(props: Props) {
  const [render, forceUpdate] = useReducer(x => x + 1, 0);
  const {scale, fontScale, width, height} = useWindowDimensions();

  useEffect(() => {
    const handleChange = (state: AppStateStatus) => {
      console.debug('app state', state);
      forceUpdate();
    };
    const subscription = AppState.addEventListener('change', handleChange);
    return () => subscription.remove();
  }, []);

  useEffect(()=>{
    console.debug('app dims', scale, fontScale, width, height);
    forceUpdate();
  }, [scale, fontScale, width, height, forceUpdate]);

  useEffect(()=>{
    console.debug('app render', render);
  }, [render]);
  const value = {render};
  return <AppStateContext.Provider value={value}>{props.children}</AppStateContext.Provider>;
}

export function useAppState() {
  return useContext(AppStateContext);
}
