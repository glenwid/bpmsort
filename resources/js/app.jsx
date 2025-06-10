import '../css/app.css';
import './bootstrap';
import 'simplebar-react/dist/simplebar.min.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { antdTheme, theme } from '@/theme';
import { AppFrame } from './Layouts/AppFrame';
import { Globals } from './Globals';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ).then((module) => {
            const Page = module.default;
            Page.layout = Page.layout || ((page) => (
                <AppFrame>
                    {page}
                </AppFrame>
            ));

            return Page;
        }),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

        createRoot(el).render(
            <> 
                <Globals />
                <ConfigProvider theme={antdTheme}>
                    <App {...props} />
                </ConfigProvider>
            </>
        );
    },
    progress: {
        color: theme.colors.purple[300],
    },
});
