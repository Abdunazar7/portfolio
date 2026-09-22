// ─────────────────────────────────────────────────────────────
// ALL PROJECTS LIVE HERE. To add one, copy a block and edit it.
//
//   id          unique, lowercase-with-dashes
//   title       project name
//   category    'fullstack' | 'backend' | 'frontend' | 'smarthome' | 'telegram'
//   status      'live' | 'released' | 'in-progress' | 'code'
//   featured    true = big card in "Selected work" at the top
//   year        shown on the card
//   summary     one or two sentences for the card
//   highlights  bullet points shown in the detail view
//   stack       technologies
//   images      screenshots in public/projects/ (first one is the cover)
//   live        deployed URL (optional)
//   repos       [{ label, url }] (optional)
//   modules     backend modules, shown as a module map (optional)
//   mock        'tablet' draws a tablet sketch when there are no images yet
// ─────────────────────────────────────────────────────────────

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'smarthome', label: 'Smart home' },
  { id: 'telegram', label: 'Telegram' },
]

const gh = (repo) => `https://github.com/Abdunazar7/${repo}`

export const projects = [
  {
    id: 'eduflow',
    title: 'EduFlow',
    category: 'fullstack',
    status: 'live',
    featured: true,
    year: 2026,
    summary:
      'A multi-tenant LMS and CRM for education centres. Groups, lessons, attendance, homework, payments, leads and reports, with dashboards for five roles.',
    highlights: [
      'Every record is scoped to its tenant, so one centre can never read another\'s data.',
      'Five roles, from platform admin down to student, and users can only manage roles below their own.',
      'Accounts activate through a Telegram bot: share your contact, get a one-time code, and your password arrives in Telegram.',
      'Rotating refresh tokens, per-phone rate limits, Helmet and health checks for production.',
      'Optional AI assistant with per-user minute and daily limits.',
      'The login page has demo accounts for every role.',
    ],
    stack: ['NestJS 11', 'Prisma 7', 'PostgreSQL', 'Telegraf', 'React', 'TypeScript', 'shadcn/ui'],
    images: [
      { src: '/projects/eduflow-dashboard.jpg', alt: 'EduFlow platform admin overview with revenue trend' },
      { src: '/projects/eduflow-login.jpg', alt: 'EduFlow login with demo accounts' },
    ],
    live: 'https://eduflow-ten.vercel.app',
    repos: [
      { label: 'API', url: gh('eduflow-backend') },
      { label: 'Frontend', url: gh('eduflow-front-1') },
    ],
    modules: ['auth', 'tenants', 'tenant-subscriptions', 'subscription-plans', 'users', 'staff-profiles', 'teacher-profiles', 'student-profiles', 'branches', 'rooms', 'courses', 'course-levels', 'groups', 'group-schedules', 'enrollments', 'lessons', 'attendance', 'homeworks', 'homework-submissions', 'transactions', 'teacher-settlements', 'leads', 'lead-statuses', 'reports', 'notification', 'telegram', 'sms-logs', 'files', 'aichat', 'system-settings', 'health', 'prisma', 'commons'],
  },
  {
    id: 'landmeasure',
    title: 'LandMeasure',
    category: 'frontend',
    status: 'live',
    featured: true,
    year: 2026,
    summary:
      'Draw a plot\'s boundary on a satellite map and get its area instantly in m², sotka, hectares and more. Free, in Uzbek, Russian and English.',
    highlights: [
      'Built twice: first on Google Maps, then again on Leaflet and OpenStreetMap with Turf.js. That removed the API key and the running cost.',
      'Six measurement units with ±0.1% accuracy.',
      'Draggable points, place search, "find my location" and satellite imagery.',
      'Server-rendered with Next.js and SEO-ready in three languages.',
    ],
    stack: ['Next.js', 'TypeScript', 'Leaflet', 'Turf.js', 'i18next'],
    images: [
      { src: '/projects/landmeasure-map.jpg', alt: 'LandMeasure drawing tool on satellite imagery' },
      { src: '/projects/landmeasure-home.jpg', alt: 'LandMeasure landing page' },
    ],
    live: 'https://land-measure-leaflet.vercel.app',
    repos: [
      { label: 'Leaflet version', url: gh('land-measure-leaflet') },
      { label: 'Google Maps version', url: gh('land-measure') },
    ],
  },
  {
    id: 'gymbros',
    title: 'GymBros',
    category: 'fullstack',
    status: 'live',
    featured: true,
    year: 2026,
    summary:
      'A CRM for fitness centres. Gyms, managers, membership plans, check-in attendance, payments and financial reports, with analytics dashboards.',
    highlights: [
      'Modular NestJS backend with Prisma, modelling gyms, users, plans and memberships.',
      'JWT auth with role-based access for super admins, gym managers and members.',
      'Revenue analytics and per-gym share charts in UZS.',
      'Scheduled jobs and email notifications for expiring memberships.',
      'The login page has demo accounts.',
    ],
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'TanStack Query', 'Tailwind', 'Recharts'],
    images: [
      { src: '/projects/gymbros-dashboard.jpg', alt: 'GymBros super admin dashboard' },
      { src: '/projects/gymbros-login.jpg', alt: 'GymBros login screen' },
    ],
    live: 'https://gym-front-nu.vercel.app',
    repos: [
      { label: 'API', url: gh('gym') },
      { label: 'Frontend', url: gh('gym-front') },
    ],
    modules: ['auth', 'users', 'gym', 'membership-plans', 'user-memberships', 'attendances', 'payments', 'notifications', 'reports', 'upload', 'mail'],
  },
  {
    id: 'bms-tablet',
    title: 'BMS Tablet',
    category: 'smarthome',
    status: 'released',
    featured: true,
    year: 2026,
    summary:
      'A native wall-tablet app that puts the whole home on one screen. It builds rooms automatically from Home Assistant and runs on the owner\'s phone too.',
    highlights: [
      'Three screens: the whole home, a room and a device, with lights, climate and daily charts.',
      'Rooms are built from the Home Assistant area registry, with no manual setup.',
      '"Turn everything off" skips heating and the TV on purpose, because that\'s what people actually mean.',
      'Switches between home and remote addresses on the owner\'s phone.',
      'Configured from a companion Home Assistant integration, with automatic APK updates.',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Home Assistant API', 'Python'],
    images: [],
    mock: 'tablet',
    repos: [
      { label: 'App', url: gh('bms-tablet') },
      { label: 'HA integration', url: gh('bms-tablet-ha') },
    ],
  },
  {
    id: 'kiosk',
    title: 'Kiosk Browser',
    category: 'smarthome',
    status: 'released',
    year: 2026,
    summary:
      'An open alternative to Fully Kiosk. It locks an Android tablet to one URL, survives reboots and takes remote commands from Home Assistant.',
    highlights: [
      'A hidden admin panel behind a PIN, opened by tapping the screen 8 times.',
      'Can be set as the default launcher, with a boot receiver and a watchdog service.',
      'HTTP control endpoint for screenOn, loadUrl and other commands.',
      'In-app updater that installs signed releases from GitHub.',
    ],
    stack: ['Kotlin', 'Android WebView'],
    images: [],
    repos: [
      { label: 'Code', url: gh('bms-kiosk-app') },
      { label: 'Download APK', url: 'https://github.com/Abdunazar7/kiosk-release/releases/latest' },
    ],
  },
  {
    id: 'floorplan',
    title: '3D Floor Plan',
    category: 'smarthome',
    status: 'released',
    year: 2026,
    summary:
      'A true-3D floor plan card for Home Assistant. Walls, doors, furniture and several floors, with every light and sensor bound live.',
    highlights: [
      'No cap on how many devices you can bind; only the changed parts re-render.',
      'Touch controls are clamped so the model can never get lost on a kiosk tablet.',
      'Procedural furniture library, so there are no 3D assets to license.',
      'Installs through HACS as an integration with its own sidebar panel.',
    ],
    stack: ['Three.js', 'Lit', 'HACS'],
    images: [],
    repos: [{ label: 'Code', url: gh('bms-3d-floorplan') }],
  },
  {
    id: 'intercom',
    title: 'Room Intercom',
    category: 'smarthome',
    status: 'released',
    year: 2026,
    summary:
      'Push-to-talk from a wall tablet to any speaker Home Assistant can play to. Nothing to install on the host.',
    highlights: [
      'The microphone streams as PCM over WebSocket, and ffmpeg inside HA Core turns it into a live MP3.',
      'No tokens, IP addresses or entity IDs are hardcoded, so it works on any Home Assistant install.',
      'An automatic sidebar panel finds every speaker.',
    ],
    stack: ['Python', 'WebSocket', 'Web Audio', 'ffmpeg'],
    images: [],
    repos: [{ label: 'Code', url: gh('room-intercom') }],
  },
  {
    id: 'stars-shop',
    title: 'Stars Shop',
    category: 'telegram',
    status: 'in-progress',
    year: 2026,
    summary:
      'A store for Telegram Stars and Premium, paid in soum through Payme and Click. It has client and admin Mini Apps and two bots.',
    highlights: [
      'pnpm monorepo: NestJS API, two Mini Apps and a shared package.',
      'All money and order logic lives in the API, with a BullMQ job queue on Redis.',
      'Everything runs in mock mode locally and moves to a VPS by editing one .env file.',
      'The shop is in Russian, Uzbek and English, synced to each user\'s locale.',
    ],
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'Telegram Mini Apps'],
    images: [],
    repos: [],
    modules: ['orders', 'payments', 'pricing', 'fulfillment', 'fragment', 'liquidity', 'monitor', 'bots', 'miniapp-auth', 'miniapp-client', 'miniapp-admin', 'users', 'settings', 'i18n', 'health'],
  },
  {
    id: 'nornlight',
    title: 'Nornlight',
    category: 'frontend',
    status: 'live',
    year: 2025,
    summary:
      'A lighting and furniture storefront with a catalogue, search, favourites, comparison and a cart, plus a separate admin dashboard.',
    highlights: [
      'A pixel-accurate build of a Figma design.',
      'Promo slider, category catalogue and product comparison.',
      'A separate admin dashboard for managing products.',
    ],
    stack: ['React', 'styled-components', 'Swiper', 'React Router'],
    images: [{ src: '/projects/nornlight.jpg', alt: 'Nornlight store home page' }],
    live: 'https://furniture-nu-nine.vercel.app',
    repos: [
      { label: 'Store', url: gh('furniture') },
      { label: 'Admin', url: gh('furniture-dashboard') },
    ],
    links: [{ label: 'Admin dashboard', url: 'https://furniture-dashboard-zeta.vercel.app' }],
  },
  {
    id: 'seedra',
    title: 'Seedra',
    category: 'frontend',
    status: 'live',
    year: 2026,
    summary: 'A storefront for garden seeds and supplies, with a product hero, catalogue and blog.',
    highlights: ['A responsive build from a Figma design.', 'Product slider and filterable catalogue.'],
    stack: ['React', 'Tailwind', 'Swiper'],
    images: [{ src: '/projects/seedra.jpg', alt: 'Seedra product page' }],
    live: 'https://seedra-sooty.vercel.app',
    repos: [{ label: 'Code', url: gh('seedra') }],
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery API',
    category: 'backend',
    status: 'code',
    year: 2025,
    summary:
      'A marketplace backend for vendors, menus, orders, couriers and reviews, with addresses split by region and district.',
    highlights: [
      'The full order lifecycle: cart, order items, payment, courier assignment and review.',
      'SQL scripts for setting up the schema, plus a Postman collection.',
      'Passport local and JWT strategies, with Winston logging.',
    ],
    stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'Passport', 'Winston'],
    repos: [{ label: 'Code', url: gh('food-delivery') }],
    modules: ['auth', 'users', 'admins', 'vendors', 'vendor_addresses', 'vendor_category', 'menu-items', 'menu_category', 'item_category', 'categories', 'orders', 'order_items', 'payments', 'couriers', 'courier_assignments', 'reviews', 'user_addresses', 'regions', 'districts', 'reports', 'mail'],
  },
  {
    id: 'sevimli-play',
    title: 'Sevimli Play',
    category: 'backend',
    status: 'code',
    year: 2025,
    summary:
      'A Netflix-style streaming backend with series and episodes, subscription plans, viewer profiles, devices, ratings and watch history.',
    highlights: [
      'Several profiles per account and limits on registered devices.',
      'Content linked to people, categories and tags through join tables.',
      'Subscriptions and payments tied to plans.',
    ],
    stack: ['NestJS', 'TypeORM', 'PostgreSQL'],
    repos: [{ label: 'Code', url: gh('sevimli-play') }],
    modules: ['auth', 'users', 'admins', 'profiles', 'devices', 'contents', 'episodes', 'media-files', 'thumbnails', 'people', 'content_people', 'categories', 'content_categories', 'tags', 'content_tags', 'plans', 'subscriptions', 'payments', 'ratings', 'comments', 'watch-histories'],
  },
  {
    id: 'hospital',
    title: 'Hospital API',
    category: 'backend',
    status: 'code',
    year: 2025,
    summary:
      'Patients, doctors, appointments, medical records, lab tests and prescriptions, with notifications by email and Telegram.',
    highlights: [
      'JWT auth with separate roles for admins, doctors and patients.',
      'Prescriptions with line items linked to medications.',
      'Postman collection for every endpoint.',
    ],
    stack: ['NestJS', 'Sequelize', 'PostgreSQL', 'Telegraf', 'Nodemailer'],
    repos: [{ label: 'Code', url: gh('hospital') }],
    modules: ['auth', 'users', 'admins', 'patients', 'doctors', 'appointments', 'medical_records', 'lab_tests', 'medications', 'prescriptions', 'prescription_items', 'payments', 'reports', 'mail'],
  },
  {
    id: 'donation',
    title: 'Donation API',
    category: 'backend',
    status: 'code',
    year: 2025,
    summary: 'A donation platform for recipients, with their social links, card payments and a small merch shop.',
    highlights: ['Email activation with Handlebars templates.', 'Donations, card payments and shop orders in one ledger.'],
    stack: ['NestJS', 'Sequelize', 'PostgreSQL', 'Swagger'],
    repos: [{ label: 'Code', url: gh('donation') }],
    modules: ['auth', 'user', 'admin', 'recipient', 'recipient-social', 'social-media', 'donate', 'card', 'payment', 'shop', 'order', 'category', 'mail'],
  },
  {
    id: 'milliy',
    title: 'Milliy',
    category: 'backend',
    status: 'code',
    year: 2025,
    summary: 'A community app backend for family relations, groups, channels, chat, events and invitations.',
    highlights: ['Document modelling with MongoDB and Mongoose.', 'Events with guest lists and invitations.'],
    stack: ['NestJS', 'Mongoose', 'MongoDB'],
    repos: [{ label: 'Code', url: gh('milliy') }],
    modules: ['auth', 'user', 'admin', 'relation', 'group', 'group-users', 'channel', 'channel-user', 'chat', 'event', 'event-guests', 'invitation', 'region', 'district'],
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy API',
    category: 'backend',
    status: 'code',
    year: 2025,
    summary: 'Pharmacies, medicines and stock, organised by region and district.',
    highlights: ['Stock levels tracked per pharmacy and per medicine.', 'Postman collection included.'],
    stack: ['NestJS', 'Sequelize', 'PostgreSQL'],
    repos: [{ label: 'Code', url: gh('pharmacy') }],
    modules: ['auth', 'admin', 'pharmacies', 'medicine', 'medicine_type', 'stock', 'region', 'district'],
  },
  {
    id: 'skidkachi',
    title: 'Skidkachi',
    category: 'telegram',
    status: 'code',
    year: 2026,
    summary: 'A discounts service with sign-up through a Telegram bot and one-time codes sent by SMS and email.',
    highlights: ['Telegram bot built with nestjs-telegraf.', 'OTP delivered by SMS and email.'],
    stack: ['NestJS', 'Telegraf', 'Sequelize', 'PostgreSQL'],
    repos: [{ label: 'Code', url: gh('skidkachi') }],
    modules: ['auth', 'users', 'bot', 'sms', 'mail'],
  },
]
