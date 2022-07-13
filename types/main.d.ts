import HomeIcon from '@mui/icons-material/Home'

export declare global {
  /**
   * @author rgorai
   * @description optional information for the navbar if feature is to be on it
   * @param NavIcon React element function for the desired mui icon
   * @param beforeSearch whether the feature's nav link should be
   *                             before or after the search bar
   */
  type NavInfo = {
    NavIcon: typeof HomeIcon
    beforeSearch: boolean
  }

  /**
   * @author rgorai
   * @description list of items containing information about the
   *              desired primary features of the application
   * @param label client-facing label for the feature
   * @param element corresponding ReactElement for the feature's page
   * @param navInfo {@link NavInfo}
   */
  type AppContent = {
    path: string
    element: ReactElement
    navInfo?: NavInfo
  }

  /**
   * @author rgorai
   * @description type ensuring navInfo exists. see {@link AppContent} for more details
   */
  type NavItems = Array<AppContent & { navInfo: NavInfo }>
}
