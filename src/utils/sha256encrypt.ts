export function sha256Encrypt(data: string): string {
  const crypto = require("crypto");
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
}
