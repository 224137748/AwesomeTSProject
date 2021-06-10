export type ScreensParamList = MainStackParamList &
  TabParamList &
  AuthStackParamList;

export type TabParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
  DiscoverScreen: undefined;
  ProfileScreen: undefined;
};

export type MainStackParamList = {
  TabNavigator: undefined;
  ReportListScreen: undefined;
  PostFeedScreen: undefined;
  FeedListScreen: {
    title: string;
    showMyself?: boolean;
  };
  WebScreen: {
    title?: string;
    uri: string;
  };
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: {
    settext: React.Dispatch<React.SetStateAction<string>>;
  };
};
