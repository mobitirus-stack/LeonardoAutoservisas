// Lietuviškų glifų patikra visuose self-hosted šriftuose.
import * as fontkit from 'fontkit';
import { reporter } from './lib-dist.mjs';
const { ok, done } = reporter();
const LT = 'ąčęėįšųūžĄČĘĖĮŠŲŪŽ„“–';
for (const f of ['public/fonts/inter.woff2', 'public/fonts/fraunces.woff2', 'public/fonts/grenze-gotisch.woff2']) {
  const font = fontkit.openSync(f);
  const miss = [...LT].filter((c) => !font.hasGlyphForCodePoint(c.codePointAt(0)));
  console.log(`${f}: ${miss.length ? 'TRŪKSTA ' + miss.join('') : 'visos LT raidės yra'}`);
  ok(miss.length === 0, f);
}
done('check-glyphs');
