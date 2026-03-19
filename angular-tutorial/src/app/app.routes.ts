import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Profile } from './pages/profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';
import { User } from './pages/user/user';
import { Setting } from './pages/setting/setting';
import { PublicSetting } from './pages/setting/public-setting/public-setting';
import { PrivateSetting } from './pages/setting/private-setting/private-setting';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about/:name/:age', component: About },
  { path: 'admin', loadComponent: () => import('./pages/admin/admin').then((c) => c.Admin) },
  { path: 'about/:name', component: About },
  { path: 'about', component: About },
  { path: 'profile', component: Profile },
  { path: 'login', component: Login },
  { path: 'users', component: Users },
  {
    path: 'user',
    // component: User,
    loadComponent: () => import('./pages/user/user').then((c) => c.User),
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: Profile },
      {
        path: 'setting',
        component: Setting,
        children: [
          { path: '', redirectTo: 'public', pathMatch: 'full' },
          {
            path: 'public',
            component: PublicSetting,
          },
          {
            path: 'private',
            component: PrivateSetting,
          },
        ],
      },
    ],
  },
  { path: 'user-details/:id', component: UserDetails },
  { path: '**', component: PageNotFound },
  // { path: '**', redirectTo: '' },
];
