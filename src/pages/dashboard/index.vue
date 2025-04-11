<template>
  <div class="flex w-full h-screen items-stretch">
    <div class="flex flex-col px-20 w-full gap-8 justify-center h-full py-10">
      <div class="h-full w-full flex flex-col justify-center">
        <div class="flex flex-col gap-8">
          <img src="/logo.svg" alt="Logo" class="w-32" />
          <div class="flex flex-col gap-3">
            <span
              class="text-[96px] text-white font-bold tracking-tighter leading-[120%]"
            >
              Gorjeta <br />
              do Cerol
            </span>
            <span class="text-xl leading-[1.2] tracking-tighter text-white">
              Manda teu código no chat AGORA e garante teu prêmio ao vivo! 🎁
            </span>
          </div>
          <div class="flex items-stretch gap-4">
            <div class="flex flex-col gap-1 w-full max-w-[300px]">
              <input
                type="email"
                v-model="email"
                class="bg-[#140D0B] rounded-lg px-4 py-2 text-white border border-transparent placeholder:text-white h-[56px] focus:border-[#FF7700] focus:outline-none focus:ring-0"
                placeholder="Email"
                :class="{
                  'border-red-500': emailInvalid && email.length > 0,
                  'opacity-80': sending,
                }"
                @input="emailInvalid = false"
              />
              <span v-if="emailInvalid" class="text-red-500 text-xs">
                Email inválido
              </span>
            </div>
            <input
              type="number"
              v-model="tipValue"
              class="bg-[#140D0B] rounded-lg px-4 py-2 text-white border border-transparent placeholder:text-white w-full max-w-[300px] h-[56px] focus:border-[#FF7700] focus:outline-none focus:ring-0"
              placeholder="Valor"
              :min="0"
              :class="{
                'opacity-80': sending,
              }"
            />
            <button
              type="button"
              :disabled="sending"
              class="bg-[#FF7700] rounded-lg px-6 py-2 font-bold h-[56px]"
              @click="sendEmail"
            >
              <span v-if="!sending"> Enviar </span>
              <div
                v-else
                class="w-8 aspect-square rounded-full border-[6px] border-[#140D0B] animate-spin border-r-transparent"
              ></div>
            </button>
          </div>
        </div>
      </div>
      <span
        class="text-[#D7CBB8] text-[32px] font-medium leading-tight tracking-tighter"
      >
        Fica de olho e aproveita pra agradecer o apoio ao vivo!
      </span>
    </div>
    <div
      class="flex flex-col bg-[#FF7700] h-full w-full max-w-[830px] relative items-center justify-center"
    >
      <div class="flex flex-col gap-6 absolute top-10 right-10 z-10">
        <img
          v-for="i in [1, 2, 3, 4, 5]"
          src="/arrowup.svg"
          alt="ArrowUp"
          class=""
        />
      </div>
      <img
        src="/big4.svg"
        alt="Hero"
        class="absolute h-full w-full object-cover"
      />
      <div class="relative">
        <img
          src="/aside2.svg"
          alt="Hero"
          class="absolute -top-16 -left-20 max-w-[200px]"
        />
        <img src="/hero.png" alt="Hero" class="max-h-[550px]" />
        <img
          src="/ticket.svg"
          alt="Ticket"
          class="absolute -translate-x-1/2 -translate-y-3/4 max-w-[250px]"
        />
        <img
          src="/aside.svg"
          alt="Hero"
          class="absolute -bottom-10 -right-10 max-w-[150px]"
        />
      </div>
    </div>
    <ModalConfirmSuccess v-if="sent" @close="sent = false" />
  </div>
</template>

<script lang="ts" setup>
import { addDoc, collection } from "firebase/firestore";
const email = ref("");
const emailInvalid = ref(false);
const tipValue = ref(0);
const sending = ref(false);
const sent = ref(false);
const { $firebase } = useNuxtApp();

const reset = () => {
  email.value = "";
  tipValue.value = 0;
};

const handleObjectToCreate = () => {
  return {
    email: email.value,
    tipValue: tipValue.value,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    done: false,
  };
};

const isEmailValid = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const sendEmail = async () => {
  emailInvalid.value = false;
  sent.value = false;
  if (!isEmailValid(email.value)) {
    emailInvalid.value = true;
    // Show error message for invalid email
    return;
  }
  sending.value = true;
  try {
    const docRef = await addDoc(
      collection(($firebase as any).db, "tips"),
      handleObjectToCreate()
    );

    if (!docRef) return;
    reset();
    // Show success message
    sent.value = true;
  } catch (error) {
    console.error(error);
  } finally {
    sending.value = false;
  }
};
</script>
