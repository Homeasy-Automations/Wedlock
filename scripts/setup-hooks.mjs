#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const hookDir = path.resolve('.git/hooks');
const hookFile = path.join(hookDir, 'pre-push');

if (!fs.existsSync(hookDir)) {
  console.log('No .git directory found. Skipping hook installation.');
  process.exit(0);
}

const hookContent = `#!/bin/sh
# Wedlock Pre-Push Hook: Check for uncompressed media before pushing to GitHub
echo ""
echo "🔍 Checking for uncompressed media files..."
node scripts/compress-media.mjs --check
STATUS=$?

if [ $STATUS -ne 0 ]; then
  echo ""
  echo "❌ Git push aborted: Uncompressed media found!"
  echo "👉 Please run: npm run compress:videos"
  echo "   Then commit the compressed files and push again."
  echo ""
  exit 1
fi

exit 0
`;

try {
  fs.writeFileSync(hookFile, hookContent, { encoding: 'utf8', mode: 0o755 });
  console.log('✔ Git pre-push hook installed successfully in .git/hooks/pre-push');
} catch (err) {
  console.error('Failed to install git hook:', err.message);
}
