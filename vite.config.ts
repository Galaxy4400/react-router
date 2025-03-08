import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
	base: "/react-router/",
	build: {
		outDir: "docs",
	},
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			devOptions: {
				enabled: true,
			},
			manifest: {
				name: "My PWA App",
				short_name: "MyPWAApp",
				start_url: "/react-router/index.html",
				display: "standalone",
				background_color: "#FFF",
				theme_color: "#1976d2",
				orientation: "portrait-primary",
				icons: [
					{
						src: "/react-router/vite-48-48.png",
						type: "image/png",
						sizes: "48x48",
					},
					{
						src: "/react-router/vite-72-72.png",
						type: "image/png",
						sizes: "72x72",
					},
					{
						src: "/react-router/vite-96-96.png",
						type: "image/png",
						sizes: "96x96",
					},
					{
						src: "/react-router/vite-144-144.png",
						type: "image/png",
						sizes: "144x144",
					},
					{
						src: "/react-router/vite-192-192.png",
						type: "image/png",
						sizes: "192x192",
					},
					{
						src: "/react-router/vite-512-512.png",
						type: "image/png",
						sizes: "512x512",
					},
				],
				screenshots: [
					{
						src: "/react-router/screenshot-1.png",
						sizes: "1230x1414",
						type: "image/png",
						form_factor: "wide",
					},
					{
						src: "/react-router/screenshot-1.png",
						sizes: "1230x1414",
						type: "image/png",
					},
				],
			},
			workbox: {
				runtimeCaching: [
					{
						urlPattern: ({ request }) => request.destination === "image",
						handler: "CacheFirst",
						options: {
							cacheName: "images-cache",
							expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
						},
					},
					{
						urlPattern: ({ request }) => request.destination === "script" || request.destination === "style",
						handler: "StaleWhileRevalidate",
						options: {
							cacheName: "assets-cache",
							expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
						},
					},
				],
			},
		}),
	],
});
