import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { ProfileResponse } from '../services/models/ProfileModel';

// Context provider children
interface PropsToContextProvider {
  children: ReactNode;
}

// Keys needed in global context
type GlobalData = {
  profile: ProfileResponse | null;
};

// Setters for keys in global context
interface CreateContextProps extends GlobalData {
  setProfile?: Dispatch<SetStateAction<ProfileResponse | null>>;
}

export const GlobalContext = createContext<CreateContextProps>({
  profile: null,
});

const GlobalContextProvider = (props: PropsToContextProvider) => {
  const [profile, setProfile] = useState<ProfileResponse | null>(null);

  const val: CreateContextProps = {
    profile,
    setProfile,
  };
  return <GlobalContext.Provider value={val}> {props.children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
