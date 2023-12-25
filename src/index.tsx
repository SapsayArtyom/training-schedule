import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from 'react-dom/client';
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import PageError from "./components/pageError/PageError";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <HashRouter>
        <ErrorBoundary fallback={<PageError />}>
            <App />
        </ErrorBoundary>
    </HashRouter>
);
// root.render(
//     <BrowserRouter>
//         <ErrorBoundary fallback={<PageError />}>
//             <App />
//         </ErrorBoundary>
//     </BrowserRouter>
// );