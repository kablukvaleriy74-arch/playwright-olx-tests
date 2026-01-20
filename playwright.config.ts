import { PlaywrightTestConfig } from "@playwright/test";
import fs from "fs";
import path from "path";

// Створюємо папку artifacts, якщо її немає
const artifactsDir = path.join(__dirname, "artifacts");
if (!fs.existsSync(artifactsDir)) {
  fs.mkdirSync(artifactsDir, { recursive: true });
  console.log(`Created artifacts folder at: ${artifactsDir}`);
}

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  outputDir: artifactsDir, // загальна папка для артефактів
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,

   video: "on", // або "retain-on-failure" для збереження тільки при падінні
    screenshot: "only-on-failure", // "on", "off", "only-on-failure"
    trace: "on", 
  },
    projects: [
    {
        name: "chromium",
        use: { browserName: "chromium" }
    },
    {
        name: "Firefox",
        use: { browserName: "firefox" },
    },
    {
        name: "Webkit", 
        use: { browserName: "webkit" },
    }
]
}

export default config