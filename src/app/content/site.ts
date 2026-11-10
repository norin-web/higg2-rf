// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are marked — replace them when the owner sends real data
// (after release run https://itunes.apple.com/lookup?id=6827161500 and refresh `app` + `specs`).

export const site = {
  // Brand per the owner's Privacy Policy §1 / Terms §8: the Higgsfield brand is used under a signed
  // brand authorization agreement; the App is independently operated by Felix Lindner.
  // Exact App Store name unknown until release — refresh from the lookup then.
  brand: "Higgsfield",
  email: "felix@lindnerapp.click",
  year: new Date().getFullYear(),
  operator: "Felix Lindner",
  address: "Prierosser Str. 45, 12357 Berlin, Germany",
  tagline: "AI video creator for iPhone. Text to Video, Image to Video and AI Chat in one app.",
  // wording follows section 8 of the owner's Terms of Use
  disclaimer:
    "AI video creator for iPhone, independently operated by Felix Lindner. HIGGSFIELD and associated marks belong to their respective rights holders and are used under a signed brand authorization agreement. Higgsfield Inc. is not the publisher of this App.",
};

export const app = {
  id: "6827161500",
  url: "https://apps.apple.com/app/id6827161500",
  // App isn't live yet (iTunes lookup returns 0 results, 2026-11-10). PLACEHOLDER until release.
  minIOS: "17.0",
  category: "Photo & Video",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Everything below follows the app's own screens (app design file → Design [MVP]) and the owner's
// Terms §2 / Privacy §2: text or (multiple) reference images → video, format · resolution · duration · sound,
// Prompt Bank, AI Chat with image attachments or camera, local History & Favorites, copy, recreate,
// save to Photos, share, delete. AI by fal.ai and OpenAI. Nothing is claimed beyond them.
export const ticker = ["Text to Video", "Image to Video", "1080p", "Sound on", "Prompt Bank", "AI Chat", "History & Favorites", "Save to Photos"];

export const features = [
  { dot: "blue", tag: "Create", title: "Text to Video", text: "Describe the characters, action, camera movement and style. The app turns your words into a clip.", img: "/images/phone-text2video.webp" },
  { dot: "pink", tag: "Create", title: "Image to Video", text: "Add one or more reference photos and explain how they should move. The app animates them into a video.", img: "/images/phone-image2video.webp" },
  { dot: "lime", tag: "Result", title: "Watch & Save", text: "Play the result with its prompt right underneath. Save it to Photos, share it, or recreate it for another take.", img: "/images/phone-result.webp" },
  { dot: "white", tag: "Library", title: "History", text: "Every generation stays in History on your iPhone. Filter by type, keep favorites close, delete what you don't need.", img: "/images/phone-history.webp" },
];

// Prompt Bank presets as named in the app. Prompts for Ramen and the snow scene are the app's own
// sample text; the others are short summaries (draft — replace with the app's prompts if available).
export const presets = [
  { name: "Subway", img: "/images/preset-subway.webp", label: true, prompt: "A woman holds a coffee cup in a crowded subway car, the train gently swaying as people move around her." },
  { name: "Ramen", img: "/images/preset-ramen.webp", label: true, prompt: "A young woman sits at a cozy ramen bar and slowly lifts noodles with chopsticks, bringing them toward her mouth and taking a natural bite. The noodles move softly and realistically, with subtle steam rising from the hot bowl." },
  { name: "Pet Travel", img: "/images/preset-pet-travel.webp", label: false, prompt: "A happy dog leans out of the car window on a sunny coastal road lined with palms, ears flapping in the wind." },
  { name: "Beauty Portrait", img: "/images/preset-beauty-portrait.webp", label: false, prompt: "A close-up beauty portrait with soft light, a slow blink and a subtle turn of the head toward the camera." },
  { name: "Spacewalk", img: "/images/preset-spacewalk.webp", label: false, prompt: "An astronaut floats above the Earth and reaches toward the camera as the sun rises over the horizon." },
  { name: "Street Food", img: "/images/preset-street-food.webp", label: false, prompt: "A girl with an ice cream cone stands on a busy neon street at night as the crowd passes by." },
];

export const cases = [
  { title: "Fashion", mode: "Image to Video", img: "/images/preset-result.webp", text: "A stylish woman walks confidently through fresh snow in a bright alpine landscape…" },
  { title: "Food", mode: "Text to Video", img: "/images/preset-ramen.webp", text: "A young woman sits at a cozy ramen bar and slowly lifts noodles with chopsticks…" },
  { title: "Pets & travel", mode: "Text to Video", img: "/images/case-pet-travel.webp", text: "A happy dog leans out of the car window on a sunny coastal road lined with palms…" },
  { title: "Portraits", mode: "Image to Video", img: "/images/case-beauty-portrait.webp", text: "A close-up beauty portrait with soft light, a slow blink and a subtle turn of the head…" },
  { title: "Sci-fi", mode: "Text to Video", img: "/images/case-spacewalk.webp", text: "An astronaut floats above the Earth and reaches toward the camera as the sun rises…" },
  { title: "City life", mode: "Image to Video", img: "/images/case-street-food.webp", text: "A girl with an ice cream cone stands on a busy neon street as the crowd passes by…" },
  { title: "Everyday", mode: "Text to Video", img: "/images/preset-subway.webp", text: "A woman holds a coffee cup in a crowded subway car, the train gently swaying…" },
];

export const settings = ["1:1", "1080p", "5s", "Sound On"];
export const historyFilters = ["All", "Favorite", "Text to Video", "Image to Video"];

export const steps = [
  { n: "01", title: "Get the app", text: "Download it from the App Store on your iPhone." },
  { n: "02", title: "Describe it", text: "Write a prompt, add reference photos or pick a scene from Prompt Bank." },
  { n: "03", title: "Generate & save", text: "Tap Generate, watch the result and save the clips you love to Photos." },
];

export const screens = [
  { name: "Home", text: "Start Generating in one tap, jump to Text to Video or Image to Video, or browse Prompt Bank.", img: "/images/phone-home.webp" },
  { name: "Create", text: "Write a prompt or add reference photos, then set the ratio, resolution, length and sound.", img: "/images/phone-create-keyboard.webp" },
  { name: "Result", text: "Watch the clip with its prompt underneath, then save it to Photos or share it.", img: "/images/phone-result.webp" },
  { name: "Prompt Bank", text: "Ready-made scenes — open one, copy its prompt or recreate it.", img: "/images/phone-promptbank.webp" },
  { name: "History", text: "Every generation in one grid, stored on your iPhone. Filter by type, open favorites or delete results.", img: "/images/phone-history.webp" },
  { name: "AI Chat", text: "Talk an idea through, attach an image or snap one with the camera, and shape the wording.", img: "/images/phone-aichat.webp" },
];

export const storeShots = ["/images/store-1-home.webp", "/images/store-2-create.webp", "/images/store-3-result.webp", "/images/store-4-promptbank.webp"];

// "—" values: refresh from the iTunes lookup after release.
export const specs: [string, string][] = [
  ["Developer", site.operator],
  ["Category", app.category],
  ["Compatibility", `iPhone · iOS ${app.minIOS.split(".")[0]} or later`],
  ["Languages", "English"],
  ["AI providers", "fal.ai · OpenAI"],
  ["Size", "—"],
  ["Age rating", "—"],
  ["Subscription", "Auto-renewing, via Apple In-App Purchase"],
];

export const principles = [
  { n: "01", title: "Simple first", text: "One Create screen, a few clear settings and a single Generate button." },
  { n: "02", title: "Start from anything", text: "A sentence, a reference photo or a ready scene from Prompt Bank." },
  { n: "03", title: "Yours to keep", text: "History and favorites stay on your iPhone. Save the clips you like to Photos." },
];

export const faq = [
  { q: "How do I make a video from text?", a: "Open Create and choose Text to Video. Describe the scene — characters, action, camera movement and style. Set the ratio, resolution, length and sound, then tap Generate." },
  { q: "How do I turn a photo into a video?", a: "Open Create and switch to Image to Video. Tap + to add a reference photo, describe how it should move, adjust the settings and tap Generate." },
  { q: "What is Prompt Bank?", a: "A collection of ready-made scenes. Open one to read its prompt, then tap Copy Prompt to use it as a starting point or Recreate to generate it right away." },
  { q: "Where do my videos go?", a: "Every generation is saved in History. Use the filters — All, Favorite, Text to Video, Image to Video — to find a clip fast." },
  { q: "How do I save or share a video?", a: "Open the result and tap Save to add it to your photo library, or share it to another app. The App only asks for permission to add to Photos, not to browse your library." },
  { q: "Can I delete my history?", a: "Yes. History and favorites are stored on your iPhone, and you can delete individual results or your history in the app. Deleting there doesn't remove videos you've already saved to Photos or shared." },
  { q: "Where are my prompts and images processed?", a: "To generate videos and answer in AI Chat, your prompts, reference images and chat messages are sent to the AI providers fal.ai and OpenAI, and the results come back to the app. The app doesn't store them on a server of its own. Details are in the Privacy Policy." },
  { q: "Do I need an internet connection?", a: "Yes. Video generation and AI Chat run on external AI services, so the app needs a network connection. Generation times and output quality can vary." },
  { q: "Is there anything I can't create?", a: "The app doesn't generate explicit adult (18+) content, and content that is unlawful, infringes others' rights or impersonates real people isn't allowed. See Acceptable use in the Terms of Use." },
  { q: "How do I cancel my subscription?", a: "Subscriptions renew automatically and are billed through your Apple Account. Manage or cancel them in your iPhone's Settings → your name → Subscriptions before the renewal date. Deleting the app doesn't cancel a subscription." },
  { q: "How do I restore a purchase?", a: "If a paid subscription isn't recognized, use the restore-purchases option in the app or contact support. Refunds are handled through Apple." },
  { q: "How do I send feedback?", a: `Open Settings in the app and tap Feedback, or write to us at ${site.email}.` },
];

export const contactTopics = ["Question", "Feedback", "Bug", "Subscription"];
