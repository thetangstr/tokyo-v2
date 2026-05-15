const fs = require("fs");
const path = require("path");

module.exports = function handler(req, res) {
  const artifactPath = path.join(process.cwd(), "demo", "week5_simulation.json");
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
  res.status(200).json({
    ok: true,
    endpoint: "/api/week5-simulation",
    served_at: new Date().toISOString(),
    artifact,
  });
};
