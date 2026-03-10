const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const format = process.argv[2] || "html"; // default export type

  // escape spaces in path
  const reportPath = path.join(__dirname, "allure-report", "index.html");
  const fileUrl = "file://" + reportPath.replace(/ /g, "%20");

  const browser = await puppeteer.launch({
    headless: "new", // newer Puppeteer versions require this
  });
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: "networkidle0" });

  if (format === "html") {
    const html = await page.content();
    fs.writeFileSync("allure-email.html", html);
    console.log("Static email-friendly HTML generated: allure-email.html");
  } else if (format === "pdf") {
    await page.pdf({
      path: "allure-report.pdf",
      format: "A4",
      printBackground: true,
    });
    console.log("PDF report generated: allure-report.pdf");
  } else {
    console.log("Unknown format. Use: html or pdf");
  }

  await browser.close();
})();
