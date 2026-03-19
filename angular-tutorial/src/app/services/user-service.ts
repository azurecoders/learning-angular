import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = signal([
    {
      id: 'u001',
      name: 'Ali Khan',
      email: 'ali.khan@example.com',
      role: 'customer',
      isVerified: true,
      createdAt: '2026-03-10T10:15:30Z',
    },
    {
      id: 'u002',
      name: 'Sara Ahmed',
      email: 'sara.ahmed@example.com',
      role: 'vendor',
      isVerified: true,
      createdAt: '2026-03-12T14:22:10Z',
    },
    {
      id: 'u003',
      name: 'Usman Tariq',
      email: 'usman.tariq@example.com',
      role: 'customer',
      isVerified: false,
      createdAt: '2026-03-15T09:05:45Z',
    },
    {
      id: 'u004',
      name: 'Ibrahim Ali',
      email: 'ibrahim.ali@example.com',
      role: 'customer',
      isVerified: true,
      createdAt: '2026-03-10T10:15:30Z',
    },
  ]);

  userList() {
    return this.users();
  }
}
