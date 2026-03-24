import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminData } from './admin-data/admin-data';
import { Child } from './child/child';
import { Header } from './components/header/header';
import { ProductList } from './components/product-list/product-list';
import { UserList } from './components/user-list/user-list';
import { ControlCount } from './control-count/control-count';
import { CurrencyConverterPipe } from './custom-pipe/currency-converter-pipe';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { DisplayCount } from './display-count/display-count';
import { Footer } from './footer/footer';
import { UserDetailsCustom } from './pages/user-details-custom/user-details-custom';
import { Profile } from './profile/profile';
import { SearchBox } from './search-box/search-box';
import { UserData } from './user-data/user-data';
import { UsersService } from './services/users-service';
import { User } from './services/userDataType';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    // ProductList,
    ReactiveFormsModule,
    // Profile,
    // UserData,
    // AdminData,
    FormsModule,
    CommonModule,
    // Footer,
    // SearchBox,
    // Child,
    // DisplayCount,
    // ControlCount,
    // TrimTextPipe,
    // CurrencyConverterPipe,
    // Header,
    // UserDetailsCustom,
    // FormField,
    // UserList,
  ],
  templateUrl: './app.html',
  // template: `<h1>This is inline template {{ name }}</h1>`,
  // styleUrl: './app.css',
  styleUrls: ['./app.css', './common.css'],
})
export class App {
  // name = 'Muzammil';
  // email = 'xyz@gmail.com';
  // getName(a: number, b: number) {
  //   return `${this.name} ${a + b}`;
  // }
  // callMe() {
  //   alert('Hello Angular 21');
  // }
  // count = 0;
  // counter(action: string) {
  //   if (action === 'plus') this.count++;
  //   if (action === 'minus') this.count > 0 && this.count--;
  //   // this.showUserName();
  // }
  // showUserName() {
  //   alert('Hello');
  // }
  // handleEvent(eventName: string) {
  //   console.log(eventName);
  // }
  // data: string | number = 'Muzammil';
  // updateData(val: number) {
  //   this.data = val;
  //   this.data = this.sum(3, 4);
  // }
  // sum(a: number, b: number): number {
  //   return a + b;
  // }
  // handleEvent(event: PointerEvent | Event) {
  //   console.log(event);
  // }
  // btnDisable: boolean = false;
  // inputReadonly: boolean = false;
  // url =
  //   'https://images.unsplash.com/photo-1773176647951-d8f618dee942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8';
  // toggle() {
  //   this.btnDisable = !this.btnDisable;
  // }
  // data = 10;
  // count = signal(100);
  // constructor() {
  //   effect(() => {
  //     console.log(`This is data: ${this.data}`);
  //     console.log(`This is data: ${this.count()}`);
  //     if (this.count() === 110) {
  //       this.count.set(100);
  //     }
  //   });
  // }
  // updateData() {
  //   this.data++;
  // }
  // updateSignal() {
  //   this.count.set(this.count() + 1);
  // }
  // height = 100;
  // width = 20;
  // area = this.height * this.width;
  // handleHeight() {
  //   this.height = this.height + 10;
  //   this.area = this.height * this.width;
  // }
  // height = signal(100);
  // width = signal(20);
  // area = computed(() => this.height() * this.width());
  // constructor() {
  //   effect(() => {
  //     console.log(`Area is: ${this.area()}`);
  //   });
  // }
  // handleHeight() {
  //   this.height.set(this.height() + 10);
  // }
  // constructor() {
  //   effect(() => {
  //     if (this.speed() > 0 && this.speed() < 80) this.color = 'green';
  //     if (this.speed() >= 80 && this.speed() < 120) this.color = 'orange';
  //     if (this.speed() >= 120) this.color = 'red';
  //     console.log(`Speed: ${this.speed()}`);
  //   });
  //   effect(() => {
  //     console.log(this.fruit());
  //   });
  // }
  // color = 'black';
  // fruit = signal('Apple');
  // speed = signal(0);
  // increaseSpeed() {
  //   this.speed.set(this.speed() + 10);
  // }
  // changeFruit() {
  //   this.fruit.set('Banana');
  // }
  // data: WritableSignal<string | number> = signal<string | number>('Muzammil');
  // speed: Signal<number> = computed<number>(() => 90);
  // users: WritableSignal<string[]> = signal(['Muzammil', 'Ibrahim', 'Imran']);
  // handleData() {
  //   // this.data.set('Muzammil');
  //   this.users.update((item) => [...item, 'Arshad']);
  //   console.log(this.users());
  // }
  // name: WritableSignal<string> = signal('');
  // resetValue() {
  //   this.name.set('Muzammil');
  // }
  // setValue(value: string) {
  //   this.name.set(value);
  // }
  // isLogin = signal(true);
  // show = signal(true);
  // status: WritableSignal<string> = signal('notStarted');
  // handleLogin() {
  //   this.isLogin.set(!this.isLogin());
  // }
  // handleUpdateStatus(event: Event) {
  //   let target = event.target as HTMLSelectElement;
  //   this.status.set(target.value);
  // }
  // users = signal(['Muzammil', 'Ahmed', 'Imran', 'Salman']);
  // usersDetail = signal([
  //   {
  //     id: 1,
  //     name: 'Muzammil',
  //     hobby: 'Coding',
  //     email: 'muzammil@xyz.com',
  //   },
  //   {
  //     id: 2,
  //     name: 'Ahmed',
  //     hobby: 'Gaming',
  //     email: 'ahmed@hotmail.com',
  //   },
  //   {
  //     id: 3,
  //     name: 'Ibrahim',
  //     hobby: 'Reading',
  //     email: 'wibrahim@gmail.com',
  //   },
  //   {
  //     id: 4,
  //     name: 'Ashraf',
  //     hobby: 'Calisthenics',
  //     email: 'calpro@ashram.org',
  //   },
  // ]);
  // status = signal('notStarted');
  // handleStatusUpdate(event: Event) {
  //   let target = event.target as HTMLSelectElement;
  //   this.status.set(target.value);
  // }
  // name = signal('Muzammil');
  // age = 20;
  // userData = signal({
  //   name: 'Muzammil',
  //   age: '20',
  //   email: 'muzammil@xyz.com',
  // });
  // updateUserData(key: string, value: string) {
  //   this.userData.update((prev) => ({ ...prev, [key]: value }));
  // }
  // userName = signal('Muzammil');
  // userData = signal({
  //   name: 'Muzammil',
  //   age: 20,
  //   email: 'muzammil@xyz.com',
  // });
  // get uName() {
  //   return this.userName();
  // }
  // set uName(val: string) {
  //   this.userName.set(val);
  // }
  // get studentName() {
  //   return this.userData().name;
  // }
  // set studentName(val: string) {
  //   this.userData.update((prev) => ({ ...prev, name: val }));
  // }
  // isLoggedin = signal(true);
  // pColor = 'red';
  // users = signal(['Muzammil', 'Ahmed', 'Ibrahim']);
  // usersDetail = signal([
  //   {
  //     id: 1,
  //     name: 'Muzammil',
  //     hobby: 'Coding',
  //     email: 'muzammil@xyz.com',
  //     permission: ['read', 'write'],
  //   },
  //   {
  //     id: 2,
  //     name: 'Ahmed',
  //     hobby: 'Gaming',
  //     email: 'ahmed@hotmail.com',
  //     permission: ['edit'],
  //   },
  //   {
  //     id: 3,
  //     name: 'Ibrahim',
  //     hobby: 'Reading',
  //     email: 'wibrahim@gmail.com',
  //     permission: ['read', 'write', 'edit'],
  //   },
  //   {
  //     id: 4,
  //     name: 'Ashraf',
  //     hobby: 'Calisthenics',
  //     email: 'calpro@ashram.org',
  //     permission: ['delete'],
  //   },
  // ]);
  // isShown = true;
  // login = false;
  // block = 1;
  // updateBlock() {
  //   if (this.block <= 2) {
  //     this.block++;
  //   }
  // }
  // color = 'pink';
  // changeColor(col: string) {
  //   this.color = col;
  // }
  // nums = signal([0, 1, 2, 3, 4, 5]);
  // userName = signal('Muzammil');
  // users = signal(['Muzammil', 'Ahmed', 'Ibrahim', 'Rashid']);
  // newUserName = signal('');
  // selectedUser = signal('');
  // get userName() {
  //   return this.newUserName();
  // }
  // set userName(val: string) {
  //   this.newUserName.set(val);
  // }
  // addNewUser() {
  //   this.users.update((prev) => [...prev, this.newUserName()]);
  //   this.newUserName.set('');
  //   document.getElementById('input')?.focus();
  // }
  // setSelectedUser(name: string) {
  //   this.selectedUser.set(name);
  // }
  // deleteSelectedUser(name: string) {
  //   this.users.update((prev) => prev.filter((item) => item !== name));
  // }
  // title = signal('Learning to Code');
  // name = signal('');
  // amount = 10000;
  // date = '24-8-2025';
  // mobile = 'samsung';
  // today = new Date();
  // user = signal({ name: 'Muzammil', age: 20, email: 'muzammil@xyz.com' });
  // title = signal('Learning to Code');
  // name = signal('My Name Is Muzammil');
  // amount = signal(20);
  // @ViewChild('container', { read: ViewContainerRef })
  // container: ViewContainerRef | undefined;
  // async loadUserDetails() {
  //   this.container?.clear();
  //   const { UserDetailsCustom } = await import('./pages/user-details-custom/user-details-custom');
  //   this.container?.createComponent(UserDetailsCustom);
  // }
  // email = new FormControl('');
  // password = new FormControl('');
  // login() {
  //   console.log(`Email: ${this.email.value}`);
  //   console.log(`Password: ${this.password.value}`);
  // }
  // reset() {
  //   this.email.setValue('');
  //   this.password.setValue('');
  // }
  // loginForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });
  // handleSubmit() {
  //   console.log(this.loginForm.value);
  // }
  // reset() {
  //   this.loginForm.setValue({
  //     name: '',
  //     email: '',
  //     password: '',
  //   });
  // }
  // email = new FormControl('');
  // password = new FormControl('');
  // login() {
  //   console.log(this.email.value);
  //   console.log(this.password.value);
  // }
  // reset() {
  //   this.email.setValue('');
  //   this.password.setValue('');
  // }
  // loginForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8),
  //     Validators.maxLength(16),
  //   ]),
  // });
  //
  // get name() {
  //   return this.loginForm.get('name');
  // }
  //
  // get email() {
  //   return this.loginForm.get('email');
  // }
  //
  // get password() {
  //   return this.loginForm.get('password');
  // }
  //
  // handleProfile() {
  //   console.log(this.loginForm.value);
  // }
  //
  // reset() {
  //   this.loginForm.setValue({
  //     name: '',
  //     email: '',
  //     password: '',
  //   });
  // }
  // loginModel = signal({
  //   email: '',
  //   password: '',
  // });
  //
  // loginForm = form(this.loginModel, (field) => {
  //   required(field.email, { message: 'Please enter email address' });
  //   minLength(field.email, 5, { message: 'Email should be atleast 5 charachters' });
  //   email(field.email, { message: 'Email is invalid' });
  //   required(field.password, { message: 'Please enter your password' });
  //   minLength(field.password, 8, { message: 'Password must be atleast 8 charachters long' });
  //   maxLength(field.password, 16, { message: 'Password must not exceed 16 charachters' });
  // });
  //
  // login() {
  //   console.log(this.loginForm.email().value());
  //   console.log(this.loginForm.password().value());
  // }
  //
  // reset() {
  //   this.loginForm.email().value.set('');
  //   this.loginForm.password().value.set('');
  // }
  // userDetails: any = undefined;
  //
  // addUser(data: NgForm) {
  //   console.log(data);
  //   this.userDetails = data;
  //
  // }
  //
  // constructor(private productService: ProductService) {}
  //
  // productData: any = signal([]);
  //
  // ngOnInit() {
  //   let data = this.productService.getProducts();
  //   this.productData.set(data);
  // }
  // constructor(private usersService: Users) {}
  //
  // usersData = signal<User[]>([]);
  //
  // ngOnInit() {
  //   this.usersService.getProducts().subscribe((data) => {
  //     this.usersData.set(data.users);
  //   });
  // }
  //
  // constructor(private user: UsersService) {}
  // usersData = signal<User[] | undefined>(undefined);
  // ngOnInit() {
  //   this.user.getUsers().subscribe((data) => {
  //     this.usersData.set(data);
  //   });
  // }

  data = signal<any[]>([]);

  myObservable = new Observable((observer) => {
    // observer.next([1, 2, 3, 4, 5]);
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
  });

  GetAsyncData() {
    this.myObservable.subscribe((val: any) => {
      this.data.update((item) => [...item, val]);
    });
  }
}
