import constant from "~/constants";
interface IState {}

export const useUsersStore = defineStore(constant.USERS_STORE, {
  state: (): IState => ({}),
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
}
