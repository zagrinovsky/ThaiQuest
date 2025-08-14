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
    ],
  },
  // ... (для краткости один квест; добавим больше при необходимости)
];


