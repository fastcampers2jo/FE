import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  server: {
    // 기본포트 설정
    port: 3000,
    // 서버시작시 자동 브라우저 오픈
    open: true,
    proxy: {
      "/api": {
        target:
          "http://ec2-43-200-241-105.ap-northeast-2.compute.amazonaws.com:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        ws: true,
      },
    },
  },

  base: process.env.NODE_ENV === "development" ? "./" : "./",
  build: {
    // rollupoptions에서 각기 다른 폴더에 이미지 css js 들어가도록 설정
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name?.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType as string)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [
    react(),
    // svg이외의 이미지 파일 최적화
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),

    // svg를 컴포넌트 처럼 사용하게 해줌
    svgr(),
    // 환경변수를 import.meta.env 에서 process.env로 바꿔줌
    envCompatible({ prefix: "REACT_APP" }),
    // tsconfig.json에 정의된 paths 매핑사용
    tsconfigPaths(),

    checker({
      // 타입스크립트 타입 검사
      typescript: true,
      // eslint 검사
      eslint: { lintCommand: "eslint ./src --ext .ts,.tsx" },
    }),
  ],
});
