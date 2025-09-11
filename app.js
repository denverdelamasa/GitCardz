// GitCardz app.js feel free to improve this code if you can, I suck at javascript... 
// I had to ask help from chatgpt for this one.... lol

const JSON_PATH = './data/contributors.json'; // <-- where the json file is located
const GRID_ID = 'cards-container';            // id of the grid container we gonna load it into

/* -------------------------
function getContainer() - what this does is that it checks if a div with the id of GRID_ID(card-container) exists..
if it does, it returns that div. if it doesn't, it creates one and adds it to the body, and then returns it..
------------------------- */
function getContainer() {
  let container = document.getElementById(GRID_ID);
  if (!container) {
    container = document.createElement('div');
    container.id = GRID_ID;
    container.className = 'grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6';
    document.body.appendChild(container);
  }
  return container;
}

/* -------------------------
function createCard(item) - so like, this function creates a card element for each contributor in the json file.
It creates an article element with classes from item.containerClasses or default classes.
It adds an image, name, GitHub link, bio, and tags to the card based on the item's properties.
Finally, it returns the constructed card element. it basically builds the card UI and safely handles missing data,
while also containing the css classes for styling the card, for safety, it uses default values if certain properties are missing...
------------------------- */

// also sheesh, i have NO idea what this means, I just know it does the thing and it works... lol

function createCard(item) {
  const card = document.createElement('article');
  card.className = item.containerClasses?.trim() || 'p-5 bg-slate-800 rounded-2xl shadow-lg';
  const row = document.createElement('div');
  row.className = 'flex items-center gap-3';

  const img = document.createElement('img');
  img.alt = item.name || item.username || 'avatar';
  img.loading = 'lazy';
  img.className = 'w-14 h-14 rounded-full object-cover border-2 border-slate-700';
  img.src = item.avatar && item.avatar.length ? item.avatar : `https://avatars.githubusercontent.com/${encodeURIComponent(item.username || '')}`;

  const meta = document.createElement('div');
  const nameEl = document.createElement('h2');
  nameEl.textContent = item.name || item.username || 'Unknown';
  nameEl.className = 'text-lg font-semibold';

  const link = document.createElement('a');
  const ghUrl = item.github || `https://github.com/${encodeURIComponent(item.username || '')}`;
  link.href = ghUrl;
  link.textContent = ghUrl.replace(/^https?:\/\//, '');
  link.target = '_blank';
  link.rel = 'noopener';
  link.className = 'text-sm text-sky-400 hover:underline';

  meta.appendChild(nameEl);
  meta.appendChild(link);

  row.appendChild(img);
  row.appendChild(meta);
  card.appendChild(row);

  if (item.bio) {
    const bio = document.createElement('p');
    bio.textContent = item.bio;
    bio.className = 'text-sm text-slate-300 mt-3';
    card.appendChild(bio);
  }

  if (Array.isArray(item.tags) && item.tags.length) {
    const tagsWrap = document.createElement('div');
    tagsWrap.className = 'mt-3 flex gap-2 flex-wrap';
    item.tags.slice(0, 8).forEach(t => {
      const s = document.createElement('span');
      s.className = 'text-xs px-2 py-1 rounded-full bg-slate-700/60';
      s.textContent = t;
      tagsWrap.appendChild(s);
    });
    card.appendChild(tagsWrap);
  }

  return card;
}

/* -------------------------
async function loadContributions() - this function calls the JSON file from JSON_PATH(contributors.json), 
checks if the response is ok, otherwise it''s say: Failed to fetch blablabla HTTP blablabla, then it
parses the JSON data, and for each item in the data array, it creates a card using createCard() and appends it to the container.
If there are no contributors or if there's an error, it displays appropriate messages.
------------------------- */

async function loadContributions() {
  const container = getContainer();
  try {
    const res = await fetch(JSON_PATH, { cache: 'no-cache' });
    if (!res.ok) {
      console.error(`Failed to fetch ${JSON_PATH}: HTTP ${res.status}`);
      container.innerHTML = `<p class="text-red-400">Unable to load contributors (HTTP ${res.status}).</p>`;
      return;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) { // this is basically for when nobody has contributed yet... T_T
      container.innerHTML = `<p class="text-slate-400">No contributors yet. Be the first!</p>`;
      return;
    }
    const frag = document.createDocumentFragment();
    data.forEach(item => {
      frag.appendChild(createCard(item));
    });
    container.appendChild(frag);

    console.log(`GitCardz: Loaded ${data.length} contributors from ${JSON_PATH}`); // just so we can debug in the console...
  } catch (err) {
    console.error('Error loading contributions:', err);
    container.innerHTML = `<p class="text-red-400">Error loading contributors. Open console for details.</p>`;
  }
}

/* -------------------------
Initializes the loading of contributions... it basically runs everything we wrote above...
------------------------- */
loadContributions();

/* -------------------------
so uhh yeah, I guess that's it... I did my best to understand this code(chatgpt mostly wrote ts but I tweaked it abit), 
and if you can improve this code, please do so... I suck at backend stuff...

I think I yap too much idk, I just like to pretend that I can explain these codes like I'm in an interview or somethin....
------------------------- */