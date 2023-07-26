export type NavigationURL = string;

export class NavigationRoutes {
  static HOME: NavigationURL = ''
  static CREATE: NavigationURL = 'create'

  static CARETRACK(id: string): NavigationURL {
    return `caretracks/${id}`
  }
}
