// storage.ts
const STORAGE_KEY = "resume-builder-data"

export class ResumeStorage {
  static clearAll() {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY)
    }
  }
}
