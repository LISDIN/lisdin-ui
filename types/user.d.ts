export declare global {
  type UserProfile = {
    currentJob: string
    education?: string
    experience?: string
    skills?: string
  }

  type User = {
    name: string,
    email: string,
    currentJob: string
    education?: string
    experience?: string
    skills?: string
    imagePath: string
    imageAlt: string
  }
}
