"use strict";

const OFFLINE_VERSION = "e915ec730d26c93d";
const CACHE_PREFIX = "arcadien-offline-";
const CACHE_NAME = CACHE_PREFIX + OFFLINE_VERSION;
const READY_KEY = "./__offline-ready-" + OFFLINE_VERSION;
const OFFLINE_FILES = [
  "./",
  "./app-icon.png",
  "./app.webmanifest",
  "./assets/11th/primary-missions/disruption/death-trap-back.png",
  "./assets/11th/primary-missions/disruption/death-trap.png",
  "./assets/11th/primary-missions/disruption/delaying-action.png",
  "./assets/11th/primary-missions/disruption/locate-and-deny-back.png",
  "./assets/11th/primary-missions/disruption/locate-and-deny.png",
  "./assets/11th/primary-missions/disruption/outmanoeuvre.png",
  "./assets/11th/primary-missions/disruption/smoke-and-mirrors-back.png",
  "./assets/11th/primary-missions/disruption/smoke-and-mirrors.png",
  "./assets/11th/primary-missions/manifest.json",
  "./assets/11th/primary-missions/priority-assets/extract-relic-back.png",
  "./assets/11th/primary-missions/priority-assets/extract-relic.png",
  "./assets/11th/primary-missions/priority-assets/sabotage-back.png",
  "./assets/11th/primary-missions/priority-assets/sabotage.png",
  "./assets/11th/primary-missions/priority-assets/secure-asset-back.png",
  "./assets/11th/primary-missions/priority-assets/secure-asset.png",
  "./assets/11th/primary-missions/priority-assets/vanguard-operation-back.png",
  "./assets/11th/primary-missions/priority-assets/vanguard-operation.png",
  "./assets/11th/primary-missions/priority-assets/vital-link-back.png",
  "./assets/11th/primary-missions/priority-assets/vital-link.png",
  "./assets/11th/primary-missions/purge-the-foe/consecrate.png",
  "./assets/11th/primary-missions/purge-the-foe/destroyers-wrath.png",
  "./assets/11th/primary-missions/purge-the-foe/meatgrinder.png",
  "./assets/11th/primary-missions/purge-the-foe/punishment.png",
  "./assets/11th/primary-missions/purge-the-foe/unstoppable-force.png",
  "./assets/11th/primary-missions/reconnaissance/gather-intel-back.png",
  "./assets/11th/primary-missions/reconnaissance/gather-intel.png",
  "./assets/11th/primary-missions/reconnaissance/reconnaissance-sweep.png",
  "./assets/11th/primary-missions/reconnaissance/search-and-scour.png",
  "./assets/11th/primary-missions/reconnaissance/surveil-the-foe-back.png",
  "./assets/11th/primary-missions/reconnaissance/surveil-the-foe.png",
  "./assets/11th/primary-missions/reconnaissance/triangulation-back.png",
  "./assets/11th/primary-missions/reconnaissance/triangulation.png",
  "./assets/11th/primary-missions/take-and-hold/battlefield-dominance.png",
  "./assets/11th/primary-missions/take-and-hold/determined-acquisition.png",
  "./assets/11th/primary-missions/take-and-hold/immovable-object.png",
  "./assets/11th/primary-missions/take-and-hold/inescapable-dominion.png",
  "./assets/11th/primary-missions/take-and-hold/purge-and-secure.png",
  "./assets/11th/secondary-missions/defender/a-grievous-blow.png",
  "./assets/11th/secondary-missions/defender/a-tempting-target.png",
  "./assets/11th/secondary-missions/defender/assassination.png",
  "./assets/11th/secondary-missions/defender/beacon.png",
  "./assets/11th/secondary-missions/defender/behind-enemy-lines.png",
  "./assets/11th/secondary-missions/defender/bring-it-down.png",
  "./assets/11th/secondary-missions/defender/burden-of-trust.png",
  "./assets/11th/secondary-missions/defender/centre-ground.png",
  "./assets/11th/secondary-missions/defender/cleanse.png",
  "./assets/11th/secondary-missions/defender/defend-stronghold.png",
  "./assets/11th/secondary-missions/defender/display-of-might.png",
  "./assets/11th/secondary-missions/defender/engage-on-all-fronts.png",
  "./assets/11th/secondary-missions/defender/forward-position.png",
  "./assets/11th/secondary-missions/defender/no-prisoners.png",
  "./assets/11th/secondary-missions/defender/outflank.png",
  "./assets/11th/secondary-missions/defender/overwhelming-force.png",
  "./assets/11th/secondary-missions/defender/plunder.png",
  "./assets/11th/secondary-missions/defender/secure-no-man-s-land.png",
  "./assets/11th/secondary-missions/manifest.json",
  "./catalogue-sections.js",
  "./data/40k-compactor-skippable-wargear.json",
  "./domain/army.js",
  "./domain/roster-document.js",
  "./domain/sheets.js",
  "./engine-app.js",
  "./engine-data-manifest.js",
  "./engine-data/aeldari-aeldari-library.js",
  "./engine-data/chaos-chaos-daemons.js",
  "./engine-data/chaos-chaos-knights-library.js",
  "./engine-data/chaos-chaos-knights.js",
  "./engine-data/chaos-chaos-space-marines.js",
  "./engine-data/chaos-daemons-library.js",
  "./engine-data/chaos-death-guard.js",
  "./engine-data/chaos-emperor-s-children.js",
  "./engine-data/chaos-thousand-sons.js",
  "./engine-data/chaos-titanicus-traitoris.js",
  "./engine-data/chaos-world-eaters.js",
  "./engine-data/imperium-adepta-sororitas.js",
  "./engine-data/imperium-adeptus-astartes-black-templars.js",
  "./engine-data/imperium-adeptus-astartes-blood-angels.js",
  "./engine-data/imperium-adeptus-astartes-dark-angels.js",
  "./engine-data/imperium-adeptus-astartes-deathwatch.js",
  "./engine-data/imperium-adeptus-astartes-imperial-fists.js",
  "./engine-data/imperium-adeptus-astartes-iron-hands.js",
  "./engine-data/imperium-adeptus-astartes-raven-guard.js",
  "./engine-data/imperium-adeptus-astartes-salamanders.js",
  "./engine-data/imperium-adeptus-astartes-space-marines.js",
  "./engine-data/imperium-adeptus-astartes-space-wolves.js",
  "./engine-data/imperium-adeptus-astartes-ultramarines.js",
  "./engine-data/imperium-adeptus-astartes-white-scars.js",
  "./engine-data/imperium-adeptus-custodes.js",
  "./engine-data/imperium-adeptus-mechanicus.js",
  "./engine-data/imperium-adeptus-titanicus.js",
  "./engine-data/imperium-agents-of-the-imperium.js",
  "./engine-data/imperium-astra-militarum-library.js",
  "./engine-data/imperium-astra-militarum.js",
  "./engine-data/imperium-grey-knights.js",
  "./engine-data/imperium-imperial-knights-library.js",
  "./engine-data/imperium-imperial-knights.js",
  "./engine-data/library-titans.js",
  "./engine-data/unaligned-forces.js",
  "./engine-data/xenos-aeldari.js",
  "./engine-data/xenos-drukhari.js",
  "./engine-data/xenos-genestealer-cults.js",
  "./engine-data/xenos-leagues-of-votann.js",
  "./engine-data/xenos-necrons.js",
  "./engine-data/xenos-orks.js",
  "./engine-data/xenos-t-au-empire.js",
  "./engine-data/xenos-tyranids.js",
  "./engine-runtime.js",
  "./index.html",
  "./offline-app.js",
  "./styles.css"
];
const TOTAL_BYTES = 177095573;
let offlineReady = false;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    offlineReady = await currentCacheIsReady();
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  const type = event.data?.type;
  if (type === "GET_OFFLINE_STATUS") event.waitUntil(sendStatus(event.source));
  if (type === "DOWNLOAD_OFFLINE") event.waitUntil(downloadOfflineCopy(event.source));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(serveRequest(request));
});

async function currentCacheIsReady() {
  const cache = await caches.open(CACHE_NAME);
  return Boolean(await cache.match(READY_KEY));
}

async function sendStatus(client) {
  offlineReady = await currentCacheIsReady();
  client?.postMessage({
    type: "OFFLINE_STATUS",
    ready: offlineReady,
    version: OFFLINE_VERSION,
    completed: offlineReady ? OFFLINE_FILES.length : 0,
    total: OFFLINE_FILES.length,
    totalBytes: TOTAL_BYTES
  });
}

async function downloadOfflineCopy(client) {
  if (await currentCacheIsReady()) {
    offlineReady = true;
    client?.postMessage({
      type: "OFFLINE_READY",
      ready: true,
      version: OFFLINE_VERSION,
      completed: OFFLINE_FILES.length,
      total: OFFLINE_FILES.length,
      totalBytes: TOTAL_BYTES
    });
    return;
  }
  const cache = await caches.open(CACHE_NAME);
  offlineReady = false;
  try {
    for (let index = 0; index < OFFLINE_FILES.length; index += 1) {
      const url = OFFLINE_FILES[index];
      const request = new Request(url, { cache: "reload", credentials: "same-origin" });
      const response = await fetch(request);
      if (!response.ok) throw new Error(`Could not download ${url} (${response.status})`);
      await cache.put(request, response);
      client?.postMessage({
        type: "OFFLINE_PROGRESS",
        completed: index + 1,
        total: OFFLINE_FILES.length,
        totalBytes: TOTAL_BYTES
      });
    }

    await cache.put(READY_KEY, new Response(JSON.stringify({ version: OFFLINE_VERSION, totalBytes: TOTAL_BYTES }), {
      headers: { "content-type": "application/json" }
    }));
    offlineReady = true;
    const names = await caches.keys();
    await Promise.all(names
      .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    client?.postMessage({
      type: "OFFLINE_READY",
      ready: true,
      version: OFFLINE_VERSION,
      completed: OFFLINE_FILES.length,
      total: OFFLINE_FILES.length,
      totalBytes: TOTAL_BYTES
    });
  } catch (error) {
    await caches.delete(CACHE_NAME);
    offlineReady = false;
    client?.postMessage({ type: "OFFLINE_ERROR", message: error?.message || "Offline download failed." });
  }
}

async function serveRequest(request) {
  const currentCache = await caches.open(CACHE_NAME);
  if (offlineReady) {
    const current = await currentCache.match(request, { ignoreSearch: true });
    if (current) return current;
  }

  try {
    const network = await fetch(request);
    if (network.ok) return network;
  } catch {
    // Fall through to the newest complete or partial offline copy.
  }

  const cached = await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;
  if (request.mode === "navigate") {
    const index = await caches.match("./index.html", { ignoreSearch: true });
    if (index) return index;
  }
  return new Response("Arcadien Army Assembler is not fully available offline yet.", {
    status: 503,
    headers: { "content-type": "text/plain; charset=utf-8" }
  });
}
