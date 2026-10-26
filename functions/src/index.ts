import { initializeApp } from "firebase-admin/app";
import { setGlobalOptions } from "firebase-functions/v2";
import { onCall } from "firebase-functions/v2/https";

initializeApp();
// EU region, same as Firestore (eur3) - SPEC §16.
setGlobalOptions({ region: "europe-west1" });

export const ping = onCall(() => ({ ok: true, time: new Date().toISOString() }));
