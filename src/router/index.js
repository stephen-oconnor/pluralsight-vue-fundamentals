import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage';
import RobotBuilder from '../build/RobotBuilder';
import PartInfo from '../parts/PartInfo';
import BrowseParts from '../parts/BrowseParts';
import RobotHeads from '../parts/RobotHeads';
import RobotArms from '../parts/RobotArms';
import RobotTorsos from '../parts/RobotTorsos';
import RobotBases from '../parts/RobotBases';
import SidebarStandard from '../sidebars/SidebarStandard';
import SidebarBuild from '../sidebars/SidebarBuild';

// Tell Vue to use the router.
Vue.use(Router);

// Create routes.
export default new Router({
  mode: 'history', // This causes some server issues, see docs for details.
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          path: 'heads',
          name: 'BrowseHeads',
          component: RobotHeads,
        },
        {
          path: 'arms',
          name: 'BrowseArms',
          component: RobotArms,
        },
        {
          path: 'torsos',
          name: 'BrowseTorsos',
          component: RobotTorsos,
        },
        {
          path: 'bases',
          name: 'BrowseBases',
          component: RobotBases,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true, // Pass route params as props.
      // Route guard.
      beforeEnter(to, from, next) {
        // Check if id is a Number.
        const isValidId = Number.isInteger(Number(to.params.id));
        // Stop navigation if id is not a number.
        next(isValidId);
      },
    },
  ],
});
