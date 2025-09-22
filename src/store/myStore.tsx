import { makeAutoObservable } from 'mobx';

import { HeaderTitle } from '../assets/constants';

export type TodoListType = {
  todo: string,
  done: boolean,
  date: string;
  id: string,
};

class MyStore {
  openMenu: boolean = false;

  /**
   * Лоадер
   */
  isLoading: boolean = false;

  /**
   * Доступ
   */
  access: boolean = false;

  headerTitle: HeaderTitle = HeaderTitle.startPage;

  name: string = '';

  email: string = '';

  password: string = '';

  successfulRegistration: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  clearStore = () => {
    this.email = '';
    this.name = '';
    this.access = false;
    this.password = '';
    this.successfulRegistration = false;
  };

  setOpenMenu = (open: boolean) => {
    this.openMenu = open;
  };

  setAccess = (access: boolean) => {
    this.access = access;
  };

  setName = (name: string) => {
    this.name = name;
  };

  setHeaderTitle = (title: HeaderTitle) => {
    this.headerTitle = title;
  };

  setEmail = (email: string) => {
    this.email = email;
  };

  setSuccessfulRegistration = (payload: boolean) => {
    this.successfulRegistration = payload;
  };

  setPassword = (password: string) => {
    this.password = password;
  };
}

export default new MyStore();
