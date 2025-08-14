export type VerificationType = "photo" | "video" | "qr" | "nfc" | "combo";

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface Task {
  id: string;
  seq: number;
  instruction: string;
  verification_type: VerificationType;
  min_requirements?: Record<string, unknown>;
  hints?: string[];
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: string[];
  tags: string[];
  visibility: "public" | "private" | "unlisted";
  geo_center: GeoPoint;
  radius_m: number;
  difficulty: "easy" | "medium" | "hard";
  duration_min: number;
  start_at: string | null;
  end_at: string | null;
  reward_policy: { type: string; value: number };
  verification_policy?: Record<string, unknown>;
  safety_flags?: string[];
  status: "active" | "draft" | "archived";
  tasks: Task[];
}


