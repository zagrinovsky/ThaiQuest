import type { Quest } from "../types/models";

export const PHUKET_QUESTS: Quest[] = [
  {
    id: "qst-promthep-sunset",
    title: "Promthep Cape Sunset",
    description: "Catch the famous sunset at Laem Promthep.",
    category: ["nature", "landmark"],
    tags: ["promthep", "sunset"],
    visibility: "public",
    geo_center: { lat: 7.7629, lng: 98.3035 },
    radius_m: 700,
    difficulty: "easy",
    duration_min: 50,
    start_at: null,
    end_at: null,
    reward_policy: { type: "XP", value: 60 },
    verification_policy: {
      allow: ["photo", "video"],
      min_requirements: { video: { min_seconds: 5 } },
    },
    safety_flags: ["cliff_edges"],
    status: "active",
    tasks: [
      {
        id: "tsk-pr-1",
        seq: 1,
        instruction: "Photo or short video of the sunset over the cape.",
        verification_type: "photo",
        min_requirements: { object_cues: ["sunset", "cape silhouette"] },
      },
      {
        "id": "tsk-ot-2",
        "seq": 2,
        "instruction": "Try roti or dim sum and scan the QR at the stall.",
        "verification_type": "qr",
        "min_requirements": { "qr_required": true },
        "hints": ["local stall with QR sticker"]
      }
    ]
  },
  {
    "id": "qst-big-buddha-viewpoint",
    "title": "Big Buddha Viewpoint Quest",
    "description": "Climb to the Big Buddha and capture the panoramic view.",
    "category": ["landmark", "nature"],
    "tags": ["big-buddha", "viewpoint"],
    "visibility": "public",
    "geo_center": { "lat": 7.8279, "lng": 98.3126 },
    "radius_m": 800,
    "difficulty": "medium",
    "duration_min": 60,
    "start_at": null,
    "end_at": null,
    "reward_policy": { "type": "XP", "value": 80 },
    "verification_policy": { "allow": ["photo", "video"], "min_requirements": { "video": { "min_seconds": 5 } } },
    "safety_flags": ["respect_temple_rules"],
    "status": "active",
    "tasks": [
      {
        "id": "tsk-bb-1",
        "seq": 1,
        "instruction": "Take a photo with the Big Buddha in frame.",
        "verification_type": "photo",
        "min_requirements": { "object_cues": ["statue"], "geo_radius_m": 200 },
        "hints": ["main platform"]
      },
      {
        "id": "tsk-bb-2",
        "seq": 2,
        "instruction": "Record a short panoramic video of the viewpoint.",
        "verification_type": "video",
        "min_requirements": { "video_len": 5 },
        "hints": ["sweep left-to-right"]
      }
    ]
  },
  {
    "id": "qst-wat-chalong-cultural",
    "title": "Wat Chalong Cultural Walk",
    "description": "Explore Phuket's most important temple respectfully.",
    "category": ["culture", "landmark"],
    "tags": ["wat-chalong", "temple"],
    "visibility": "public",
    "geo_center": { "lat": 7.8447, "lng": 98.3381 },
    "radius_m": 600,
    "difficulty": "easy",
    "duration_min": 40,
    "start_at": null,
    "end_at": null,
    "reward_policy": { "type": "XP", "value": 40 },
    "verification_policy": { "allow": ["photo"], "min_requirements": { "photo": { "object": "pagoda or shrine" } } },
    "safety_flags": ["respect_temple_rules", "dress_code"],
    "status": "active",
    "tasks": [
      {
        "id": "tsk-wc-1",
        "seq": 1,
        "instruction": "Photo of the main pagoda (chedi).",
        "verification_type": "photo",
        "min_requirements": { "object_cues": ["pagoda"] }
      }
    ]
  },
  {
    "id": "qst-patong-beach-clean-challenge",
    "title": "Patong Beach Clean Challenge",
    "description": "Enjoy the beach and help keep it clean.",
    "category": ["nature", "community"],
    "tags": ["patong", "beach", "eco"],
    "visibility": "public",
    "geo_center": { "lat": 7.8966, "lng": 98.2943 },
    "radius_m": 1500,
    "difficulty": "easy",
    "duration_min": 30,
    "start_at": null,
    "end_at": null,
    "reward_policy": { "type": "coins", "value": 20 },
    "verification_policy": { "allow": ["photo"], "min_requirements": { "photo": { "object": "clean spot or trash bag" } } },
    "safety_flags": ["sun_protection"],
    "status": "active",
    "tasks": [
      {
        "id": "tsk-pt-1",
        "seq": 1,
        "instruction": "Take a before/after style photo of a cleaned area (can be a collage).",
        "verification_type": "photo",
        "min_requirements": { "object_cues": ["beach", "trash bag"], "geo_radius_m": 300 }
      }
    ]
  },
  {
    "id": "qst-karon-viewpoint-trio",
    "title": "Karon Viewpoint Trio Beaches",
    "description": "Spot Kata Noi, Kata, and Karon beaches from the viewpoint.",
    "category": ["nature", "viewpoint"],
    "tags": ["karon-viewpoint", "trio-beaches"],
    "visibility": "public",
    "geo_center": { "lat": 7.8053, "lng": 98.3031 },
    "radius_m": 500,
    "difficulty": "medium",
    "duration_min": 35,
    "start_at": null,
    "end_at": null,
    "reward_policy": { "type": "XP", "value": 70 },
    "verification_policy": { "allow": ["photo"], "min_requirements": { "photo": { "object": "3 beaches in frame" } } },
    "safety_flags": ["parking_caution"],
    "status": "active",
    "tasks": [
      {
        "id": "tsk-kv-1",
        "seq": 1,
        "instruction": "Photo where all three beaches are visible.",
        "verification_type": "photo",
        "min_requirements": { "object_cues": ["three bays"] }
      }
    ]
  },
  {
    "id": "qst-rawai-seafood-pier",
    "title": "Rawai Seafood Pier Taster",
    "description": "Pick fresh seafood and dine nearby.",
    "category": ["food", "local-life"],
    "tags": ["rawai", "seafood"],
    "visibility": "public",
    "geo_center": { "lat": 7.7722, "lng": 98.3258 },
    "radius_m": 900,
    "difficulty": "easy",
    "duration_min": 50,
    "start_at": null,
    "end_at": null,
    "reward_policy": { "type": "coins", "value": 25 },
    "verification_policy": { "allow": ["photo", "qr"], "min_requirements": { "qr_required": false } },
    "safety_flags": ["allergy_notice"],
    "status": "active",
    "tasks": [
      {
        "id": "tsk-rw-1",
        "seq": 1,
        "instruction": "Photo of your pick at the pier market.",
        "verification_type": "photo",
        "min_requirements": { "object_cues": ["seafood stall"] }
      }
    ]
  },
  {
    "id": "qst-bangla-street-art",
    "title": "Bangla Street Art Spotting (Daytime)",
    "description": "Find murals and street art near Bangla Rd in daylight only.",
    "category": ["art", "city"],
    "tags": ["bangla", "murals"],
    "visibility": "public",
    "geo_center": { "lat": 7.8958, "lng": 98.2950 },
    "radius_m": 700,
    "difficulty": "easy",
    "duration_min": 30,
    "start_at": null,
    "end_at": null,
    "reward_policy": { "type": "XP", "value": 30 },
    "verification_policy": { "allow": ["photo"], "min_requirements": { "photo": { "object": "mural" } } },
    "safety_flags": ["daytime_only"],
    "status": "active",
    "tasks": [
      {
        "id": "tsk-bg-1",
        "seq": 1,
        "instruction": "Photo of a mural (avoid faces of bystanders).",
        "verification_type": "photo",
        "min_requirements": { "object_cues": ["mural", "wall art"] }
      }
    ]
  }
  
  // ... (для краткости один квест; добавим больше при необходимости)
];


