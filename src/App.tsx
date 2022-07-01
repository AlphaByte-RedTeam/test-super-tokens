import React, { FC } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import ThirdPartyEmailPassword, { Github, Google, Facebook, Apple } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

// Super Tokens API Documentation: https://supertokens.com/docs/thirdpartyemailpassword/quick-setup/frontend

SuperTokens.init({
  appInfo: {
    appName: "test-super-tokens",
    apiDomain: "http://localhost:8080",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Facebook.init(),
          Apple.init(),
        ]
      }
    }),
    Session.init()
  ]
})

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
      </Routes>
    </BrowserRouter>
  )
}

export default App;