export type Stack = {
  name: string;
  icon: string;
  level: number;
  levelLabel: LevelLabel;
  type: StackType;
  url?: string;
};

export enum LevelLabel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
  EXPERT = "Expert",
}

export enum StackType {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  DEVOPS = "DevOps",
  OTHER = "Other",
}
