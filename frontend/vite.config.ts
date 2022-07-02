import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config';

// stackoverflow.com/questions/70709987/how-to-load-environment-variables-from-env-file-using-vite
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      port: Number(process.env.VITE_SERVER_PORT),
      host: true,
    },
    plugins: [react()],
  });
};
