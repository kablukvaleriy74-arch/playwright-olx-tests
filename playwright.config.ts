import { PlaywrightTestConfig } from "@playwright/test"
import path from "path"

const config: PlaywrightTestConfig = {
    timeout: 60000, 
    retries: 0,
    outputDir: path.join(process.cwd(), "artifacts"),
    use: {
        headless: true,
        viewport: { width: 1280, height: 720}, 
        actionTimeout: 15000,
        ignoreHTTPSErrors: true, 
        video: "on",
        screenshot: "on",
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