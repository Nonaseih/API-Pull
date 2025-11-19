/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 18/11/2025 - 21:09:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
