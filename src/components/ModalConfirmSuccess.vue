<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
  >
    <div
      class="flex flex-col items-center gap-4 bg-[#140D0B] p-8 rounded-lg shadow-lg shadow-[#6f453a] text-white w-full max-w-[400px]"
    >
      <h2 class="text-xl font-bold">Sucesso!</h2>
      <p>Gorjeta enviada com sucesso!</p>
      <button
        @click="$emit('close')"
        class="bg-[#FF7700] text-[#140D0B] px-4 py-2 rounded w-full"
      >
        Fechar
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (e: "close"): void;
}>();
</script>
