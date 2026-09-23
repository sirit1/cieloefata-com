import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { IdleBar } from "@/components/idle-bar";
import { OrganizationJsonLd } from "@/components/json-ld";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageHead, SITE_TITLE } from "@/lib/seo";
import appCss from "../styles.css?url";

const homeSeo = pageHead({
  path: "/",
  title: SITE_TITLE,
  description:
    "Escuela de lectura de la Escritura. RevelatiO abre el capítulo. Aquí se estudia: el método, el estudio de la semana y el tratado del mes.",
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      {
        name: "description",
        content:
          "Escuela de lectura de la Escritura. RevelatiO abre el capítulo. Aquí se estudia: el método, el estudio de la semana y el tratado del mes.",
      },
      { name: "theme-color", content: "#1A2340" },
      ...homeSeo.meta.filter((m) => !("title" in m) && !("name" in m && m.name === "description")),
    ],
    links: [
      ...homeSeo.links,
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "preload",
        href: "/fonts/cormorant-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/source-sans-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "preload", href: "/brand/seal-header.webp", as: "image", type: "image/webp" },
    ],
  }),
  component: () => (
    <html lang="es" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-parchment text-ink">
        <OrganizationJsonLd />
        <PreviewHostBridge />
        <IdleBar />
        <AuthProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <div id="contenido" className="flex-1" tabIndex={-1}>
              <Outlet />
            </div>
            <SiteFooter />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
