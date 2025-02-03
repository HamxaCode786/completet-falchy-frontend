import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from 'react-router-dom';
import { TransferProvider } from "./contextapi/transferservicecontext";
import "./i18n";
import TranslationProvider from "./contextapi/translationContext";
import SelectedCardProvider from "../src/contextapi/rentluxurycontext"; // Import the context provide
import { ScrollProvider } from "../src/contextapi/scrollContext";
import { CardProvider } from "../src/contextapi/cardcontext";
import { FormProvider } from "../src/contextapi/formContext";
import { BrandProvider } from "../src/contextapi/brandcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrandProvider>
    <FormProvider>
      <CardProvider>
        <ScrollProvider>
          <TranslationProvider>
            <SelectedCardProvider>
              <TransferProvider>
                <HashRouter>
                  <App />
                </HashRouter>
              </TransferProvider>
            </SelectedCardProvider>
          </TranslationProvider>
        </ScrollProvider>
      </CardProvider>
    </FormProvider>
  </BrandProvider>
);

reportWebVitals();
