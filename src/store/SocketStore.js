import { defineStore } from "pinia";

export const useChatStore = defineStore('chat',{
  state: () => ({
    connected : false
  }),

})

